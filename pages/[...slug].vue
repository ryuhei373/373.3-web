<script setup lang="ts">
</script>


<template>
    <ContentDoc v-slot="{ doc }">
        <article class="mt-8">
            <h1 class="text-3xl font-bold">{{ doc.title }}</h1>
            <PostedDate :created-at="doc.createdAt" />
            <ContentRenderer :value="doc" />
        </article>
    </ContentDoc>
</template>