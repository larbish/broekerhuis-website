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
        },
      },
    ],
    "nuxt-svgo",
  ],
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
});
