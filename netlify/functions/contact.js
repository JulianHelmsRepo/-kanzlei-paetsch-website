// Kontaktformular-Endpoint für die Kanzlei-Website.
// Nimmt JSON per POST entgegen, prüft/validiert die Angaben und versendet
// die Anfrage per SMTP (Strato) über nodemailer.
//
// Hinweis: package.json hat "type": "module", daher ist diese Datei ESM.
//
// Erwartet folgende Environment-Variablen (in Netlify hinterlegen, NICHT im Code):
//   SMTP_HOST  – z. B. smtp.strato.de
//   SMTP_PORT  – z. B. 465 (SSL) oder 587 (STARTTLS)
//   SMTP_USER  – Postfach/Absenderadresse, z. B. info@rae-vp.de
//   SMTP_PASS  – Passwort des Postfachs

import nodemailer from 'nodemailer';

// Einheitliche JSON-Antwort mit den Sicherheits-Grundheadern.
function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
    body: JSON.stringify(body),
  };
}

// Einfache, praxistaugliche E-Mail-Validierung.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const handler = async (event) => {
  // Nur POST zulassen.
  if (event.httpMethod !== 'POST') {
    return json(405, {
      ok: false,
      error: 'Diese Adresse akzeptiert nur POST-Anfragen.',
    });
  }

  // JSON parsen.
  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch {
    return json(400, {
      ok: false,
      error: 'Die Anfrage konnte nicht gelesen werden. Bitte versuchen Sie es erneut.',
    });
  }

  const str = (v) => (typeof v === 'string' ? v.trim() : '');
  const name = str(data.name);
  const email = str(data.email);
  const message = str(data.message);
  const company = str(data.company).slice(0, 200); // "Firma" (optional)
  const phone = str(data.phone).slice(0, 60); // Telefon (optional)
  const area = str(data.area).slice(0, 200); // Rechtsgebiet (optional)
  const urgency = str(data.urgency).slice(0, 60); // Dringlichkeit (optional)
  const website = str(data.website); // Honeypot – muss leer bleiben
  const ts = Number(data.ts);

  // --- Spam-Schutz (ohne externe Dienste) ---------------------------------
  // 1) Honeypot: Ein echter Nutzer füllt das versteckte Feld "website" nie aus.
  //    Bots tun es oft. In dem Fall so tun, als wäre alles in Ordnung, aber
  //    KEINE Mail versenden.
  if (website !== '') {
    return json(200, { ok: true });
  }

  // 2) Zeit-Check: Wird das Formular unrealistisch schnell (< 3 s) abgeschickt,
  //    ist es mit hoher Wahrscheinlichkeit ein Bot. Ebenfalls still verwerfen.
  if (Number.isFinite(ts) && Date.now() - ts < 3000) {
    return json(200, { ok: true });
  }

  // --- Validierung ----------------------------------------------------------
  const errors = [];
  if (!name) errors.push('Bitte geben Sie Ihren Namen an.');
  if (name.length > 200) errors.push('Der Name ist zu lang.');
  if (!EMAIL_RE.test(email)) errors.push('Bitte geben Sie eine gültige E-Mail-Adresse an.');
  if (email.length > 200) errors.push('Die E-Mail-Adresse ist zu lang.');
  if (message.length < 5) errors.push('Bitte schildern Sie Ihr Anliegen etwas ausführlicher.');
  if (message.length > 5000) errors.push('Die Nachricht ist zu lang (max. 5000 Zeichen).');

  if (errors.length > 0) {
    return json(400, { ok: false, error: errors.join(' ') });
  }

  // --- SMTP-Konfiguration prüfen -------------------------------------------
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    // Konfigurationsfehler – bewusst keine Details nach außen geben.
    console.error('SMTP-Konfiguration unvollständig (SMTP_HOST/PORT/USER/PASS).');
    return json(502, {
      ok: false,
      error:
        'Der Versand ist derzeit nicht möglich. Bitte schreiben Sie uns direkt an info@rae-vp.de.',
    });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // 465 = SSL, sonst STARTTLS
    auth: { user, pass },
  });

  // Zeilenumbrüche im Betreff neutralisieren (Header-Injection vermeiden).
  const safeName = name.replace(/[\r\n]+/g, ' ');

  try {
    await transporter.sendMail({
      // Für die Zustellbarkeit muss der Absender die eigene Domain sein.
      from: `"Website Kontakt" <${user}>`,
      to: user,
      replyTo: email,
      subject: `Neue Mandatsanfrage über die Website – ${safeName}`,
      text:
        `Neue Anfrage über das Kontaktformular:\n\n` +
        `Name:         ${name}\n` +
        `Firma:        ${company || '–'}\n` +
        `E-Mail:       ${email}\n` +
        `Telefon:      ${phone || '–'}\n` +
        `Rechtsgebiet: ${area || '–'}\n` +
        `Dringlichkeit:${urgency ? ' ' + urgency : ' –'}\n\n` +
        `Nachricht:\n${message}\n`,
    });
  } catch (err) {
    console.error('Mailversand fehlgeschlagen:', err);
    return json(502, {
      ok: false,
      error:
        'Ihre Nachricht konnte nicht versendet werden. Bitte schreiben Sie uns direkt an info@rae-vp.de.',
    });
  }

  return json(200, { ok: true });
};
