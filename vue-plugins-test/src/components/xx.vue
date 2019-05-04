<template>
    <div class="xx">
        <!-- <test @click.native="doit" ref="test"></test> -->
        <!-- <div @click="openDialog">btn</div> -->
        <!-- <div @click="loading">loading</div> -->
        <mydialog title="testxxx111" :visible.sync="visible">
            恍恍惚惚红红火火
            <template #footer> <span @click="visible=false">close</span> </template>
        </mydialog>
        <p class="Btn" @click="openDialog">dialog</p>
        <p class="Btn" @click="loading">loading</p>
        <p class="Btn" @click="doit">notice</p>

    </div>
</template>

<script>
    import test from './test.vue'
    import mydialog from "./dialog.vue"
    import mymodal from "./modal.vue"
    import mynotice from "./loading/loading.vue"


    export default {
        name: 'xx',
        data() {
            return {
                visible: false
            }
        },
        // beforeRouteEnter(to, from, next) {
        //     console.log("enter", to)
        //     // next(false)
        //     next()
        // },
        // beforeRouteLeave(to, from, next) {
        //     console.log("leave")
        //     // next(false)
        //     next()
        // },
        mounted() {
            // console.log(this.$el)
        },
        components: {
            test,
            mydialog,
            mymodal,
            mynotice
        },
        methods: {
            openDialog() {
                this.visible = true // 通过data显式控制dialog
            },
            doit() {
                this.$notice("xxxxx")
            },
            loading() {
                this.$myloading(2000)
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Btn {
        width: 200px;
        height: 60px;
        background: #d93a55;
        line-height: 60px;
        margin: 0 auto;
        color: #fff;
        border-radius: 10px;
        margin-top: 100px;
    }
</style>