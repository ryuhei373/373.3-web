// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/color-mode",
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
        prefix: "og: <https://ogp.me/ns#>",
      },
      bodyAttrs: {
        class:
          "bg-base-paper text-base-black dark:bg-base-black dark:text-base-200",
      },
    },
  },
  nitro: {
    prerender: {
      routes: ["/rss.xml"],
    },
  },
  content: {
    contentHead: false,
    highlight: {
      theme: {
        default: "github-light",
        dark: "github-dark",
      },
    },
  },
  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: "",
  },
});
