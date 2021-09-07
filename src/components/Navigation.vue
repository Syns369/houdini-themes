<template>
    <div class="navbar mb-2 shadow-lg bg-neutral-focus text-neutral-content">
        <div class="flex-1 px-2 mx-2">
            <router-link class="text-lg font-bold" :to="{ name: 'Home' }"
                >Houdini Themes</router-link
            >
        </div>

        <div class="flex-none px-2 mx-2 lg:flex">
            <div class="flex items-stretch">
                <a class="btn btn-ghost btn-sm rounded-btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block w-5 mr-2 stroke-current"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        ></path>
                    </svg>
                    Upload Theme
                </a>
            </div>
        </div>

        <div class="flex-none px-2 mx-2 lg:flex">
            <div class="flex items-stretch">
                <a class="btn btn-ghost btn-sm rounded-btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block w-5 mr-2 stroke-current"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        ></path>
                    </svg>
                    Login
                </a>
            </div>
        </div>

        <div class="flex-none">
            <button class="btn btn-square btn-ghost">
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

<script>
export default {}
</script>
