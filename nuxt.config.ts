// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxt/image",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Noto+Serif": {
            wght: "350..600",
          },
          Inter: {
            wght: "400..700",
          },
          "Reenie+Beanie": {
            wght: "400",
          },
        },
      },
    ],
    "nuxt-svgo",
  ],
  content: {
    preview: {
      api: "https://api.nuxt.studio",
    },
  },
  image: {
    provider: process.env.IS_NETLIFY === "1" ? "netlify" : "ipx",
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      "postcss-nested": {},
    },
  },
  site: {
    url: "https://www.broekerhuis.nl/",
    name: "Het Broeker Huis",
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
  },
});
