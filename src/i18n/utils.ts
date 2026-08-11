import { content, defaultLang, routes, type Lang, type PageKey } from './ui';

/** Liefert die Inhalte für eine Sprache. */
export function useContent(lang: Lang) {
  return content[lang];
}

/** URL einer Seite in einer bestimmten Sprache. */
export function localizedUrl(lang: Lang, page: PageKey): string {
  return routes[lang][page];
}

export { routes, defaultLang };
export type { Lang, PageKey };
