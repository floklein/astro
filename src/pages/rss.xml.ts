import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  if (context.site === undefined) {
    throw new Error("site is not defined");
  }
  return rss({
    title: "Astro Learner | Blog",
    description: "Mon voyage d'apprentissage d'Astro",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>fr-fr</language>`,
  });
}
