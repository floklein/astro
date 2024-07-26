import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  if (context.site === undefined) {
    throw new Error("site is not defined");
  }
  return rss({
    title: "Astro Learner | Blog",
    description: "Mon voyage d'apprentissage d'Astro",
    site: context.site,
    items: (await getCollection("posts")).map((post) => post.data),
    customData: `<language>fr-fr</language>`,
  });
}
