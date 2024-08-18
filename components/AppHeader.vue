<script setup lang="ts">
const colorMode = useColorMode()

const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
}
</script>

<template>
    <header class="mx-auto flex justify-between items-center">
        <nuxt-link to="/"
            class="mb-0 flex items-center font-medium text-orange hover:text-orange-light dark:text-orange-light dark:hover:text-orange">
            <img src="https://github.com/ryuhei373.png" width="32" height="32" alt="ryuhei373"
                class="mr-3 inline-block rounded-full">
            <span class="text-xl font-bold">373.3</span>
        </nuxt-link>
        <button>
            <img v-if="colorMode.value === 'light'" src="~/assets/PhSunBold.svg" width="24" height="24"
                @click="toggleTheme" />
            <img v-else src="~/assets/PhMoonBold.svg" width="24" height="24" @click="toggleTheme" />
        </button>
    </header>
</template>
