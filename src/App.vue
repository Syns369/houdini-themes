<script setup>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
</script>

<script>
export default {
    data() {
        return {
            navigation: null,
        }
    },
    created() {
        this.checkRoute()
    },
    methods: {
        checkRoute() {
            if (
                this.$route.name === 'Login' ||
                this.$route.name === 'Register' ||
                this.$route.name === 'ForgotPassword'
            ) {
                this.navigation = true
                return
            }
            this.navigation = false
        },
    },
    watch: {
        $route() {
            this.checkRoute()
        },
    },
}
</script>

<template>
    <div class="flex flex-col h-screen">
        <Navigation v-if="!navigation" />
        <router-view></router-view>
        <Footer v-if="!navigation" class="mt-auto"></Footer>
    </div>
</template>
