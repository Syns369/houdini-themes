<script>
export default {
    data() {
        return {
            // titletext: '',
            paper: '',
            timer: null,
        }
    },
    props: {
        titletext: String,
    },
    mounted() {
        this.printer()
    },
    methods: {
        printer() {
            this.stoper()
            let i = -1
            this.timer = setInterval(() => {
                i++
                const x = i % this.titletext.length
                this.paper += this.titletext[x]
            }, 160 - Math.random() * 50)
        },
        stoper() {
            clearInterval(this.timer)
            // this.paper = ''
        },
    },
    watch: {
        paper: function () {
            if (this.paper.length == this.titletext.length) {
                // this.paper = ''
                this.stoper()
            }
        },
    },
}
</script>

<template>
    <div
        class="
            text-white
            font-medium
            p-8
            mt-20
            text-center text-5xl
            tracking-wide
        "
    >
        <h1 class="texttyper" v-html="paper"></h1>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

.texttyper {
    font-family: 'Roboto', sans-serif;
    display: inline;
    border-right: 2px white solid;
    animation: typebar 0s steps(40) infinite;
}
@keyframes typebar {
    from {
        border-right: 2px white solid;
    }
    to {
        border-right: 2px transparent solid;
    }
}
</style>
