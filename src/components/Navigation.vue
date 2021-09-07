<template>
    <header class="shadow-xl">
        <nav class="flex p-6 justify-between text-white">
            <div>
                <router-link :to="{ name: 'Home' }">Houdini Themes</router-link>
            </div>
            <div>
                <ul class="flex space-x-6">
                    <router-link to="#">Themes</router-link>
                    <router-link to="#">About</router-link>
                    <router-link to="#">Contact</router-link>
                    <router-link to="#">Login/Register</router-link>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script setup></script>
