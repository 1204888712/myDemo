<template>
  <div id="app">
    <NavBar></NavBar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer></Footer>
    <Loading v-show="loading"></Loading>
  </div>
</template>

<script>
  import NavBar from './components/NavBar';
  import Landing from './components/Landing';
  import Footer from './components/Footer';
  import Loading from './components/common/Loading';
  import jwt_decode from "jwt-decode";

  export default {
    name: 'App',
    components: {
      NavBar,
      Footer,
      Landing,
      Loading
    },
    created() {
      // 处理授权/token过期
      if (localStorage.jwtToken) {
        const decode = jwt_decode(localStorage.jwtToken);
        const currentTime = Date.now() / 1000;
        if (decode.exp < currentTime) {
          // this.$store.dispatch("setIsAutnenticated", false);
          // this.$store.dispatch("setUser", {});
          this.$store.dispatch("clearCurrentState");
          this.$router.push('/login');
        } else {
          this.$store.dispatch("setIsAutnenticated", !this.isEmpty(decode));
          this.$store.dispatch("setUser", decode);
        }
      }
    },
    computed: {
      loading() {
        let load = this.$store.getters.loading;
        return load;
      }
    },
    methods: {
      isEmpty(value) {
        return (
          value === undefined ||
          value === null ||
          (typeof value === "object" && Object.keys(value).length === 0) ||
          (typeof value === "string" && value.trim().length === 0)
        );
      }
    }

  }
</script>

<style>

</style>