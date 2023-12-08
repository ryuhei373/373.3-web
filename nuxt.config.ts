// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  app: {
    head: {
      htmlAttrs: { lang: "ja", prefix: "og: <https://ogp.me/ns#>" },
    },
  },
  content: {
    contentHead: false,
  },
});
