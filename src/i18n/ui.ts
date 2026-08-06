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
    privacy: { title: string; sections: { heading: string; body: string }[] };
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
    title: 'Rat, der Bestand hat.',
    lead: 'Wir beraten kleinere Unternehmen und Unternehmer am Anfang ihres Weges – erreichbar, zuverlässig und ehrlich, mit besonderer Erfahrung in der Gastronomie. Arbeitsrecht, Handels- und Gesellschaftsrecht, Insolvenzrecht sowie Vertragsrecht.',
    cta: 'Mandatsanfrage stellen',
    imageCaption: 'KI-generiert',
  },
  practiceSection: {
    eyebrow: 'Was wir tun',
    title: 'Rechtsgebiete',
    count: '04 Schwerpunkte',
    viewAll: 'Alle Rechtsgebiete',
    intro:
      'Vier Schwerpunkte, ein Anspruch: Lösungen, die im Alltag Ihres Unternehmens tragen – und im Streitfall halten.',
  },
  practiceAreas: [
    {
      num: '01',
      slug: 'arbeitsrecht',
      title: 'Arbeitsrecht',
      short: 'Von Arbeitsverträgen über Kündigungen bis zur gerichtlichen Vertretung – für Arbeitgeber und Arbeitnehmer.',
      long: 'Von Arbeitsverträgen über Kündigungen bis zur gerichtlichen Vertretung – für Arbeitgeber und Arbeitnehmer.',
      points: [
        'Arbeitsverträge, Änderungs- und Aufhebungsvereinbarungen',
        'Kündigungen, Abmahnungen und Zeugnisansprüche',
        'Vertretung in Kündigungsschutz- und arbeitsgerichtlichen Verfahren',
        'Trennungssituationen, Vergütung, Bonus und Wettbewerbsverbote',
      ],
    },
    {
      num: '02',
      slug: 'handels-gesellschaftsrecht',
      title: 'Handels- & Gesellschaftsrecht',
      short: 'Gründung, laufende Betreuung und Streitfälle – Strukturen und Beschlüsse, die tragen.',
      long: 'Gründung, laufende Betreuung und Streitfälle – Strukturen und Beschlüsse, die tragen.',
      points: [
        'Gründung, Strukturierung und laufende Betreuung von Gesellschaften',
        'Gesellschaftsverträge, Satzungen und Gesellschaftervereinbarungen',
        'Beratung von Geschäftsführung und Gesellschaftern zu Rechten und Haftung',
        'Vertretung bei Gesellschafter- und Geschäftsführerstreitigkeiten',
      ],
    },
    {
      num: '03',
      slug: 'insolvenzrecht',
      title: 'Insolvenzrecht',
      short: 'Sanierung und Krisenberatung für Unternehmen, Forderungsdurchsetzung für Gläubiger.',
      long: 'Sanierung und Krisenberatung für Unternehmen, Forderungsdurchsetzung für Gläubiger.',
      points: [
        'Beratung in der Unternehmenskrise, Prüfung von Haftungsrisiken',
        'Vorbereitung von Insolvenzanträgen, Sanierung und Restrukturierung',
        'Forderungsanmeldung und -durchsetzung für Gläubiger',
        'Vertretung gegenüber Anfechtungs- und Haftungsansprüchen von Insolvenzverwaltern',
      ],
    },
    {
      num: '04',
      slug: 'vertragsrecht',
      title: 'Vertragsrecht',
      short: 'Verträge, die im Streitfall halten – von der Gestaltung bis zur Durchsetzung.',
      long: 'Verträge, die im Streitfall halten – von der Gestaltung bis zur Durchsetzung.',
      points: [
        'Gestaltung, Prüfung und Verhandlung von Verträgen',
        'Beratung bei Zahlungsverzug, Mängeln und Vertragsbeendigungen',
        'Durchsetzung und Abwehr von Zahlungs- und Schadensersatzansprüchen',
        'Forderungsmanagement und Vertretung in Streitigkeiten',
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
      role: 'Partner',
      areas: 'Arbeitsrecht, Vertragsrecht, Handels- & Gesellschaftsrecht',
      bio: 'Fabian Paetsch studierte Rechtswissenschaften in Mainz, Hamburg und Lissabon und ist seit 2024 als Rechtsanwalt zugelassen. Er sammelte Erfahrung in der Prozessführung bei einem auf Legal-Tech spezialisierten Start-up sowie einer auf Litigation spezialisierten Kanzlei. Seine Schwerpunkte liegen in der Prozessführung und Beratung sowie der Gestaltung von Verträgen auf allen Gebieten des Wirtschaftsrechts, insbesondere im Arbeitsrecht sowie im Handels- und Gesellschaftsrecht.',
      imageCaption: 'Foto: Fabian Paetsch, Rechtsanwalt',
    },
    {
      name: 'Frederik Voltmann',
      role: 'Of Counsel',
      areas: 'Insolvenzrecht, Handels- & Gesellschaftsrecht',
      bio: 'Frederik Voltmann berät Unternehmen im Insolvenz- und Sanierungsrecht – insbesondere in Krisen- und Insolvenzsituationen mit dem Ziel der Sanierung innerhalb wie außerhalb eines Insolvenzverfahrens – sowie im Handels- und Gesellschaftsrecht. Er berät zudem Gesellschafter, Geschäftsführung, Kreditgeber, Investoren, Lieferanten und weitere Vertragspartner und vertritt Geschäftsleiter gegenüber Anfechtungs- und Haftungsansprüchen von Insolvenzverwaltern.',
      imageCaption: 'Foto: Frederik Voltmann, Of Counsel',
    },
  ],
  approach: {
    eyebrow: 'Unser Ansatz',
    title: 'Wie wir arbeiten',
    items: [
      { title: 'Persönlich', text: 'Sie sprechen direkt mit dem Anwalt, der Ihr Mandat führt – keine anonyme Sachbearbeitung.' },
      { title: 'Präzise', text: 'Wir formulieren klar und denken den Ernstfall mit. Was wir liefern, soll auch unter Druck tragen.' },
      { title: 'Umfassend', text: 'Von der Vertragsgestaltung bis zur Krisenberatung – wir decken die rechtlichen Themen ab, die für Ihr Unternehmen wirklich zählen.' },
      { title: 'Mit langem Atem', text: 'Wir begleiten Unternehmen über einzelne Mandate hinaus – als verlässlicher Ansprechpartner.' },
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
          body: 'Telefon: +49 176 99203507\nE-Mail: info@rae-vp.de',
        },
        {
          heading: 'Berufsrechtliche Angaben',
          body: 'Berufsbezeichnung: Rechtsanwalt (verliehen in der Bundesrepublik Deutschland)\n\nZuständige Rechtsanwaltskammer: Hanseatische Rechtsanwaltskammer Hamburg, Bleichenbrücke 9, 20354 Hamburg, Telefon 040 35 74 41, Telefax 040 35 74 41 41, E-Mail info@rechtsanwaltskammerhamburg.de\n\nEs gelten insbesondere folgende berufsrechtliche Regelungen: die Bundesrechtsanwaltsordnung (BRAO), die Berufsordnung für Rechtsanwälte (BORA), das Rechtsanwaltsvergütungsgesetz (RVG), die Fachanwaltsordnung sowie die Berufsregeln der Rechtsanwälte der Europäischen Gemeinschaft und das Gesetz über die Tätigkeit europäischer Rechtsanwälte (EuRAG). Diese sind abrufbar unter www.gesetze-im-internet.de bzw. auf der Website der Bundesrechtsanwaltskammer unter www.brak.de.\n\nRechtsanwalt Fabian Paetsch vertritt Mandanten im gesamten Bundesgebiet, insbesondere in den Bundesländern Hamburg, Berlin, Schleswig-Holstein und Niedersachsen.',
        },
        {
          heading: 'Umsatzsteuer-ID',
          body: 'Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: [USt-IdNr. ergänzen]',
        },
        {
          heading: 'Berufshaftpflichtversicherung',
          body: 'Rechtsanwalt Fabian Paetsch ist berufshaftpflichtversichert bei:\n[Name und Anschrift der Versicherung ergänzen]\n\nRäumlicher Geltungsbereich: [ergänzen, z. B. EU-Gebiet und Staaten des Abkommens über den Europäischen Wirtschaftsraum]',
        },
        {
          heading: 'Verbraucherstreitbeilegung',
          body: 'Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. [Platzhalter – bitte bestätigen]',
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
      sections: [
        {
          heading: 'Verantwortlicher',
          body: 'Rechtsanwaltskanzlei Fabian Paetsch, Hegestraße 4, 20251 Hamburg\nE-Mail: info@rae-vp.de\n\n[Dies ist ein Platzhalter-Gerüst und ersetzt keine Rechtsberatung. Bitte vor Veröffentlichung anwaltlich/durch einen Datenschutzbeauftragten prüfen lassen.]',
        },
        {
          heading: 'Erhebung und Verarbeitung von Daten',
          body: 'Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung der Website und zur Beantwortung Ihrer Anfragen erforderlich ist. Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. b und f DSGVO. (Platzhalter.)',
        },
        {
          heading: 'Server-Logfiles',
          body: 'Beim Aufruf der Website werden durch den Hosting-Anbieter technisch notwendige Daten (z. B. IP-Adresse, Zeitpunkt, abgerufene Seite) verarbeitet. (Platzhalter – an Hosting anpassen.)',
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
      title: 'Kanzlei Paetsch – Attorneys in Hamburg',
      description:
        'Business law firm in Hamburg for smaller businesses and founders – with particular experience in hospitality. Employment, commercial, corporate, insolvency and contract law.',
    },
    practice: {
      title: 'Practice Areas – Kanzlei Paetsch',
      description:
        'Our focus areas: employment law, commercial & corporate law, insolvency law and contract law.',
    },
    firm: {
      title: 'The Firm – Kanzlei Paetsch',
      description:
        'Two partners, one attitude: Fabian Paetsch and Frederik Voltmann advise smaller businesses and entrepreneurs starting out – with particular experience in hospitality.',
    },
    contact: {
      title: 'Contact – Kanzlei Paetsch',
      description:
        'Tell us about your matter. We usually respond within one business day. Kanzlei Paetsch, Hegestraße 4, 20251 Hamburg.',
    },
    imprint: { title: 'Imprint – Kanzlei Paetsch', description: 'Imprint and legal information of Kanzlei Paetsch.' },
    privacy: { title: 'Privacy – Kanzlei Paetsch', description: 'Privacy policy of Kanzlei Paetsch.' },
  },
  a11y: {
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toggleLang: 'Switch language',
  },
  brand: { roleline: 'Fabian Paetsch, Attorney-at-Law – with Frederik Voltmann, Of Counsel' },
  hero: {
    eyebrow: 'Business Law Firm · Hamburg',
    title: 'Counsel that lasts.',
    lead: 'We advise smaller businesses and entrepreneurs starting out – accessible, reliable and honest, with particular experience in hospitality. Employment, commercial and corporate law, insolvency and contract law.',
    cta: 'Request a consultation',
    imageCaption: 'AI-generated',
  },
  practiceSection: {
    eyebrow: 'What we do',
    title: 'Practice Areas',
    count: '04 focus areas',
    viewAll: 'All practice areas',
    intro:
      'Four focus areas, one standard: solutions that work in your day-to-day business – and hold up when it matters.',
  },
  practiceAreas: [
    {
      num: '01',
      slug: 'arbeitsrecht',
      title: 'Employment Law',
      short: 'From employment contracts to dismissals to court representation – for employers and employees.',
      long: 'From employment contracts to dismissals to court representation – for employers and employees.',
      points: [
        'Employment contracts, amendment and settlement agreements',
        'Dismissals, warnings and reference letters',
        'Representation in dismissal-protection and labour court proceedings',
        'Separation situations, compensation, bonuses and non-compete clauses',
      ],
    },
    {
      num: '02',
      slug: 'handels-gesellschaftsrecht',
      title: 'Commercial & Corporate Law',
      short: 'Incorporation, ongoing counsel and disputes – structures and resolutions that hold.',
      long: 'Incorporation, ongoing counsel and disputes – structures and resolutions that hold.',
      points: [
        'Incorporation, structuring and ongoing counsel for companies',
        'Articles of association, bylaws and shareholder agreements',
        'Advising management and shareholders on rights and liability',
        'Representation in shareholder and management disputes',
      ],
    },
    {
      num: '03',
      slug: 'insolvenzrecht',
      title: 'Insolvency Law',
      short: 'Restructuring and crisis counsel for companies, claim enforcement for creditors.',
      long: 'Restructuring and crisis counsel for companies, claim enforcement for creditors.',
      points: [
        'Advice through a company crisis, review of liability risks',
        'Preparation of insolvency filings, restructuring',
        'Filing and enforcement of claims for creditors',
        'Defence against avoidance and liability claims by administrators',
      ],
    },
    {
      num: '04',
      slug: 'vertragsrecht',
      title: 'Contract Law',
      short: 'Contracts that hold in a dispute – from drafting to enforcement.',
      long: 'Contracts that hold in a dispute – from drafting to enforcement.',
      points: [
        'Drafting, reviewing and negotiating contracts',
        'Advice on late payment, defects and contract termination',
        'Enforcing and defending against payment and damages claims',
        'Receivables management and representation in disputes',
      ],
    },
  ],
  firmSection: {
    eyebrow: 'The Firm',
    title: 'One firm. One attitude.',
    lead: 'For smaller businesses and entrepreneurs starting out – with particular experience in hospitality.',
    viewTeam: 'Get to know the firm',
  },
  partners: [
    {
      name: 'Fabian Paetsch',
      role: 'Partner',
      areas: 'Employment Law, Contract Law, Commercial & Corporate Law',
      bio: 'Fabian Paetsch studied law in Mainz, Hamburg and Lisbon and has been admitted to the bar since 2024. He gained litigation experience at a legal-tech start-up and a litigation-focused law firm. His focus is on litigation and advisory work, as well as drafting contracts across all areas of commercial law, particularly employment law as well as commercial and corporate law.',
      imageCaption: 'Photo: Fabian Paetsch, attorney-at-law',
    },
    {
      name: 'Frederik Voltmann',
      role: 'Of Counsel',
      areas: 'Insolvency Law, Commercial & Corporate Law',
      bio: 'Frederik Voltmann advises companies on insolvency and restructuring law – particularly in crisis and insolvency situations, aiming for restructuring within and outside formal insolvency proceedings – as well as on commercial and corporate law. He also advises shareholders, management, lenders, investors, suppliers and other business partners, and represents managers against avoidance and liability claims brought by insolvency administrators.',
      imageCaption: 'Photo: Frederik Voltmann, Of Counsel',
    },
  ],
  approach: {
    eyebrow: 'Our approach',
    title: 'How we work',
    items: [
      { title: 'Personal', text: 'You speak directly with the attorney handling your matter – no anonymous processing.' },
      { title: 'Precise', text: 'We write clearly and plan for the worst case. What we deliver should hold under pressure.' },
      { title: 'Comprehensive', text: 'From drafting contracts to crisis counsel – we cover the legal matters that actually matter to your business.' },
      { title: 'With staying power', text: 'We support companies beyond individual matters – as a reliable point of contact.' },
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
    text: 'Get in touch – we will assess whether and how we can help.',
    button: 'Request a consultation',
  },
  footer: {
    blurb: 'Business law firm in Hamburg – for smaller businesses and founders, with particular experience in hospitality.',
    nav: 'Navigation',
    legal: 'Legal',
    rights: 'All rights reserved.',
    fontsNote: 'Fonts served locally – no external requests.',
  },
  legalPages: {
    imprint: {
      title: 'Imprint',
      sections: [
        {
          heading: 'Information pursuant to § 5 DDG',
          body: 'Rechtsanwaltskanzlei Fabian Paetsch\nHegestraße 4\n20251 Hamburg, Germany\n\nResponsible for this website: Fabian Paetsch, Attorney-at-Law',
        },
        { heading: 'Contact', body: 'Phone: +49 176 99203507\nEmail: info@rae-vp.de' },
        {
          heading: 'Professional information',
          body: 'Professional title: Rechtsanwalt / Attorney-at-law (awarded in the Federal Republic of Germany)\n\nCompetent bar association: Hanseatische Rechtsanwaltskammer Hamburg, Bleichenbrücke 9, 20354 Hamburg, Germany, Phone +49 40 35 74 41, Fax +49 40 35 74 41 41, Email info@rechtsanwaltskammerhamburg.de\n\nApplicable professional regulations include the German Federal Lawyers’ Act (BRAO), the Professional Code (BORA), the Lawyers’ Remuneration Act (RVG), the Specialist Lawyers’ Regulations and the professional rules of the European Community bar (CCBE) and the act on the activity of European lawyers (EuRAG), available at www.gesetze-im-internet.de and www.brak.de.\n\nFabian Paetsch represents clients throughout Germany, in particular in Hamburg, Berlin, Schleswig-Holstein and Lower Saxony.',
        },
        { heading: 'VAT ID', body: 'VAT identification number pursuant to § 27a UStG: [add VAT ID]' },
        {
          heading: 'Professional liability insurance',
          body: 'Fabian Paetsch is insured for professional liability with:\n[add name and address of the insurer]\n\nGeographical scope: [add, e.g. EU and states party to the Agreement on the European Economic Area]',
        },
        {
          heading: 'Consumer dispute resolution',
          body: 'We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board. [Placeholder – please confirm]',
        },
        {
          heading: 'Liability for content',
          body: 'No guarantee is given for the topicality, completeness or accuracy of the text content of these web pages. Any liability in this respect is excluded.',
        },
        {
          heading: 'Copyright notice',
          body: 'The texts, images, photos, videos or graphics on our website are generally protected by copyright. Any unauthorised use (in particular reproduction, editing or distribution) of this copyrighted content is therefore prohibited. If you intend to use this content or parts of it, please contact us in advance using the details above. Where we are not ourselves the holder of the necessary copyright usage rights, we endeavour to arrange contact with the rights holder.',
        },
        {
          heading: 'Readability',
          body: 'To improve readability, texts on our website generally use only the generic masculine form. Unless stated otherwise, all wording is nonetheless to be understood as gender-neutral and inclusive.',
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      sections: [
        {
          heading: 'Controller',
          body: 'Rechtsanwaltskanzlei Fabian Paetsch, Hegestraße 4, 20251 Hamburg, Germany\nEmail: info@rae-vp.de\n\n[This is a placeholder skeleton and does not constitute legal advice. Please have it reviewed by a lawyer/data protection officer before publication.]',
        },
        {
          heading: 'Collection and processing of data',
          body: 'We process personal data only insofar as necessary to provide the website and respond to your requests. Legal bases are in particular Art. 6(1)(b) and (f) GDPR. (Placeholder.)',
        },
        {
          heading: 'Server log files',
          body: 'When the website is accessed, technically necessary data (e.g. IP address, time, page requested) is processed by the hosting provider. (Placeholder – adapt to hosting.)',
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
