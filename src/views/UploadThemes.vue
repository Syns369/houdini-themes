<template>
    <div class="h-full p-8 space-x-10 flex items-center">
        <div
            class="
                h-full
                w-1/2
                text-white text-center
                border-dashed border-2
                rounded-3xl
                bg-gray-800
                space-y-4
                flex flex-col
                justify-center
                items-center
            "
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
            </svg>
            <h1 class="text-xl">Drag&Drop files here</h1>
            <h1>or</h1>
            <button
                class="
                    py-3
                    px-5
                    bg-blue-700
                    shadow-lg
                    hover:bg-blue-800 hover:shadow-xl
                    rounded-xl
                    font-bold
                    transition
                    duration-200
                "
            >
                Browse Files
            </button>
        </div>

        <div class="h-full p-11 w-1/2 text-white rounded-3xl flex space-x-12">
            <div
                class="
                    flex flex-col
                    text-xl
                    justify-center
                    items-start
                    w-1/2
                    space-y-4
                "
            >
                <h1>Name your Theme :</h1>
                <input
                    type="text"
                    class="form-input bg-gray-800 rounded-lg w-96"
                />
                <h1>Add a description :</h1>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    class="bg-gray-800 rounded-lg resize-none w-96"
                ></textarea>
                <h1>Tags :</h1>
                <input type="text" class="form-input bg-gray-800 rounded-lg" />
            </div>

            <div class="w-1/2 flex flex-col items-center">
                <div
                    class="
                        w-full
                        h-1/2
                        rounded-2xl
                        flex
                        justify-center
                        items-center
                        bg-gray-800
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-12 w-12 text-gray-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
                <button
                    class="
                        mt-5
                        px-3
                        py-2
                        shadow-lg
                        bg-blue-700
                        hover:bg-blue-800 hover:shadow-xl
                        rounded-xl
                        font-bold
                        transition
                        duration-200
                    "
                >
                    Upload Thumbnail <br /><span class="font-normal italic"
                        >(required)</span
                    >
                </button>
            </div>
        </div>
    </div>
</template>
