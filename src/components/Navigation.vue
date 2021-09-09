<template>
    <div class="p-6 shadow-lg flex items-center bg-gray-900 space-x-4">
        <div class="flex-1 px-2 mx-2">
            <router-link
                class="text-white text-2xl font-bold"
                :to="{ name: 'Home' }"
                >Houdini Themes</router-link
            >
        </div>

        <div
            class="
                py-3
                px-5
                font-bold
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                transition
                duration-300
                cursor-pointer
            "
        >
            <router-link
                class="flex items-center text-white"
                :to="{ name: 'UploadThemes' }"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
                    />
                    <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                </svg>
                Upload Theme
            </router-link>
        </div>

        <div class="p-2 px-3 font-bold rounded-md">
            <router-link class="flex items-center text-white" to="#">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                </svg>
                Login/Register
            </router-link>
        </div>

        <div class="flex-none px-2 mx-2">
            <button class="text-white">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-6 h-6 stroke-current"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </button>
        </div>
    </div>
</template>
