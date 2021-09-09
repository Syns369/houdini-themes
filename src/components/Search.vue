<template>
    <div class="my-5 p-10 w-full flex justify-center">
        <div class="h-16 w-2/4 flex">
            <input
                type=""
                placeholder="Search Themes ..."
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Search Themes ...'"
                class="
                    rounded-xl
                    pl-14
                    w-full
                    bg-gray-800
                    leading-none
                    text-xl text-white
                    hover:bg-gray-700
                    focus:outline-none focus:bg-gray-700
                    transition
                    duration-200
                    ease-linear
                "
            />
            <div class="absolute self-center self-start ml-5 opacity-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"
                    />
                    <path
                        fill-rule="evenodd"
                        d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>
        </div>
    </div>
    <!--
    <div class="my-5 p-10 w-full flex justify-center">
        <div class="h-16 w-2/4 flex">
            <input
                type="text"
                placeholder="Search Themes ..."
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Search Themes ...'"
                class="
                    rounded-xl
                    pl-14
                    w-full
                    bg-gray-900
                    leading-none
                    text-xl text-white
                    ring-2
                    focus:outline-none
                    ring-white ring-opacity-60
                    focus:ring-opacity-100 focus:ring-yellow-600
                    transition
                    duration-200
                    ease-linear
                "
            />
            <div class="absolute self-center self-start ml-5 opacity-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"
                    />
                    <path
                        fill-rule="evenodd"
                        d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>
        </div>
    </div>
    -->
</template>

<style scoped>
::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(255, 255, 255, 0.692);
}
</style>
