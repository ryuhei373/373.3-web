<script setup lang="ts">
</script>

<template>
    <div class="mt-8">
        <ul class="list-none">
            <li>
                <a href="https://twitter.com/home" target="_blank"
                    class="text-orange hover:underline hover:text-orange-light">@373_3</a> (X)
            </li>
            <li>
                <a href="https://bsky.app/profile/373.bsky.social" target="_blank"
                    class="text-orange hover:underline hover:text-orange-light">@373.bsky.social</a>
                (Bluesky)
            </li>
            <li>
                <a href="https://github.com/ryuhei373" target="_blank"
                    class="text-orange hover:underline hover:text-orange-light">@ryuhei373</a>
                (Github)
            </li>
        </ul>
    </div>
    <div class="mt-8">
        <ContentList path="/blog" v-slot="{ list }">
            <div class="-my-8 divide-y divide-base-100">
                <div v-for="article in list" :key="article._path" class="py-8 flex flex-wrap md:flex-nowrap">
                    <NuxtLink :to="article._path" class="w-full">
                        <h2 class="text-xl font-bold text-base-900">
                            {{ article.title }}
                        </h2>
                        <PostedDate :created-at="article.createdAt" />
                        <div class="leading-relaxed">
                            <p>
                                {{ article.description }}
                            </p>
                            <div class="text-orange hover:text-orange-light flex items-center justify-end mt-4 gap-2">
                                <span>Read More</span>
                                <svg class="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </ContentList>
    </div>
</template>
  