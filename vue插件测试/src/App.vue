<template>
  <div id="app">
    <router-link :to="{name:'home',params:{name:'xxx'}}">home</router-link>
    <router-link :to="{name:'xxx',params:{name:'xxx'}}">xxx</router-link>
    <router-link :to="{path:'/xxx',query:{name:'xxx',x:'x'}}">xxx</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import mydialog from './components/dialog'
  export default {
    name: 'app',
    components: {
      HelloWorld,
    },
    methods: {
      
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>