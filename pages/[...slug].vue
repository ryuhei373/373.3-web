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
    <article class="mt-8">
        <ContentRenderer v-if="article" :value="article">
            <h1 class="text-3xl font-bold">{{ article.title }}</h1>
            <PostedDate :created-at="article.createdAt" />
            <ContentRendererMarkdown :value="article" />
        </ContentRenderer>
    </article>
</template>