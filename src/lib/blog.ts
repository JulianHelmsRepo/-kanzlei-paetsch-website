import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogLang = 'de' | 'es';
export type BlogEntry = CollectionEntry<'blog'>;

// Ganzer Sprachzweig "de" bleibt versteckt, bis dieses Flag umgeschaltet wird -
// unabhängig vom draft-Status der einzelnen Artikel.
export const SHOW_DE_BLOG = import.meta.env.SHOW_DE_BLOG === 'true';

export const CATEGORIES = [
  'Arbeitsrecht',
  'Handels- & Gesellschaftsrecht',
  'Insolvenzrecht',
  'Mietrecht',
] as const;

export function isLangPublished(lang: BlogLang): boolean {
  return lang === 'es' || SHOW_DE_BLOG;
}

/** URL-Slug ohne den Sprachordner-Präfix, z. B. "de/mein-artikel" -> "mein-artikel". */
export function slugFor(entry: BlogEntry): string {
  const [, ...rest] = entry.id.split('/');
  return rest.length ? rest.join('/') : entry.id;
}

/** Veröffentlichte, sortierte Artikel einer Sprache (respektiert draft + SHOW_DE_BLOG). */
export async function getArticles(lang: BlogLang): Promise<BlogEntry[]> {
  if (!isLangPublished(lang)) return [];
  const entries = await getCollection(
    'blog',
    (entry) => entry.data.lang === lang && !entry.data.draft
  );
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
