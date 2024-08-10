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

const res = await useFetch('/api/photos', { query: { src: props.src }, lazy: true })
const photoUrl = res.data.value.photoUrl
</script>
