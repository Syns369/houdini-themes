<script setup>
import ThemeCard from '../components/ThemeCard.vue'
import Search from '../components/Search.vue'

const sampleThemesCards = [
    {
        themeTitle: 'DarkTheme',
        coverPhoto: 'Stock-1',
        author: 'Syns',
        like: 254,
    },
    {
        themeTitle: 'Blue Theme',
        coverPhoto: 'Stock-2',
        author: 'Requa',
        like: 500,
    },
    {
        themeTitle: 'Red Theme',
        coverPhoto: 'Stock-3',
        author: 'Kweyy',
        like: 311,
    },
    {
        themeTitle: 'Green Theme',
        coverPhoto: 'Stock-4',
        author: 'Ayrox',
        like: 857,
    },
]
</script>

<template>
    <div
        class="
            m-52
            grid
            sm:grid-cols-1
            md:grid-cols-1
            lg:grid-cols-1
            xl:grid-cols-2
            2xl:grid-cols-3
            gap-28
        "
    >
        <Search />

        <ThemeCard
            :theme="theme"
            v-for="(theme, index) in sampleThemesCards"
            :key="index"
        />
    </div>
</template>
