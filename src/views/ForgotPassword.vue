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
                Reset password
            </h2>
            <p class="text-white">Enter your email to reset your password</p>

            <form class="max-w-md w-full space-y-8" action="#" method="POST">
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
                />

                <button
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
                            class="
                                h-5
                                w-5
                                text-white
                                group-hover:text-indigo-400
                            "
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
                    </span>
                    Reset
                </button>
            </form>
        </div>
    </div>
</template>
