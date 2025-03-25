import { defineContentConfig, defineCollection } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      source: "pages/**/*.md",
      type: "page",
    }),
    elements: defineCollection({
      source: "elements/**/*.yml",
      type: "data",
    }),
  },
});
