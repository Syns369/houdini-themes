<template>
    <div class="flex items-center justify-center min-h-screen sm:px-6 lg:px-8">
        <div
            class="
                w-1/3
                h-3/4
                px-20
                py-32
                rounded-2xl
                flex flex-col
                items-center
                justify-center
                space-y-10
                bg-black
            "
        >
            <img
                class="h-16 w-16 rounded-full"
                src="/src/assets/houdini-logo.png"
                alt=""
            />
            <h2 class="text-white mt-6 text-center text-3xl font-extrabold">
                Create your account
            </h2>

            <form
                class="max-w-md w-full space-y-10 mt-8"
                action="#"
                method="POST"
            >
                <input
                    name="username"
                    type=""
                    required
                    class="
                        text-white
                        placeholder-white
                        bg-gray-800
                        relative
                        block
                        w-full
                        px-3
                        py-2
                        focus:outline-none
                        sm:text-sm
                        rounded-lg
                    "
                    placeholder="User Name"
                    v-model="userName"
                />
                <input
                    id="email-address"
                    name="email"
                    type=""
                    autocomplete="email"
                    required
                    class="
                        text-white
                        placeholder-white
                        bg-gray-800
                        relative
                        block
                        w-full
                        px-3
                        py-2
                        focus:outline-none
                        sm:text-sm
                        rounded-lg
                    "
                    placeholder="Email address"
                    v-model="email"
                />

                <input
                    id="password"
                    name="password"
                    type=""
                    autocomplete="current-password"
                    required
                    class="
                        text-white
                        placeholder-white
                        bg-gray-800
                        relative
                        block
                        w-full
                        px-3
                        py-2
                        focus:outline-none
                        sm:text-sm
                        rounded-lg
                    "
                    placeholder="Password"
                    v-model="password"
                />

                <!-- <div class="text-red-500" v-show="error">
                    {{ this.error}}
                </div> -->

                <button
                    @click.prevent="signUp"
                    type="submit"
                    class="
                        relative
                        w-full
                        flex
                        justify-center
                        py-2
                        px-4
                        text-sm
                        font-medium
                        rounded-md
                        text-white
                        bg-blue-800
                        hover:bg-blue-900
                        focus:outline-none
                    "
                >
                    <span
                        class="absolute left-0 inset-y-0 flex items-center pl-3"
                    >
                        <!-- Heroicon name: solid/lock-closed -->
                        <svg
                            v-if="!loading"
                            class="h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <svg
                            v-if="loading"
                            class="h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
                            >
                                <animateTransform
                                    attributeType="xml"
                                    attributeName="transform"
                                    type="rotate"
                                    from="0 25 25"
                                    to="360 25 25"
                                    dur="0.6s"
                                    repeatCount="indefinite"
                                />
                            </path>
                        </svg>
                    </span>
                    Sign Up
                </button>
            </form>
            <router-link
                class="text-sm text-blue-500 font-medium hover:text-blue-600"
                :to="{ name: 'Login' }"
                >Already have an account ?</router-link
            >
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { supabase } from '../supabase'

const loading = ref(false)
const userName = ref('')
const email = ref('')
const password = ref('')

const router = useRouter()

const signUp = async () => {
    try {
        loading.value = true

        let { user, error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
        })

        updateProfile(user)

        // router.push({ name: 'Login' })
        if (user) {
            router.push({ name: 'Login' })
            console.log('Account created')
        }

        if (error) throw error
        alert('Check your email for the login link!')
    } catch (error) {
        alert(error.error_description || error.message)
    } finally {
        loading.value = false
    }
}

async function updateProfile(user) {
    try {
        loading.value = true
        // store.user = supabase.auth.user()

        const updates = {
            id: user.id,
            username: userName.value,
        }

        let { error } = await supabase.from('profiles').upsert(updates, {
            returning: 'minimal', // Don't return the value after inserting
        })
        console.log('updated profile')

        if (error) throw error
    } catch (error) {
        alert(error.message)
    } finally {
        loading.value = false
    }
}
</script>
