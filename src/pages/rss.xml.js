import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = await getCollection('clanky');
  const sorted = articles.sort((a, b) => {
    if (a.data.pinned && !b.data.pinned) return -1;
    if (!a.data.pinned && b.data.pinned) return 1;
    return b.data.date.getTime() - a.data.date.getTime();
  });

  return rss({
    title: 'Můj potrat',
    description: 'Blog Míši o třech potratech, o tichu po nich, a o hledání cesty dál.',
    site: context.site,
    items: sorted.map(article => ({
      title: article.data.title,
      pubDate: article.data.date,
      description: article.data.description,
      link: `/clanky/${article.id}/`,
    })),
    customData: '<language>cs</language>',
  });
}
