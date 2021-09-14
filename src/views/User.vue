<template>
    <div class="flex flex-col items-center">
        <h1 class="text-white text-xl p-8">{{ user }}</h1>
        <button @click.prevent="signOut" class="text-white mt-8 border w-32">
            Sign Out
        </button>
    </div>
</template>

<script setup>
import { onMounted, onUpdated, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { supabase } from '../supabase'

const router = useRouter()

onMounted(() => {})

const user = supabase.auth.user()
console.log(user)

const signOut = async () => {
    try {
        if (user) {
            let { error } = await supabase.auth.signOut()
            console.log('Logged Out')
            router.push({ name: 'Home' })
        }

        if (error) throw error
    } catch (error) {
        alert(error.error_description || error.message)
    } finally {
    }
}
</script>
