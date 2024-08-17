// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/image"],
  app: {
    head: {
      htmlAttrs: { lang: "ja", prefix: "og: <https://ogp.me/ns#>" },
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
      theme: "github-light",
    },
  },
});
