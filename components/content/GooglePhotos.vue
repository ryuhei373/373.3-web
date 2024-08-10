<template>
    <p v-if="status === 'pending'">Loading...</p>
    <figure v-else>
        <img v-if="data" :src="data.photoUrl" :alt="alt" :title="title">
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

const { status, data } = await useLazyFetch('/api/photos', { query: { src: props.src } })
</script>
