import { content, defaultLang, routes, type Lang, type PageKey } from './ui';

/** Ermittelt die aktuelle Sprache aus der URL (/en/... => 'en', sonst 'de'). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg === 'en') return 'en';
  return defaultLang;
}

/** Liefert die Inhalte/Übersetzungen für eine Sprache. */
export function useContent(lang: Lang) {
  return content[lang];
}

/** URL derselben Seite in der jeweils anderen Sprache. */
export function alternateUrl(lang: Lang, page: PageKey): string {
  const other: Lang = lang === 'de' ? 'en' : 'de';
  return routes[other][page];
}

/** URL einer Seite in einer bestimmten Sprache. */
export function localizedUrl(lang: Lang, page: PageKey): string {
  return routes[lang][page];
}

export { routes, defaultLang };
export type { Lang, PageKey };
