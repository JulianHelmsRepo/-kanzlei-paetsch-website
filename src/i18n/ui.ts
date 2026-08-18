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

export const content: Record<Lang, SiteContent> = { de };
