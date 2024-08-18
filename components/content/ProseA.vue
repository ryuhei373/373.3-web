<template>
    <NuxtLink :href="href" :target="target"
        class="text-orange hover:text-orange-light dark:text-orange-light dark:hover:text-orange hover:underline">
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
    href: {
        type: String,
        default: ''
    },
    target: {
        type: String,
        default: undefined,
        required: false
    }
})
</script>
