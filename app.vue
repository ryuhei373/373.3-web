<script setup lang="ts">
useSeoMeta({
  title: '373.3',
  description: 'webアプリケーション開発者。仕事ではフルスタック気味に従事。個人としてはHTMLとCSSが好き。',
  twitterCard: 'summary',
  twitterSite: '@373_3',
  twitterTitle: '373.3',
  ogTitle: '373.3',
  ogType: 'website',
  ogSiteName: '373.3',
  ogDescription: 'webアプリケーション開発者。仕事ではフルスタック気味に従事。個人としてはHTMLとCSSが好き。',
  ogImage: 'https://github.com/ryuhei373.png',
  ogLocale: 'ja_JP',
  ogUrl: 'https://ryuhei373.dev/'
});

useHead({
  link: [
    {
      rel: "alternate",
      type: "application/rss+xml",
      title: "373.3",
      href: "https://ryuhei373.dev/rss.xml"
    }
  ]
})
</script>

<template>
  <div class="container mx-auto max-w-screen-sm p-4 md:px-0">
    <!-- Markup shared across all pages, ex: NavBar -->
    <AppHeader />
    <NuxtPage />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>