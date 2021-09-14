<template>
    <div class="flex flex-col items-center">
        <h1 class="text-white text-xl p-8">{{ user }}</h1>
        <button @click.prevent="logOut" class="text-white mt-8 border w-32">
            LogOut
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

const logOut = async () => {
    try {
        let { error } = await supabase.auth.signOut()

        if (error) throw error
    } catch (error) {
        alert(error.error_description || error.message)
    } finally {
        router.push({ name: 'Home' })
        console.log('Logged Out')
    }
}
</script>
