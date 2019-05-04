<template>
    <div class="loading" v-if="state">
        <img src="./loading.gif" alt="loading">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                timing:0,
                state:true
            }
        },
        mounted(){
            let that = this;
            setTimeout(() => {
                that.state = false;
            }, that.timing);
        }
    }
</script>

<style scoped>
    .loading {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>