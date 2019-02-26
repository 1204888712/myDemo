<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div class="container">
            <!-- <a class="navbar-brand" href="landing.html">test online</a> -->
            <router-link v-if="!isLogin" to='/' class="navbar-brand">testBrand</router-link>
            <router-link v-else to='/dashboard' class="navbar-brand">testBrand</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="mobile-nav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <!-- <a class="nav-link" href="profiles.html"> test item
                        </a> -->
                        <router-link to='/profiles' class="nav-link">test item</router-link>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to='/posts' class="nav-link">留言</router-link>
                    </li>
                    <li class="nav-item">
                        <!-- <router-link to='/dashboard' class="nav-link">Dashboard</router-link> -->
                    </li>
                    <li class="nav-item" v-show="!isLogin">
                        <router-link to='/register' class="nav-link">注册</router-link>
                    </li>
                    <li class="nav-item" v-show="!isLogin">
                        <router-link to='/login' class="nav-link">登录</router-link>
                        <!-- <a class="nav-link" href="login.html">登录</a> -->
                    </li>
                    <li v-if="user !== null" class="nav-item" v-show="isLogin">
                        <a class="nav-link" @click.prevent='logout'>
                            <!-- <img class="rounded-circle headerImg" :src="user.avatar" :alt="user.name" > -->
                            <span>{{user.name}}</span>
                            退出
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {};
        },
        computed: {
            isLogin() {
                return this.$store.getters.isAutnenticated;
            },
            user() {
                return this.$store.getters.user;
            }
        },
        methods: {
            logout() {
                // 删除ls
                localStorage.removeItem("jwtToken");
                // 干掉请求头
                // this.$store.dispatch("setIsAutnenticated", false);
                // this.$store.dispatch("setUser", {});
                this.$store.dispatch("clearCurrentState");
                // 跳转登录
                this.$router.push("/login");
            }
        }
    };
</script>

<style scoped>
    .headerImg {
        width: 25px;
        margin-right: 5px;
    }
</style>