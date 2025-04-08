import { defineContentConfig, defineCollection, z } from "@nuxt/content";
import { asSeoCollection } from "@nuxtjs/seo/content";

// const baseSchema = {
//   title: z.string().nonempty(),
//   description: z.string().nonempty(),
// };

export default defineContentConfig({
  collections: {
    content: defineCollection(
      asSeoCollection({
        source: "**/*.md",
        type: "page",
        schema: z.object({
          topNav: z.boolean(),
        }),
      }),
    ),
  },
});
