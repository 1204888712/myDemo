<template>
  <div id="app">
    <!-- <router-link to:"/">add</router-link> -->
    <blogHeader></blogHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import blogHeader from './components/BlogHeader'

export default {
  name: 'App',
  components: {
    HelloWorld,
    blogHeader
   
  },
}
</script>

<style>

</style>
