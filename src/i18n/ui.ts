// Zentrale Inhalte (Deutsch).
// Alle Texte sind Platzhalter bzw. aus dem Mockup übernommen und werden später
// redaktionell überarbeitet.

export const languages = { de: 'Deutsch' } as const;
export const defaultLang: Lang = 'de';
export type Lang = keyof typeof languages;

// Seiten-Schlüssel für die einzelnen Routen.
export type PageKey =
  | 'home'
  | 'practice'
  | 'firm'
  | 'contact'
  | 'imprint'
  | 'privacy';

export const routes: Record<Lang, Record<PageKey, string>> = {
  de: {
    home: '/',
    practice: '/rechtsgebiete/',
    firm: '/kanzlei/',
    contact: '/kontakt/',
    imprint: '/impressum/',
    privacy: '/datenschutz/',
  },
};

// Zentrale Kanzlei-Stammdaten (sprachneutral).
export const firm = {
  name: 'Kanzlei Paetsch',
  legalName: 'Rechtsanwaltskanzlei Fabian Paetsch',
  phoneDisplay: '+49 176 99203507',
  phoneHref: 'tel:+4917699203507',
  email: 'info@rae-vp.de',
  street: 'Hegestraße 4',
  city: '20251 Hamburg',
  country: 'DE',
} as const;

export interface PracticeArea {
  num: string;
  slug: string;
  title: string;
  short: string;
  long: string;
  points: string[];
}

export interface Partner {
  name: string;
  role: string;
  areas: string;
  bio: string;
  imageCaption: string;
}

export interface SiteContent {
  htmlLang: string;
  nav: { practice: string; firm: string; contact: string };
  meta: Record<PageKey, { title: string; description: string }>;
  a11y: { skipToContent: string; openMenu: string; closeMenu: string; toggleLang: string };
  brand: { roleline: string };
  hero: { eyebrow: string; title: string; lead: string; cta: string; imageCaption: string };
  practiceSection: { eyebrow: string; title: string; count: string; viewAll: string; intro: string };
  practiceAreas: PracticeArea[];
  firmSection: { eyebrow: string; title: string; lead: string; viewTeam: string };
  partners: Partner[];
  approach: { eyebrow: string; title: string; items: { title: string; text: string }[] };
  contactSection: {
    eyebrow: string;
    title: string;
    lead: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    hoursLabel: string;
    hours: string;
    mapCaption: string;
    form: {
      name: string;
      namePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      area: string;
      urgency: string;
      urgencyOptions: string[];
      message: string;
      messagePlaceholder: string;
      consentPre: string;
      consentLink: string;
      consentPost: string;
      submit: string;
      note: string;
      placeholderNotice: string;
    };
  };
  cta: { title: string; text: string; button: string };
  footer: { blurb: string; nav: string; legal: string; rights: string; fontsNote: string };
  legalPages: {
    imprint: { title: string; sections: { heading: string; body: string }[] };
    privacy: {
      title: string;
      lead?: string;
      sections: { heading: string; body: string; kind?: 'divider' }[];
    };
  };
}

const de: SiteContent = {
  htmlLang: 'de',
  nav: { practice: 'Rechtsgebiete', firm: 'Kanzlei', contact: 'Kontakt' },
  meta: {
    home: {
      title: 'Kanzlei Paetsch – Rechtsanwälte in Hamburg',
      description:
        'Wirtschaftskanzlei in Hamburg für kleinere Unternehmen und Gründer – mit besonderer Erfahrung in der Gastronomie. Arbeits-, Handels-, Gesellschafts-, Insolvenz- und Vertragsrecht.',
    },
    practice: {
      title: 'Rechtsgebiete – Kanzlei Paetsch',
      description:
        'Unsere Schwerpunkte: Arbeitsrecht, Handels- & Gesellschaftsrecht, Insolvenzrecht und Vertragsrecht.',
    },
    firm: {
      title: 'Die Kanzlei – Kanzlei Paetsch',
      description:
        'Zwei Partner, eine Haltung: Fabian Paetsch und Frederik Voltmann beraten kleinere Unternehmen und Unternehmer am Anfang ihres Weges – mit besonderer Erfahrung in der Gastronomie.',
    },
    contact: {
      title: 'Kontakt – Kanzlei Paetsch',
      description:
        'Schildern Sie uns Ihr Anliegen. Wir melden uns in der Regel binnen eines Werktags. Kanzlei Paetsch, Hegestraße 4, 20251 Hamburg.',
    },
    imprint: { title: 'Impressum – Kanzlei Paetsch', description: 'Impressum und Anbieterkennzeichnung der Kanzlei Paetsch.' },
    privacy: { title: 'Datenschutz – Kanzlei Paetsch', description: 'Datenschutzerklärung der Kanzlei Paetsch.' },
  },
  a11y: {
    skipToContent: 'Zum Inhalt springen',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    toggleLang: 'Sprache wechseln',
  },
  brand: { roleline: 'Rechtsanwalt Fabian Paetsch – mit Frederik Voltmann, Of Counsel' },
  hero: {
    eyebrow: 'Wirtschaftskanzlei · Hamburg',
    title: 'Kompetente Beratung – engagiert und auf Augenhöhe.',
    lead: 'Wir beraten unsere Mandanten auf allen Gebieten des Wirtschaftsrechts mit Schwerpunkt auf dem Arbeitsrecht, Handels- und Gesellschaftsrecht und Insolvenzrecht.',
    cta: 'Mandatsanfrage stellen',
    imageCaption: 'KI-generiert',
  },
  practiceSection: {
    eyebrow: 'Was wir tun',
    title: 'Rechtsgebiete',
    count: '04 Schwerpunkte',
    viewAll: 'Alle Rechtsgebiete',
    intro:
      'Vier Schwerpunkte, ein Anspruch: die optimale Lösung für Sie.',
  },
  practiceAreas: [
    {
      num: '01',
      slug: 'arbeitsrecht',
      title: 'Arbeitsrecht',
      short: 'Von Arbeitsverträgen über Kündigungen bis zur gerichtlichen Vertretung – für Arbeitgeber und Arbeitnehmer.',
      long: 'Von Arbeitsverträgen über deren Beendigung bis zur gerichtlichen Vertretung – für Arbeitgeber und Arbeitnehmer, mit besonderer Erfahrung in der Gastronomie, u. a.:',
      points: [
        'Gestaltung von Arbeitsverträgen und Betriebsvereinbarungen',
        'Vertretung in Kündigungsschutz- und sonstigen arbeitsgerichtlichen Verfahren',
        'Trennungssituationen, Vergütung, Bonus und Wettbewerbsverbote',
      ],
    },
    {
      num: '02',
      slug: 'handels-gesellschaftsrecht',
      title: 'Handels- & Gesellschaftsrecht',
      short: 'Von der Gründung über die laufende Betreuung bis zu Umstrukturierung und Exit – Strukturen, die tragen.',
      long: 'Von der Gründung über die laufende Betreuung bis zum Exit, u. a.:',
      points: [
        'Gründung, Strukturierung und laufende Betreuung von Unternehmern, Gesellschaftern und Geschäftsführern',
        'Gesellschaftsverträge und Gesellschaftervereinbarungen',
        'Corporate Housekeeping: Beschlüsse, Registeranmeldungen und laufende gesellschaftsrechtliche Dokumentation',
        'Beratung von Geschäftsführung und Gesellschaftern zu Rechten, Pflichten und Haftung',
        'Vertretung bei Gesellschafter- und Geschäftsführerstreitigkeiten',
        'Gesellschaftsrechtliche Begleitung von Gastronomiebetrieben, von der Gründung bis zur Expansion und zum Verkauf',
      ],
    },
    {
      num: '03',
      slug: 'insolvenzrecht',
      title: 'Insolvenzrecht',
      short: 'Sanierung und Krisenberatung für Unternehmen, Geschäftsführer und Gläubiger – innerhalb wie außerhalb des Verfahrens.',
      long: 'Sanierung und Krisenberatung für Unternehmen, Geschäftsführer, Anfechtungsgegner und Gläubiger, u. a.:',
      points: [
        'Beratung in der Unternehmenskrise, Prüfung von Haftungsrisiken',
        'Vorbereitung von Insolvenzanträgen, Sanierung und Restrukturierung',
        'Forderungsanmeldung und -durchsetzung für Gläubiger',
        'Forderungseinziehung und Forderungsmanagement, außergerichtlich und im Verfahren',
      ],
    },
    {
      num: '04',
      slug: 'vertragsrecht',
      title: 'Vertragsrecht',
      short: 'Verträge, die im Streitfall halten – von der Gestaltung und Verhandlung bis zur gerichtlichen Durchsetzung.',
      long: 'Verträge, die im Streitfall halten – von der Gestaltung bis zur Durchsetzung, u. a.:',
      points: [
        'Gestaltung, Prüfung und Verhandlung von Verträgen',
        'Durchsetzung und Abwehr von Zahlungs- und Schadensersatzansprüchen',
        'Rund um die Gastronomie: Beratung zu Miet-, Pacht- und Lieferantenverträgen',
      ],
    },
  ],
  firmSection: {
    eyebrow: 'Die Kanzlei',
    title: 'Eine Kanzlei. Eine Haltung.',
    lead: 'Für kleinere Unternehmen und Unternehmer am Anfang ihres Weges – mit besonderer Erfahrung in der Gastronomie.',
    viewTeam: 'Kanzlei kennenlernen',
  },
  partners: [
    {
      name: 'Fabian Paetsch',
      role: 'Kanzleigründer',
      areas: 'Arbeitsrecht, Vertragsrecht, Handels- & Gesellschaftsrecht',
      bio: 'Fabian Paetsch hat Rechtswissenschaften in Mainz, Hamburg und Lissabon studiert und ist seit 2024 als Rechtsanwalt zugelassen. Er sammelte Erfahrung im Bereich der streitigen Prozessführung unter anderem bei einem auf Legal Tech spezialisierten Start-up und ist seit 2025 selbstständig tätig. Er arbeitet dabei mit spezialisierten Wirtschaftskanzleien zusammen. Seine Schwerpunkte liegen in der streitigen Prozessführung sowie Beratung auf allen Gebieten des Wirtschaftsrechts, insbesondere im Arbeitsrecht sowie im Handels- und Gesellschaftsrecht.',
      imageCaption: 'Foto: Fabian Paetsch, Rechtsanwalt',
    },
    {
      name: 'Frederik Voltmann',
      role: 'Of Counsel',
      areas: 'Insolvenzrecht, Handels- & Gesellschaftsrecht',
      bio: 'Frederik Voltmann ist seit 2022 als Rechtsanwalt zugelassen und berät Unternehmen im Insolvenz- und Sanierungsrecht sowie im Handels- und Gesellschaftsrecht. Dabei berät und vertritt er vor allem Geschäftsführer, Kreditgeber, Investoren und Lieferanten innerhalb wie außerhalb eines Insolvenzverfahrens. Zudem vertritt er Geschäftsführer und Anfechtungsgegner im Zusammenhang mit Anfechtungs- und Haftungsansprüchen.',
      imageCaption: 'Foto: Frederik Voltmann, Of Counsel',
    },
  ],
  approach: {
    eyebrow: 'Unser Selbstverständnis',
    title: 'Wie wir arbeiten',
    items: [
      { title: 'Persönlich', text: 'Wir legen großen Wert auf eine gute Mandatsbeziehung und stehen für eine enge Betreuung der Mandanten. Langfristige Mandatsbeziehungen stehen bei uns im Vordergrund.' },
      { title: 'Auf Augenhöhe', text: 'Wir formulieren klar und denken den Ernstfall mit. Was wir liefern, soll auch unter Druck tragen.' },
      { title: 'Ehrlich', text: 'Wir sagen auch, was Sie nicht hören wollen: realistische Einschätzungen statt falscher Erwartungen, klare Kante statt reines Vergütungsinteresse.' },
      { title: 'Kreativ', text: 'Wir suchen pragmatische Lösungen, die Ihnen und Ihrem Unternehmen passen – dabei denken wir auch mal um die Ecke.' },
      { title: 'Fair und flexibel', text: 'Wir bieten Vergütungsmodelle an, die Ihrem Fall gerecht werden.' },
    ],
  },
  contactSection: {
    eyebrow: 'Erstkontakt',
    title: 'Schildern Sie uns Ihr Anliegen.',
    lead: 'Wir melden uns in der Regel binnen eines Werktags. Alle Angaben werden vertraulich behandelt.',
    phoneLabel: 'Telefon',
    emailLabel: 'E-Mail',
    addressLabel: 'Anschrift',
    hoursLabel: 'Erreichbarkeit',
    hours: 'Mo–Fr, 9:00–18:00 Uhr',
    mapCaption: 'Karte: Hegestraße 4, 20251 Hamburg',
    form: {
      name: 'Name',
      namePlaceholder: 'Vor- und Nachname',
      company: 'Firma',
      companyPlaceholder: 'Unternehmen (optional)',
      email: 'E-Mail',
      emailPlaceholder: 'name@unternehmen.de',
      phone: 'Telefon',
      phonePlaceholder: '+49 40 …',
      area: 'Rechtsgebiet',
      urgency: 'Dringlichkeit',
      urgencyOptions: ['Normal', 'Dringend', 'Sehr dringend'],
      message: 'Nachricht',
      messagePlaceholder: 'Kurze Schilderung Ihres Anliegens',
      consentPre: 'Ich habe die ',
      consentLink: 'Datenschutzerklärung',
      consentPost:
        ' gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu.',
      submit: 'Anfrage senden',
      note: 'Pflichtfelder sind mit * gekennzeichnet.',
      placeholderNotice:
        'Hinweis: Das Formular ist derzeit eine Vorschau. Der Versand wird später angebunden.',
    },
  },
  cta: {
    title: 'Sie haben ein Anliegen?',
    text: 'Nehmen Sie Kontakt auf – wir prüfen, ob und wie wir helfen können.',
    button: 'Mandatsanfrage stellen',
  },
  footer: {
    blurb: 'Wirtschaftskanzlei in Hamburg – für kleinere Unternehmen und Gründer, mit besonderer Erfahrung in der Gastronomie.',
    nav: 'Navigation',
    legal: 'Rechtliches',
    rights: 'Alle Rechte vorbehalten.',
    fontsNote: 'Schriften lokal ausgeliefert – keine externen Ladevorgänge.',
  },
  legalPages: {
    imprint: {
      title: 'Impressum',
      sections: [
        {
          heading: 'Angaben gemäß § 5 DDG',
          body: 'Rechtsanwaltskanzlei Fabian Paetsch\nHegestraße 4\n20251 Hamburg\n\nVerantwortlicher für diese Website: Rechtsanwalt Fabian Paetsch',
        },
        {
          heading: 'Kontakt',
          body: 'Telefon: +49 156 79820455\nE-Mail: info@rae-vp.de',
        },
        {
          heading: 'Berufsrechtliche Angaben',
          body: 'Berufsbezeichnung: Rechtsanwalt (verliehen in der Bundesrepublik Deutschland)\n\nZuständige Rechtsanwaltskammer: Hanseatische Rechtsanwaltskammer Hamburg, Bleichenbrücke 9, 20354 Hamburg, Telefon 040 35 74 41, Telefax 040 35 74 41 41, E-Mail info@rechtsanwaltskammerhamburg.de\n\nEs gelten insbesondere folgende berufsrechtliche Regelungen: die Bundesrechtsanwaltsordnung (BRAO), die Berufsordnung für Rechtsanwälte (BORA), das Rechtsanwaltsvergütungsgesetz (RVG), die Fachanwaltsordnung sowie die Berufsregeln der Rechtsanwälte der Europäischen Gemeinschaft und das Gesetz über die Tätigkeit europäischer Rechtsanwälte (EuRAG). Diese sind abrufbar unter www.gesetze-im-internet.de bzw. auf der Website der Bundesrechtsanwaltskammer unter www.brak.de.\n\nRechtsanwalt Fabian Paetsch vertritt Mandanten im gesamten Bundesgebiet, insbesondere in den Bundesländern Hamburg, Berlin, Schleswig-Holstein und Niedersachsen.',
        },
        {
          heading: 'Umsatzsteuer-ID',
          body: 'Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: beantragt, wird nachgereicht',
        },
        {
          heading: 'Berufshaftpflichtversicherung',
          body: 'Rechtsanwalt Fabian Paetsch ist berufshaftpflichtversichert bei: ERGO Versicherung AG, ERGO-Platz 1, 40477 Düsseldorf Räumlicher Geltungsbereich: Bundesrepublik Deutschland',
        },
        {
          heading: 'Verbraucherstreitbeilegung',
          body: 'Für vermögensrechtliche Streitigkeiten aus dem Mandatsverhältnis ist die Schlichtungsstelle der Rechtsanwaltschaft, Rauchstraße 26, D-10787 Berlin, zuständig. Rechtsanwalt Fabian Paetsch ist zur Teilnahme an Streitbeilegungsverfahren bei der Schlichtungsstelle der Rechtsanwaltschaft nicht bereit.',
        },
        {
          heading: 'Haftung für Inhalte',
          body: 'Es wird keinerlei Gewähr für die Aktualität, Vollständigkeit und Richtigkeit der Textinhalte dieser Webseiten übernommen. Jegliche Haftung diesbezüglich ist ausgeschlossen.',
        },
        {
          heading: 'Urheberrechtshinweis',
          body: 'Die auf unserer Internetseite vorhandenen Texte, Bilder, Fotos, Videos oder Grafiken unterliegen in der Regel dem Schutz des Urheberrechts. Jede unberechtigte Verwendung (insbesondere die Vervielfältigung, Bearbeitung oder Verbreitung) dieser urheberrechtsgeschützten Inhalte ist daher untersagt. Wenn Sie beabsichtigen, diese Inhalte oder Teile davon zu verwenden, kontaktieren Sie uns bitte im Voraus unter den oben stehenden Angaben. Soweit wir nicht selbst Inhaber der benötigten urheberrechtlichen Nutzungsrechte sein sollten, bemühen wir uns, einen Kontakt zum Berechtigten zu vermitteln.',
        },
        {
          heading: 'Lesbarkeit',
          body: 'Um bei den auf unseren Internetseiten dargestellten Texten die Lesbarkeit zu verbessern, wird in der Regel nur das generische Maskulinum, also die männliche Form verwendet. Soweit nicht anders angegeben, sind alle Formulierungen aber geschlechtsneutral und umfassend zu verstehen.',
        },
      ],
    },
    privacy: {
      title: 'Datenschutzerklärung',
      lead: 'Informationen zum Datenschutz für Mandanten, Geschäftspartner und Besucher unserer Website',
      sections: [
        {
          heading: '1. Für Besucher der Website',
          body: '',
          kind: 'divider',
        },
        {
          heading: '1.1 Name und Kontaktdaten des Verantwortlichen',
          body: 'Verantwortlicher für den Online-Auftritt gem. Art. 4 Abs. 7 DSGVO ist:\n\nRechtsanwaltskanzlei Fabian Paetsch\nHegestraße 4\n20251 Hamburg\n\nE-Mail: info@rae-vp.de',
        },
        {
          heading: '1.2.1 Art der Verarbeitung',
          body: 'Beim Aufruf der Website werden durch Ihren Internet-Browser automatisch folgende Daten an unseren Server gesendet und zeitlich begrenzt in einer Protokolldatei (Logfile) gespeichert:\n\n– Browsertyp/-version\n– verwendetes Betriebssystem\n– Name der zuvor besuchten Website\n– IP-Adresse/Hostname Ihres Gerätes\n– Datum und Uhrzeit der Serveranfrage',
        },
        {
          heading: '1.2.2 Zwecke und Rechtsgrundlage der Verarbeitung',
          body: 'Die Verarbeitung Ihrer Daten erfolgt auf Grundlage unseres berechtigten Interesses gem. Art. 6 Abs. 1 S. 1 lit. f) DSGVO zu den folgenden Zwecken:\n\n– zur Ermöglichung der Nutzung unserer Webseite,\n– zur Darstellung unseres Leistungsportfolios,\n– zur Sicherstellung eines ordnungsgemäßen Betriebes unserer Webseite sowie\n– zur Erfüllung rechtlicher Pflichten, d.h. zur Abwehr und Aufklärung von Cyberangriffen.\n\nAus Gründen, die sich aus Ihrer besonderen Situation ergeben, können Sie nach Art. 21 DSGVO jederzeit gegen die Verarbeitung der Sie betreffenden Daten Widerspruch einlegen. Wenn Sie Widerspruch einlegen, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.',
        },
        {
          heading: '1.2.3 Empfänger und Kategorien von Empfängern',
          body: 'Unsere Website wird bei der STRATO AG, Otto-Ostrowski-Straße 7, 10249 Berlin, in Deutschland gehostet. Mit diesem Dienstleister wurde eine Vereinbarung zur Auftragsverarbeitung gem. Art. 28 DSGVO abgeschlossen.\n\nDie technische Bereitstellung unserer Website (Hosting) erfolgt zudem über Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, USA („Netlify“). Netlify verarbeitet die in Ziffer 1.2.1. genannten Daten in unserem Auftrag und hält sie für bis zu 30 Tage in Server-Logfiles vor, bevor sie automatisch gelöscht werden. Mit Netlify besteht ein Auftragsverarbeitungsvertrag gem. Art. 28 DSGVO. Da Netlify seinen Sitz in den USA hat, werden Ihre Daten hierbei in ein Drittland übermittelt; Näheres zu dieser Drittlandsübermittlung regelt Ziffer 2.6., die entsprechend gilt.\n\nEine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt im Übrigen nur, sofern diese zur Abwehr oder Aufklärung von Straftaten erforderlich und/oder wir anderweitig gesetzlich dazu verpflichtet sind.',
        },
        {
          heading: '1.3.1 Art der Verarbeitung',
          body: 'Wenn Sie über das auf unserer Website bereitgestellte Kontaktformular, per Telefon oder per E-Mail mit uns Kontakt aufnehmen, verarbeiten wir die von Ihnen mitgeteilten Daten, insbesondere Ihren Namen, Ihre Kontaktdaten (z.B. E-Mail-Adresse und/oder Telefonnummer) sowie den Inhalt Ihrer Anfrage, zur Bearbeitung und Beantwortung Ihres Anliegens.\n\nDie über das Kontaktformular übermittelten Daten werden technisch über Netlify verarbeitet und automatisch an unser E-Mail-Postfach bei der STRATO AG weitergeleitet, wo wir sie zur Bearbeitung Ihrer Anfrage empfangen und speichern. Mit beiden Dienstleistern bestehen Auftragsverarbeitungsverträge gem. Art. 28 DSGVO.',
        },
        {
          heading: '1.3.2 Zwecke und Rechtsgrundlage der Verarbeitung',
          body: 'Die Verarbeitung der bei der Kontaktaufnahme mitgeteilten Daten dient allein der Bearbeitung Ihrer Anfrage. Sofern die Kontaktaufnahme der Anbahnung eines Mandatsverhältnisses dient, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 S. 1 lit. b) DSGVO (vorvertragliche Maßnahmen). In allen übrigen Fällen erfolgt die Verarbeitung auf Grundlage unseres berechtigten Interesses an der Beantwortung Ihrer Anfrage gem. Art. 6 Abs. 1 S. 1 lit. f) DSGVO.\n\nAus Gründen, die sich aus Ihrer besonderen Situation ergeben, können Sie nach Art. 21 DSGVO jederzeit gegen die Verarbeitung der Sie betreffenden Daten Widerspruch einlegen. Wenn Sie Widerspruch einlegen, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.',
        },
        {
          heading: '1.3.3 Speicherdauer',
          body: 'Wir speichern die im Rahmen der Kontaktaufnahme mitgeteilten Daten grundsätzlich nur so lange, wie dies zur Bearbeitung Ihrer Anfrage erforderlich ist. Führt die Kontaktaufnahme zur Begründung eines Mandatsverhältnisses, gelten die unter Ziffer 2.7. genannten Speicherfristen. Führt die Kontaktaufnahme nicht zu einem Mandatsverhältnis, löschen wir Ihre Daten, sobald erkennbar ist, dass der Sachverhalt abschließend geklärt ist, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.',
        },
        {
          heading: '1.4 Ihre Rechte als betroffene Person',
          body: 'Soweit Ihre personenbezogenen Daten anlässlich des Besuchs unserer Website verarbeitet werden, stehen Ihnen als „betroffene Person“ im Sinne der DSGVO bei Vorliegen der gesetzlichen Voraussetzungen folgende Rechte zu:\n\nArt. 15 DSGVO: Auskunftsrecht der betroffenen Person\nSie haben nach Art. 15 DSGVO das Recht, Auskunft darüber zu erhalten, welche Daten wir zu Ihrer Person verarbeiten.\n\nArt. 16 DSGVO: Recht auf Berichtigung\nSollten die Sie betreffenden Daten nicht richtig oder unvollständig sein, so können Sie nach Art. 16 DSGVO die Berichtigung unrichtiger oder die Vervollständigung unvollständiger Angaben verlangen.\n\nArt. 17 DSGVO: Recht auf Löschung\nSie können nach Art. 17 DSGVO die Löschung Ihrer personenbezogenen Daten verlangen. Ihr Anspruch auf Löschung hängt u.a. davon ab, ob wir Ihre Daten zur Erfüllung vertraglicher oder gesetzlicher Aufgaben noch benötigen oder wir oder Dritte an der Verarbeitung Ihrer personenbezogenen Daten ein berechtigtes Interesse haben, wie z.B. zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.\n\nArt. 18 DSGVO: Recht auf Einschränkung der Verarbeitung\nSie können nach Art. 18 DSGVO die Einschränkung der Verarbeitung der Sie betreffenden personenbezogenen Daten verlangen.\n\nArt. 20 DSGVO: Recht auf Datenübertragbarkeit\nSie können nach Art. 20 DSGVO verlangen, die von Ihnen bereitgestellten Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten und diese an andere Verantwortliche zu übermitteln.\n\nArt. 77 DSGVO: Recht auf Beschwerde bei einer Aufsichtsbehörde\nWenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten rechtswidrig ist, können Sie nach Art. 77 DSGVO Beschwerde bei einer Aufsichtsbehörde für den Datenschutz einlegen, die für den Ort Ihres Aufenthaltes oder Arbeitsplatzes oder für den Ort des mutmaßlichen Verstoßes zuständig ist. Für uns ist dies der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit (www.datenschutz-hamburg.de).',
        },
        {
          heading: '1.5 Pflicht zur Bereitstellung der Daten',
          body: 'Es besteht keine gesetzliche oder vertragliche Pflicht, die in dieser Datenschutzerklärung erwähnten personenbezogenen Daten bereitzustellen. Allerdings können wir Ihnen ohne die Bereitstellung der genannten personenbezogenen Daten nicht die von Ihnen angefragte Funktion unserer Webseite bzw. Bearbeitung Ihrer Kontaktanfrage anbieten.',
        },
        {
          heading: '1.6 Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling',
          body: 'Wir nutzen keine automatisierte Verarbeitung Ihrer Daten – einschließlich Profiling – zur Entscheidungsbildung im Sinne von Art. 22 DSGVO. Eine solche automatisierte Entscheidungsfindung ist ein Vorgang, bei dem keine inhaltliche Bewertung und darauf gestützte Entscheidung durch einen Menschen mehr stattgefunden hat. Sollten wir künftig solche Verfahren einsetzen wollen, werden wir Sie entsprechend unserer gesetzlichen Pflichten darüber informieren.',
        },
        {
          heading: '2. Für Mandanten und Geschäftspartner',
          body: '',
          kind: 'divider',
        },
        {
          heading: '2.1 Wer ist für die Verarbeitung Ihrer Daten verantwortlich und an wen können Sie sich wenden?',
          body: 'Verantwortlich für die Datenverarbeitung ist:\n\nRechtsanwaltskanzlei Fabian Paetsch\nHegestraße 4\n20251 Hamburg\n\nE-Mail: info@rae-vp.de',
        },
        {
          heading: '2.2 Welche Quellen und Daten nutzen wir?',
          body: 'Wir verarbeiten personenbezogene Daten, die wir von Ihnen erhalten. Darüber hinaus verarbeiten wir personenbezogene Daten, die wir aus öffentlich zugänglichen Quellen (z.B. Handelsregister) zulässigerweise gewonnen haben und verarbeiten dürfen. Relevante personenbezogene Daten können sein: Personenstammdaten, Adressdaten, Kommunikationsdaten, Firmendaten sowie sonstige auftragsbezogene Daten.',
        },
        {
          heading: '2.3.1 Zur Erfüllung vertraglicher Pflichten und Durchführung vorvertraglicher Maßnahmen gem. Art. 6 Abs. 1 S. 1 lit. b) DSGVO',
          body: 'Die Verarbeitung personenbezogener Daten erfolgt zur Vorbereitung und zum Abschluss der Mandatsvereinbarungen sowie zur Erbringung von Rechtsberatungsleistungen im Rahmen der mit Ihnen geschlossenen Mandatsvereinbarungen. Rechtsgrundlage der Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. b) DSGVO.',
        },
        {
          heading: '2.3.2 Aufgrund gesetzlicher Vorgaben gem. Art. 6 Abs. 1 S. 1 lit. c) DSGVO',
          body: 'Wir unterliegen diversen rechtlichen Verpflichtungen (z.B. Geldwäschegesetz, Steuergesetze, Standesrecht), deren Erfüllung die Verarbeitung Ihrer personenbezogenen Daten voraussetzt. Hierzu zählt insbesondere die Pflicht zur Identitäts- und Altersprüfung sowie Maßnahmen der Betrugs- und Geldwäscheprävention. Rechtsgrundlage der Datenverarbeitung, die zur Erfüllung solcher rechtlichen Verpflichtungen erforderlich ist, ist Art. 6 Abs. 1 S. 1 lit. c) DSGVO.',
        },
        {
          heading: '2.3.3 Im Rahmen der Interessenabwägung gem. Art. 6 Abs. 1 S. 1 lit. f) DSGVO',
          body: 'Soweit erforderlich, verarbeiten wir Ihre personenbezogenen Daten nach Art. 6 Abs. 1 S. 1 lit. f) DSGVO zur Wahrung berechtigter Interessen von uns oder Dritten, z.B. bei der:\n\n– Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen,\n– Pflege der Mandats- und Geschäftsbeziehungen sowie\n– Gewährleistung der IT-Sicherheit und des IT-Betriebs.\n\nAus Gründen, die sich aus Ihrer besonderen Situation ergeben, können Sie nach Art. 21 DSGVO jederzeit gegen die Verarbeitung der Sie betreffenden Daten Widerspruch einlegen. Wenn Sie Widerspruch einlegen, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.',
        },
        {
          heading: '2.3.4 Aufgrund Ihrer Einwilligung gem. Art. 6 Abs. 1 S. 1 lit. a) DSGVO',
          body: 'Soweit Sie uns eine Einwilligung zur Verarbeitung Ihrer personenbezogenen Daten für bestimmte Zwecke erteilt haben, verarbeiten wir Ihre personenbezogenen Daten auf dieser Grundlage, Art. 6 Abs. 1 S. 1 lit. a) DSGVO. Sie können Ihre Einwilligung jederzeit ohne Angabe von Gründen widerrufen. Sollten Sie von dem Widerrufsrecht Gebrauch machen, bleibt die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung hiervon unberührt.',
        },
        {
          heading: '2.4 Wer bekommt Ihre Daten?',
          body: 'Zugriff auf Ihre Daten erhalten nur diejenigen Personen, die diese zur Erfüllung der oben genannten Zwecke benötigen. An Dritte übermitteln wir Ihre personenbezogenen Daten nur, wenn es für die oben genannten Zwecke notwendig ist. Hierzu zählen insbesondere Dienstleister und Erfüllungsgehilfen (z.B. IT-Service und -Support, einschließlich unserer Hosting-Dienstleister STRATO AG und Netlify). Soweit die beauftragte Dienstleistung die Verarbeitung personenbezogener Daten umfasst und der Dienstleister die personenbezogenen Daten in unserem Auftrag verarbeitet, haben wir mit ihm einen Auftragsverarbeitungsvertrag entsprechend den Anforderungen des Art. 28 DSGVO abgeschlossen.\n\nZudem geben wir Ihre Daten an Dritte weiter, wenn dies zur Durchführung des Mandatsverhältnisses erforderlich ist (z.B. an Verfahrensgegner, Gerichte, öffentliche Behörden).\n\nIm Hinblick auf die Datenweitergabe an Empfänger außerhalb unserer Kanzlei beachten wir selbstverständlich, dass wir zur Verschwiegenheit über alle mandantenbezogenen Daten verpflichtet sind. Informationen dürfen wir nur weitergeben, wenn gesetzliche Bestimmungen dies gebieten, Sie eingewilligt haben und/oder von uns beauftragte Auftragsverarbeiter gleichgerichtet die Einhaltung der Verschwiegenheitspflicht und der Vorgaben der Datenschutz-Grundverordnung garantieren.',
        },
        {
          heading: '2.5 Werden Daten in ein Drittland oder an eine internationale Organisation übermittelt?',
          body: 'Eine Datenübermittlung an Stellen in Staaten außerhalb der EU bzw. des EWR (sogenannte Drittstaaten) findet statt, soweit dies zur Beratung und Ausführung der erteilten Aufträge erforderlich, gesetzlich vorgeschrieben ist oder Sie uns eine Einwilligung erteilt haben. Zudem kann im Zusammenhang mit der Nutzung externer IT-Dienstleister (z.B. Hosting-, Cloud-, Kollaborations- oder Kommunikationsdienste, wie z.B. Netlify) eine Übermittlung personenbezogener Daten an Empfänger in Drittstaaten erfolgen. Näheres hierzu regelt Ziffer 2.6.',
        },
        {
          heading: '2.6 Datenübermittlung in Drittländer',
          body: 'Wir setzen gegebenenfalls Dienste ein, deren Anbieter teilweise in sogenannten Drittländern (wie den USA) sitzen oder dorthin personenbezogene Daten übermitteln, also Ländern, deren Datenschutzniveau nicht dem der Europäischen Union entspricht.\n\nSofern ein Angemessenheitsbeschluss der Europäischen Kommission (Art. 45 DSGVO) für diese Länder vorliegt, stützen wir die Datenübermittlung auf diesen. Dies betrifft etwa die Übermittlung nach Argentinien, Israel, Japan, Kanada, in die Republik Korea, nach Neuseeland, in die Schweiz, nach Uruguay oder in das Vereinigte Königreich. Im Falle der USA gilt das nur, soweit sich der US-Empfänger für das EU-US Data Privacy Framework zertifiziert hat.\n\nSoweit für das entsprechende Land kein Angemessenheitsbeschluss erlassen wurde, haben wir entsprechende Vorkehrungen getroffen, um ein angemessenes Datenschutzniveau für etwaige Datenübertragungen zu gewährleisten. Hierzu zählen u.a. die Standardvertragsklauseln der Europäischen Union oder verbindliche interne Datenschutzvorschriften (Art. 46 DSGVO).\n\nWo dies nicht möglich ist, stützen wir die Datenübermittlung auf Ausnahmen des Art. 49 DSGVO, insbesondere Ihre ausdrückliche Einwilligung oder die Erforderlichkeit der Übermittlung zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen. Sofern eine Drittstaatenübermittlung vorgesehen ist und kein Angemessenheitsbeschluss oder geeignete Garantien vorliegen, ist es möglich und besteht das Risiko, dass Behörden im jeweiligen Drittland (z.B. Geheimdienste) Zugriff auf die übermittelten Daten erlangen können, um diese zu erfassen und zu analysieren, und dass eine Durchsetzbarkeit Ihrer Betroffenenrechte nicht gewährleistet werden kann. Im Falle einer Einholung Ihrer Einwilligung über das Einwilligungsbanner werden Sie hierüber ebenfalls informiert.\n\nBeispielhaft betrifft dies die Übermittlung von Daten an unseren Hosting-Dienstleister Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, USA, der Ihre Daten in den USA verarbeitet. Netlify ist unter dem EU-U.S. Data Privacy Framework zertifiziert, sodass die Übermittlung auf dem hierfür geltenden Angemessenheitsbeschluss der Europäischen Kommission beruht; ergänzend haben wir mit Netlify Standardvertragsklauseln vereinbart. Weitere Informationen finden Sie in der Datenschutzerklärung von Netlify unter https://www.netlify.com/privacy/.',
        },
        {
          heading: '2.7 Wie lange werden Ihre Daten gespeichert?',
          body: 'Sind die Daten für die Erfüllung vertraglicher oder gesetzlicher Pflichten nicht mehr erforderlich, werden sie regelmäßig gelöscht, es sei denn, ihre Weiterverarbeitung ist zu folgenden Zwecken erforderlich:\n\n– Erfüllung handels- und steuerrechtlicher Aufbewahrungsfristen, insbesondere nach dem Handelsgesetzbuch, der Abgabenordnung und dem Geldwäschegesetz,\n– Erfüllung anderer gesetzlicher Pflichten, beispielsweise zur Vornahme einer Interessenkollisionsprüfung nach § 43a Abs. 4-6 BRAO, sowie\n– Erhaltung von Beweismitteln im Rahmen der Verjährungsvorschriften. Nach den §§ 195 ff. BGB können diese Verjährungsfristen bis zu 30 Jahre betragen, wobei die regelmäßige Verjährungsfrist drei Jahre beträgt.',
        },
        {
          heading: '2.8 Welche Datenschutzrechte haben Sie?',
          body: 'Ihnen stehen bei Vorliegen der gesetzlichen Voraussetzungen folgende Rechte zu:\n\nArt. 15 DSGVO: Auskunftsrecht der betroffenen Person\nSie haben uns gegenüber das Recht, Auskunft darüber zu erhalten, welche Daten wir zu Ihrer Person verarbeiten.\n\nArt. 16 DSGVO: Recht auf Berichtigung\nSollten die Sie betreffenden Daten nicht richtig oder unvollständig sein, so können Sie die Berichtigung unrichtiger oder die Vervollständigung unvollständiger Angaben verlangen.\n\nArt. 17 DSGVO: Recht auf Löschung\nSie können die Löschung Ihrer personenbezogenen Daten verlangen. Ihr Anspruch auf Löschung hängt u.a. davon ab, ob die Sie betreffenden Daten von uns zur Erfüllung unserer gesetzlichen Aufgaben noch benötigt werden.\n\nArt. 18 DSGVO: Recht auf Einschränkung der Verarbeitung\nSie können die Einschränkung der Verarbeitung der Sie betreffenden personenbezogenen Daten verlangen.\n\nArt. 20 DSGVO: Recht auf Datenübertragbarkeit\nSie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen.\n\nArt. 77 DSGVO: Recht auf Beschwerde bei einer Aufsichtsbehörde\nWenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten rechtswidrig ist, können Sie nach Art. 77 DSGVO Beschwerde bei einer Aufsichtsbehörde für den Datenschutz einlegen, die für den Ort Ihres Aufenthaltes oder für den Ort des mutmaßlichen Verstoßes zuständig ist. Für uns ist dies der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit (www.datenschutz-hamburg.de).',
        },
        {
          heading: '2.9 Verpflichtung zur Bereitstellung von Daten und mögliche Folgen einer Nichtbereitstellung',
          body: 'Sie sind nicht dazu verpflichtet, uns Ihre personenbezogenen Daten zur Verfügung zu stellen. Ohne die Daten, die wir für den Abschluss und die Durchführung der Mandatsvereinbarung benötigen oder zu deren Erhebung wir gesetzlich verpflichtet sind, können wir jedoch kein Mandatsverhältnis mit Ihnen schließen oder durchführen.',
        },
        {
          heading: '2.10 Automatisierte Entscheidungen im Einzelfall einschließlich Profiling gem. Art. 22 DSGVO',
          body: 'Wir nutzen keine automatisierte Verarbeitung Ihrer Daten – einschließlich Profiling – zur Entscheidungsbildung im Sinne von Art. 22 DSGVO. Eine solche automatisierte Entscheidungsfindung ist ein Vorgang, bei dem keine inhaltliche Bewertung und darauf gestützte Entscheidung durch einen Menschen mehr stattgefunden hat. Sollten wir künftig solche Verfahren einsetzen wollen, werden wir Sie entsprechend unserer gesetzlichen Pflichten darüber informieren.',
        },
        {
          heading: '3. Stand und Aktualisierung dieser Informationen',
          body: 'Diese Datenschutzerklärung wurde zuletzt am 18. August 2026 aktualisiert. Wir behalten uns vor, diese Informationen zu gegebener Zeit zu aktualisieren, um die Angaben an geänderte Behördenpraxis oder Rechtsprechung anzupassen.',
        },
      ],
    },
  },
};

export const content: Record<Lang, SiteContent> = { de };
