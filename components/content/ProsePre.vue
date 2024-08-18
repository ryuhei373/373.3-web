<template>
    <pre :class="$props.class"
        class="bg-base-50 dark:bg-base-800 border-base-100 dark:border-base-600 border border-solid mb-4 px-4 py-2 rounded-lg overflow-x-auto text-sm"><slot /></pre>
</template>

<script setup lang="ts">
defineProps({
    code: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: null
    },
    filename: {
        type: String,
        default: null
    },
    highlights: {
        type: Array as () => number[],
        default: () => []
    },
    meta: {
        type: String,
        default: null
    },
    class: {
        type: String,
        default: null
    }
})
</script>

<style>
pre code .line {
    display: block;
}
</style>