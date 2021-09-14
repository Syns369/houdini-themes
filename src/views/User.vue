<template>
    <div class="flex flex-col items-center">
        <h1 v-if="user" class="text-white text-xl">
            User Name : {{ userName }}
        </h1>
        <h1 v-if="user" class="text-white text-xl">Email : {{ user.email }}</h1>
        <h1 v-if="user" class="text-white text-xl">Id : {{ user.id }}</h1>
        <button
            :disabled="!user"
            @click.prevent="signOut"
            class="text-white mt-8 border w-32"
        >
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

const userName = ref('')

const user = supabase.auth.user()

console.log(user)

onMounted(() => {
    if (user) {
        getProfile(user)
    }
})

async function getProfile() {
    try {
        let { data, error, status } = await supabase
            .from('profiles')
            .select(`username`)
            .eq('id', user.id)
            .single()

        if (error && status !== 406) throw error

        if (data) {
            userName.value = data.username
        }
    } catch (error) {
        alert(error.message)
    } finally {
    }
}

const signOut = async () => {
    try {
        if (user) {
            let { error } = await supabase.auth.signOut()
            console.log('Logged Out')
            router.push({ name: 'Home' })
            if (error) throw error
        }
    } catch (error) {
        alert(error.error_description || error.message)
    } finally {
    }
}
</script>
