<script setup lang="ts">
const props = defineProps({
    createdAt: {
        type: String,
        required: true,
    },
})

const postedDate = computed(() => {
    const date = new Date(props.createdAt)
    return date.toLocaleDateString('ja-JP', {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    })
})
</script>

<template>
    <time class="text-base-600 dark:text-base-500 text-sm inline-block">{{ postedDate }}</time>
</template>
