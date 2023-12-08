<script setup lang="ts">
const { path } = useRoute();
const { data } = await useAsyncData('page-data', () => queryContent().where({ _path: path }).findOne())
</script>


<template>
    <!-- <ContentDoc v-slot="{ doc }">
        <article class="mt-8">
            <h1 class="text-3xl font-bold">{{ doc.title }}</h1>
            <PostedDate :created-at="doc.createdAt" />
            <ContentRenderer :value="doc" />
        </article>
    </ContentDoc> -->
    <article class="mt-8">
        <ContentRenderer v-if="data" :value="data">
            <h1 class="text-3xl font-bold">{{ data.title }}</h1>
            <PostedDate :created-at="data.createdAt" />
            <ContentRendererMarkdown :value="data" />
        </ContentRenderer>
    </article>
</template>