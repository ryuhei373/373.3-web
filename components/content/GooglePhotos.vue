<template>
    <figure>
        <img :src="photoUrl" :alt="alt" :title="title">
        <figcaption class="text-sm text-base-600" v-if="caption">{{ caption }}</figcaption>
    </figure>
</template>

<script setup lang="ts">
const props = defineProps({
    src: {
        type: String,
        default: '',
        required: true,
    },
    alt: {
        type: String,
        default: '',
        required: true,
    },
    caption: {
        type: String,
        default: '',
    },
    title: {
        type: String,
        default: '',
    }
})

const res = await $fetch('/api/photos', { query: { src: props.src } })
const photoUrl = res.photoUrl
</script>
