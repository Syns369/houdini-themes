<template>
    <div>
        <h1 class="text-white text-xl">{{ user }}</h1>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'

const user = supabase.auth.user()

console.log(user)
</script>
