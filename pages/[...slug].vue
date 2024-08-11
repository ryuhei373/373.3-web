<script setup lang="ts">
const { path } = useRoute();
const { data: article } = await useAsyncData('page-data', () => queryContent().where({ _path: path }).findOne());

useSeoMeta(
    {
        title: article?.value?.title,
        description: article?.value?.description,
        twitterTitle: article?.value?.title,
        ogTitle: article?.value?.title,
        ogType: 'article',
        ogDescription: article?.value?.description,
        ogUrl: `https://373.deno.dev${path}`,
    }
)
</script>


<template>
    <article class="mt-8 break-words">
        <ContentRenderer v-if="article" :value="article">
            <h1 class="text-3xl font-bold mb-2">{{ article.title }}</h1>
            <PostedDate :created-at="article.createdAt" />
            <ContentRendererMarkdown class="pt-8" :value="article" />
        </ContentRenderer>
    </article>
</template>
