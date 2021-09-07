<script setup>
const props = defineProps({
    theme: Object,
})
</script>

<template>
    <router-link to="#">
        <div
            class="
                transition
                duration-500
                ease-in-out
                transform
                hover:scale-105
                h-80
                w-auto
            "
        >
            <div class="flex justify-between pb-3 text-2xl">
                <p class="flex ml-2 text-white leading-none">
                    {{ theme.themeTitle }}
                </p>

                <div class="flex mr-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                    <p class="flex text-white leading-none text-opacity-50">
                        {{ theme.like }}
                    </p>
                </div>
            </div>

            <div class="h-64">
                <img
                    class="
                        rounded-xl
                        shadow-lg
                        h-full
                        w-full
                        object-cover object-center
                    "
                    :src="`./src/assets/${theme.coverPhoto}.jpg`"
                    alt=""
                />
            </div>

            <p
                class="
                    text-right
                    mr-3
                    text-white text-base
                    pt-1
                    text-opacity-50
                "
            >
                By {{ theme.author }}
            </p>
        </div>
    </router-link>
</template>

<style></style>
