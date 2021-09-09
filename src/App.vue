<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <div class="flex flex-col h-screen">
        <Navigation class="flex-none" />
        <router-view class="flex-grow"></router-view>
        <Footer class="flex-none"></Footer>
    </div>
</template>
