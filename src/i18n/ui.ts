// Zentrale Inhalte & Übersetzungen (DE/EN).
// Alle Texte sind Platzhalter bzw. aus dem Mockup übernommen und werden später
// redaktionell überarbeitet.

export const languages = { de: 'Deutsch', en: 'English' } as const;
export const defaultLang: Lang = 'de';
export type Lang = keyof typeof languages;

// Seiten-Schlüssel, um äquivalente Routen zwischen den Sprachen zu verknüpfen.
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
  en: {
    home: '/en/',
    practice: '/en/practice-areas/',
    firm: '/en/firm/',
    contact: '/en/contact/',
    imprint: '/en/imprint/',
    privacy: '/en/privacy/',
  },
};

// Zentrale Kanzlei-Stammdaten (sprachneutral).
export const firm = {
  name: 'Kanzlei Paetsch',
  legalName: 'Voltmann & Paetsch Rechtsanwälte',
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
    privacy: { title: string; sections: { heading: string; body: string }[] };
  };
}

const de: SiteContent = {
  htmlLang: 'de',
  nav: { practice: 'Rechtsgebiete', firm: 'Kanzlei', contact: 'Kontakt' },
  meta: {
    home: {
      title: 'Kanzlei Paetsch — Rechtsanwälte in Hamburg',
      description:
        'Wirtschaftskanzlei in Hamburg. Beratung für Kleinbetriebe, Mittelstand und Gastronomie in Arbeits-, Handels-, Gesellschafts-, Insolvenz- und Vertragsrecht.',
    },
    practice: {
      title: 'Rechtsgebiete — Kanzlei Paetsch',
      description:
        'Unsere Schwerpunkte: Arbeitsrecht, Handels- & Gesellschaftsrecht, Insolvenzrecht, Vertragsrecht und allgemeines Zivilrecht.',
    },
    firm: {
      title: 'Die Kanzlei — Kanzlei Paetsch',
      description:
        'Zwei Partner, eine Haltung: Fabian Paetsch und Frederik Voltmann beraten mit besonderem Gespür für Gastronomie und Mittelstand.',
    },
    contact: {
      title: 'Kontakt — Kanzlei Paetsch',
      description:
        'Schildern Sie uns Ihr Anliegen. Wir melden uns in der Regel binnen eines Werktags. Kanzlei Paetsch, Hegestraße 4, 20251 Hamburg.',
    },
    imprint: { title: 'Impressum — Kanzlei Paetsch', description: 'Impressum und Anbieterkennzeichnung der Kanzlei Paetsch.' },
    privacy: { title: 'Datenschutz — Kanzlei Paetsch', description: 'Datenschutzerklärung der Kanzlei Paetsch.' },
  },
  a11y: {
    skipToContent: 'Zum Inhalt springen',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    toggleLang: 'Sprache wechseln',
  },
  brand: { roleline: 'Rechtsanwälte — Voltmann & Paetsch' },
  hero: {
    eyebrow: 'Wirtschaftskanzlei · Hamburg',
    title: 'Rat, der Bestand hat.',
    lead: 'Wir beraten Kleinbetriebe und den Mittelstand — mit besonderer Nähe zur Gastronomie: Cafés, Restaurants, Bars. Arbeitsrecht, Handels- und Gesellschaftsrecht, Insolvenzrecht sowie Vertragsrecht — präzise, diskret und mit langem Atem.',
    cta: 'Mandatsanfrage stellen',
    imageCaption: 'Foto: Empfang, Kanzleisitz Hamburg',
  },
  practiceSection: {
    eyebrow: 'Was wir tun',
    title: 'Rechtsgebiete',
    count: '05 Schwerpunkte',
    viewAll: 'Alle Rechtsgebiete',
    intro:
      'Fünf Schwerpunkte, ein Anspruch: Lösungen, die im Alltag Ihres Unternehmens tragen — und im Streitfall halten.',
  },
  practiceAreas: [
    {
      num: '01',
      slug: 'arbeitsrecht',
      title: 'Arbeitsrecht',
      short: 'Von Kündigungsschutz bis Umstrukturierung — Beratung für Arbeitgeber mit Weitsicht.',
      long: 'Wir begleiten Arbeitgeber von der Einstellung bis zur Trennung: Arbeitsverträge, Kündigungen und Aufhebungen, Umstrukturierungen und die Zusammenarbeit mit Betriebsräten. Der Fokus liegt auf tragfähigen Lösungen, die Konflikte vermeiden — und, wo nötig, im Prozess bestehen. (Platzhaltertext.)',
    },
    {
      num: '02',
      slug: 'handels-gesellschaftsrecht',
      title: 'Handels- & Gesellschaftsrecht',
      short: 'Gründung, Umwandlung, M&A — Strukturen, die dem Geschäft dienen.',
      long: 'Von der Gründung über Beteiligungen und Umwandlungen bis zu Kauf und Verkauf von Unternehmen: Wir gestalten Gesellschaftsstrukturen, die zum Geschäft passen und mitwachsen. Verträge, Gesellschaftervereinbarungen und Governance aus einer Hand. (Platzhaltertext.)',
    },
    {
      num: '03',
      slug: 'insolvenzrecht',
      title: 'Insolvenzrecht',
      short: 'Sanierung und Krisenbegleitung, für Gläubiger wie für Schuldnerunternehmen.',
      long: 'Ob Sanierung, Eigenverwaltung oder Durchsetzung von Forderungen — wir beraten Unternehmen in der Krise ebenso wie Gläubiger. Früh, klar und mit Blick auf den bestmöglichen Ausgang. (Platzhaltertext.)',
    },
    {
      num: '04',
      slug: 'vertragsrecht',
      title: 'Vertragsrecht',
      short: 'Verträge, die im Streitfall halten — nicht nur im Idealfall funktionieren.',
      long: 'Wir gestalten, prüfen und verhandeln Verträge, die belastbar sind: von der Lieferbeziehung über Kooperationen bis zu individuellen Vereinbarungen. Präzise Formulierungen, die auch dann tragen, wenn es einmal darauf ankommt. (Platzhaltertext.)',
    },
    {
      num: '05',
      slug: 'zivilrecht',
      title: 'Allgemeines Zivilrecht',
      short: 'Für alles, was sich keiner Schublade fügt — mit klarer Einschätzung.',
      long: 'Nicht jedes Anliegen passt in eine Kategorie. Wir ordnen ein, schätzen Chancen und Risiken realistisch ein und finden den Weg, der zu Ihrer Situation passt. (Platzhaltertext.)',
    },
  ],
  firmSection: {
    eyebrow: 'Die Kanzlei',
    title: 'Zwei Partner. Eine Haltung.',
    lead: 'Mit besonderem Gespür für Gastronomiebetriebe, Kleinbetriebe und mittelständische Unternehmen.',
    viewTeam: 'Kanzlei kennenlernen',
  },
  partners: [
    {
      name: 'Fabian Paetsch',
      role: 'Partner',
      areas: 'Handels- & Gesellschaftsrecht, Insolvenzrecht',
      bio: 'Fabian Paetsch berät Unternehmen in gesellschaftsrechtlichen Fragen und begleitet Sanierungen und Insolvenzverfahren. Er verbindet wirtschaftliches Verständnis mit klarer juristischer Linie. (Platzhaltertext — Vita folgt.)',
      imageCaption: 'Foto: Portrait, Partner',
    },
    {
      name: 'Frederik Voltmann',
      role: 'Of Counsel',
      areas: 'Arbeitsrecht, Vertrags- & Zivilrecht',
      bio: 'Frederik Voltmann berät zu arbeits- und vertragsrechtlichen Themen und steht Mandanten bei zivilrechtlichen Auseinandersetzungen zur Seite — pragmatisch, gründlich und mit langem Atem. (Platzhaltertext — Vita folgt.)',
      imageCaption: 'Foto: Portrait, Of Counsel',
    },
  ],
  approach: {
    eyebrow: 'Unser Ansatz',
    title: 'Wie wir arbeiten',
    items: [
      { title: 'Persönlich', text: 'Sie sprechen direkt mit dem Anwalt, der Ihr Mandat führt — keine anonyme Sachbearbeitung.' },
      { title: 'Präzise', text: 'Wir formulieren klar und denken den Ernstfall mit. Was wir liefern, soll auch unter Druck tragen.' },
      { title: 'Diskret', text: 'Vertraulichkeit ist für uns kein Zusatz, sondern Grundlage jeder Zusammenarbeit.' },
      { title: 'Mit langem Atem', text: 'Wir begleiten Unternehmen über einzelne Mandate hinaus — als verlässlicher Ansprechpartner.' },
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
    text: 'Nehmen Sie Kontakt auf — wir prüfen, ob und wie wir helfen können.',
    button: 'Mandatsanfrage stellen',
  },
  footer: {
    blurb: 'Wirtschaftskanzlei in Hamburg — für Kleinbetriebe, Mittelstand und Gastronomie.',
    nav: 'Navigation',
    legal: 'Rechtliches',
    rights: 'Alle Rechte vorbehalten.',
    fontsNote: 'Schriften lokal ausgeliefert — keine externen Ladevorgänge.',
  },
  legalPages: {
    imprint: {
      title: 'Impressum',
      sections: [
        {
          heading: 'Angaben gemäß § 5 DDG',
          body: 'Voltmann & Paetsch Rechtsanwälte\nHegestraße 4\n20251 Hamburg\n\n[Rechtsform/Zusammenschluss ergänzen — Platzhalter]',
        },
        {
          heading: 'Kontakt',
          body: 'Telefon: +49 176 99203507\nE-Mail: info@rae-vp.de',
        },
        {
          heading: 'Berufsrechtliche Angaben',
          body: 'Berufsbezeichnung: Rechtsanwalt (verliehen in der Bundesrepublik Deutschland)\nZuständige Rechtsanwaltskammer: Hanseatische Rechtsanwaltskammer Hamburg [prüfen]\nEs gelten insbesondere folgende berufsrechtliche Regelungen: Bundesrechtsanwaltsordnung (BRAO), Berufsordnung für Rechtsanwälte (BORA), Fachanwaltsordnung (FAO), Rechtsanwaltsvergütungsgesetz (RVG), Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE). Die Regelungen sind einsehbar unter www.brak.de. [Platzhalter — bitte vervollständigen]',
        },
        {
          heading: 'Umsatzsteuer-ID',
          body: 'Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: [USt-IdNr. ergänzen]',
        },
        {
          heading: 'Berufshaftpflichtversicherung',
          body: 'Name und Sitz des Versicherers: [ergänzen]\nRäumlicher Geltungsbereich: [ergänzen]',
        },
        {
          heading: 'Verbraucherstreitbeilegung',
          body: 'Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. [Platzhalter — bitte prüfen]',
        },
      ],
    },
    privacy: {
      title: 'Datenschutzerklärung',
      sections: [
        {
          heading: 'Verantwortlicher',
          body: 'Voltmann & Paetsch Rechtsanwälte, Hegestraße 4, 20251 Hamburg\nE-Mail: info@rae-vp.de\n\n[Dies ist ein Platzhalter-Gerüst und ersetzt keine Rechtsberatung. Bitte vor Veröffentlichung anwaltlich/durch einen Datenschutzbeauftragten prüfen lassen.]',
        },
        {
          heading: 'Erhebung und Verarbeitung von Daten',
          body: 'Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung der Website und zur Beantwortung Ihrer Anfragen erforderlich ist. Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. b und f DSGVO. (Platzhalter.)',
        },
        {
          heading: 'Server-Logfiles',
          body: 'Beim Aufruf der Website werden durch den Hosting-Anbieter technisch notwendige Daten (z. B. IP-Adresse, Zeitpunkt, abgerufene Seite) verarbeitet. (Platzhalter — an Hosting anpassen.)',
        },
        {
          heading: 'Kontaktaufnahme',
          body: 'Wenn Sie uns per Formular, E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage. (Platzhalter.)',
        },
        {
          heading: 'Schriftarten',
          body: 'Diese Website nutzt lokal ausgelieferte Schriftarten. Es werden keine Schriftarten von externen Servern (z. B. Google Fonts) nachgeladen; es findet insoweit keine Übertragung Ihrer IP-Adresse an Dritte statt.',
        },
        {
          heading: 'Ihre Rechte',
          body: 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch sowie ein Beschwerderecht bei einer Aufsichtsbehörde. (Platzhalter.)',
        },
      ],
    },
  },
};

const en: SiteContent = {
  htmlLang: 'en',
  nav: { practice: 'Practice Areas', firm: 'The Firm', contact: 'Contact' },
  meta: {
    home: {
      title: 'Kanzlei Paetsch — Attorneys in Hamburg',
      description:
        'Business law firm in Hamburg. Advising small businesses, the Mittelstand and hospitality on employment, commercial, corporate, insolvency and contract law.',
    },
    practice: {
      title: 'Practice Areas — Kanzlei Paetsch',
      description:
        'Our focus areas: employment law, commercial & corporate law, insolvency law, contract law and general civil law.',
    },
    firm: {
      title: 'The Firm — Kanzlei Paetsch',
      description:
        'Two partners, one attitude: Fabian Paetsch and Frederik Voltmann advise with a special feel for hospitality and the Mittelstand.',
    },
    contact: {
      title: 'Contact — Kanzlei Paetsch',
      description:
        'Tell us about your matter. We usually respond within one business day. Kanzlei Paetsch, Hegestraße 4, 20251 Hamburg.',
    },
    imprint: { title: 'Imprint — Kanzlei Paetsch', description: 'Imprint and legal information of Kanzlei Paetsch.' },
    privacy: { title: 'Privacy — Kanzlei Paetsch', description: 'Privacy policy of Kanzlei Paetsch.' },
  },
  a11y: {
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toggleLang: 'Switch language',
  },
  brand: { roleline: 'Attorneys — Voltmann & Paetsch' },
  hero: {
    eyebrow: 'Business Law Firm · Hamburg',
    title: 'Counsel that lasts.',
    lead: 'We advise small businesses and the Mittelstand — with a particular affinity for hospitality: cafés, restaurants, bars. Employment, commercial and corporate law, insolvency and contract law — precise, discreet and with staying power.',
    cta: 'Request a consultation',
    imageCaption: 'Photo: reception, Hamburg office',
  },
  practiceSection: {
    eyebrow: 'What we do',
    title: 'Practice Areas',
    count: '05 focus areas',
    viewAll: 'All practice areas',
    intro:
      'Five focus areas, one standard: solutions that work in your day-to-day business — and hold up when it matters.',
  },
  practiceAreas: [
    {
      num: '01',
      slug: 'arbeitsrecht',
      title: 'Employment Law',
      short: 'From dismissal protection to restructuring — advice for employers with foresight.',
      long: 'We support employers from hiring to separation: employment contracts, dismissals and settlements, restructuring and works-council matters. The focus is on workable solutions that avoid conflict — and, where necessary, hold up in court. (Placeholder text.)',
    },
    {
      num: '02',
      slug: 'handels-gesellschaftsrecht',
      title: 'Commercial & Corporate Law',
      short: 'Incorporation, transformation, M&A — structures that serve the business.',
      long: 'From incorporation through shareholdings and transformations to the purchase and sale of companies: we design corporate structures that fit the business and grow with it. Contracts, shareholder agreements and governance from a single source. (Placeholder text.)',
    },
    {
      num: '03',
      slug: 'insolvenzrecht',
      title: 'Insolvency Law',
      short: 'Restructuring and crisis support — for creditors and debtor companies alike.',
      long: 'Whether restructuring, self-administration or enforcing claims — we advise companies in crisis as well as creditors. Early, clear and focused on the best possible outcome. (Placeholder text.)',
    },
    {
      num: '04',
      slug: 'vertragsrecht',
      title: 'Contract Law',
      short: 'Contracts that hold in a dispute — not just in the ideal case.',
      long: 'We draft, review and negotiate contracts that are robust: from supply relationships and cooperations to bespoke agreements. Precise wording that holds when it counts. (Placeholder text.)',
    },
    {
      num: '05',
      slug: 'zivilrecht',
      title: 'General Civil Law',
      short: 'For everything that resists categorisation — with a clear assessment.',
      long: 'Not every matter fits a category. We classify it, assess opportunities and risks realistically, and find the path that suits your situation. (Placeholder text.)',
    },
  ],
  firmSection: {
    eyebrow: 'The Firm',
    title: 'Two partners. One attitude.',
    lead: 'With a particular feel for hospitality businesses, small companies and the Mittelstand.',
    viewTeam: 'Get to know the firm',
  },
  partners: [
    {
      name: 'Fabian Paetsch',
      role: 'Partner',
      areas: 'Commercial & Corporate Law, Insolvency Law',
      bio: 'Fabian Paetsch advises companies on corporate matters and guides restructurings and insolvency proceedings. He combines commercial insight with a clear legal line. (Placeholder — bio to follow.)',
      imageCaption: 'Photo: portrait, partner',
    },
    {
      name: 'Frederik Voltmann',
      role: 'Of Counsel',
      areas: 'Employment Law, Contract & Civil Law',
      bio: 'Frederik Voltmann advises on employment and contract matters and supports clients in civil disputes — pragmatic, thorough and with staying power. (Placeholder — bio to follow.)',
      imageCaption: 'Photo: portrait, of counsel',
    },
  ],
  approach: {
    eyebrow: 'Our approach',
    title: 'How we work',
    items: [
      { title: 'Personal', text: 'You speak directly with the attorney handling your matter — no anonymous processing.' },
      { title: 'Precise', text: 'We write clearly and plan for the worst case. What we deliver should hold under pressure.' },
      { title: 'Discreet', text: 'Confidentiality is not an add-on for us — it is the basis of every engagement.' },
      { title: 'With staying power', text: 'We support companies beyond individual matters — as a reliable point of contact.' },
    ],
  },
  contactSection: {
    eyebrow: 'First contact',
    title: 'Tell us about your matter.',
    lead: 'We usually respond within one business day. All information is treated confidentially.',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    addressLabel: 'Address',
    hoursLabel: 'Availability',
    hours: 'Mon–Fri, 9:00–18:00',
    mapCaption: 'Map: Hegestraße 4, 20251 Hamburg',
    form: {
      name: 'Name',
      namePlaceholder: 'First and last name',
      company: 'Company',
      companyPlaceholder: 'Company (optional)',
      email: 'Email',
      emailPlaceholder: 'name@company.com',
      phone: 'Phone',
      phonePlaceholder: '+49 40 …',
      area: 'Practice area',
      urgency: 'Urgency',
      urgencyOptions: ['Normal', 'Urgent', 'Very urgent'],
      message: 'Message',
      messagePlaceholder: 'A brief description of your matter',
      consentPre: 'I have read the ',
      consentLink: 'privacy policy',
      consentPost: ' and consent to the processing of my data to handle my request.',
      submit: 'Send request',
      note: 'Fields marked with * are required.',
      placeholderNotice:
        'Note: this form is currently a preview. Sending will be connected later.',
    },
  },
  cta: {
    title: 'Have a matter?',
    text: 'Get in touch — we will assess whether and how we can help.',
    button: 'Request a consultation',
  },
  footer: {
    blurb: 'Business law firm in Hamburg — for small businesses, the Mittelstand and hospitality.',
    nav: 'Navigation',
    legal: 'Legal',
    rights: 'All rights reserved.',
    fontsNote: 'Fonts served locally — no external requests.',
  },
  legalPages: {
    imprint: {
      title: 'Imprint',
      sections: [
        {
          heading: 'Information pursuant to § 5 DDG',
          body: 'Voltmann & Paetsch Rechtsanwälte\nHegestraße 4\n20251 Hamburg, Germany\n\n[Add legal form — placeholder]',
        },
        { heading: 'Contact', body: 'Phone: +49 176 99203507\nEmail: info@rae-vp.de' },
        {
          heading: 'Professional information',
          body: 'Professional title: Rechtsanwalt / Attorney-at-law (awarded in the Federal Republic of Germany)\nCompetent bar: Hanseatische Rechtsanwaltskammer Hamburg [verify]\nApplicable professional regulations include the German Federal Lawyers’ Act (BRAO), the Professional Code (BORA), the Specialist Lawyers’ Regulations (FAO), the Lawyers’ Remuneration Act (RVG) and the CCBE rules, available at www.brak.de. [Placeholder — please complete]',
        },
        { heading: 'VAT ID', body: 'VAT identification number pursuant to § 27a UStG: [add VAT ID]' },
        {
          heading: 'Professional liability insurance',
          body: 'Name and registered office of the insurer: [add]\nGeographical scope: [add]',
        },
        {
          heading: 'Consumer dispute resolution',
          body: 'We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board. [Placeholder — please verify]',
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      sections: [
        {
          heading: 'Controller',
          body: 'Voltmann & Paetsch Rechtsanwälte, Hegestraße 4, 20251 Hamburg, Germany\nEmail: info@rae-vp.de\n\n[This is a placeholder skeleton and does not constitute legal advice. Please have it reviewed by a lawyer/data protection officer before publication.]',
        },
        {
          heading: 'Collection and processing of data',
          body: 'We process personal data only insofar as necessary to provide the website and respond to your requests. Legal bases are in particular Art. 6(1)(b) and (f) GDPR. (Placeholder.)',
        },
        {
          heading: 'Server log files',
          body: 'When the website is accessed, technically necessary data (e.g. IP address, time, page requested) is processed by the hosting provider. (Placeholder — adapt to hosting.)',
        },
        {
          heading: 'Contacting us',
          body: 'If you contact us via the form, by email or by phone, we process your details to handle the request. (Placeholder.)',
        },
        {
          heading: 'Fonts',
          body: 'This website uses locally served fonts. No fonts are loaded from external servers (e.g. Google Fonts); no transfer of your IP address to third parties takes place in this respect.',
        },
        {
          heading: 'Your rights',
          body: 'You have the right to access, rectification, erasure, restriction, data portability and objection, as well as the right to lodge a complaint with a supervisory authority. (Placeholder.)',
        },
      ],
    },
  },
};

export const content: Record<Lang, SiteContent> = { de, en };
