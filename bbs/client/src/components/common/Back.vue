<template>
        <a class="btn mb-3 float-left" @click.prevent="$router.go(-1)">
            {{info}}
        </a>
</template>

<script>
    export default {
        data() {
            return {};
        },
        props: {
            info: String
        },
        methods: {

        }
    };
</script>