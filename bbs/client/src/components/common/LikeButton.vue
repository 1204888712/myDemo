<template>
        <a class="btn mb-3 float-left" @click.prevent="doIt()">
            {{info}}
        </a>
</template>

<script>
    export default {
        data() {
            return {
                param:null
            };
        },
        props: [
            'info'
        ],
        methods: {
            doIt(){
                this.$emit('doIt',this.param)
            }
        }
    };
</script>