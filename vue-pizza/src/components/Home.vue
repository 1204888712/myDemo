<template>
    <div class="row">
        <div class="col-sm-12 text-center" id="home">
            <div class="background">
                <h1>欢迎大家品尝pizza</h1>
                <h2>这里有你非常喜欢的pizza</h2>
                <button @click="goToMenu" class="btn btn-success">let's order</button>

            </div>
        </div>
        
        <!-- <button @click="goToLogin" class="btn btn-outline-success">click</button> -->
        <!-- <button @click="goToAdmin" class="btn btn-outline-success">click</button> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            goToMenu: function () {
                this.$router.go(-1)
            },
            goToLogin: function () {
                this.$router.replace('/login')
            },
            goToAdmin() {
                // this.$router.replace("{name:'menuLink'}")
                this.$router.push('/admin')
                // this.$router.push({name:'menuLink'})
            },


        }
    }
</script>

<style>
    #home{
        background: url('./../assets/1.jpg');
        /* background-origin:content-box;
        background-repeat:no-repeat; */
        height: 85vh;
        padding: 10%;
        /* margin-bottom: 10px; */
        /* z-index: -1; */
    }
    h1,h2{
        margin: 6%;
    }
    .background{
        background:#eee;
        opacity: 0.7;
        max-width: 70vw;
        margin: 0 auto;
        padding: 20px 0;
    }

</style>