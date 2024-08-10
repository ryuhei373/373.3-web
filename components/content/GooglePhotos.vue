<template>
    <p v-if="pending">Loading...</p>
    <figure v-else>
        <img v-if="cachedPhotoUrl" :src="cachedPhotoUrl" :alt="alt" :title="title">
        <figcaption class="text-sm text-base-600" v-if="caption">{{ caption }}</figcaption>
    </figure>
</template>

<script setup lang="ts">
import { StorageSerializers } from '@vueuse/core';

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

const url = '/api/photos'

const cachedPhotoUrl = useSessionStorage(url, '');
const pending = ref(true)

if (!cachedPhotoUrl.value) {
    const { status, data, error } = await useLazyFetch(url, { query: { src: props.src } })

    if (error.value) {
        throw createError({
            ...error.value,
            statusMessage: `Could not fetch data from ${url}`,
        });
    }

    watch(
        data,
        () => {
            cachedPhotoUrl.value = data.value.photoUrl
        }
    )

    watch(
        status,
        () => {
            pending.value = status.value === "pending"
        }
    )
} else {
    pending.value = false
}
</script>
