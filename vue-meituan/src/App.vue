<template>
  <div id="app">
    <!-- 头部 -->
    <app-header :poiInfo="poiINfo"></app-header>

    <!-- 导航 -->
    <div class="nav">
      <app-nav :commentNum="commentNum"></app-nav>
    </div>

    <!-- 内容 -->
    <div class="content">
 
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';

export default {
  name: 'App',
  components: {
    'app-header':Header,
    'app-nav':Nav,
  },
  data(){
    return{
      poiINfo:{},
      commentNum:0
    }
  },
  created(){
    fetch("/api/goods")
    .then(res=>res.json())
    .then(res=>{
      if(res.code == 0){
        this.poiINfo = res.data.poi_info
        // console.log(this.poiINfo)
      }
    })
    fetch("/api/ratings")
    .then(res=>res.json())
    .then(res=>{
      if(res.code == 0){
        // this.poiINfo = res.data.poi_info
        // console.log(this.poiINfo)
        this.commentNum = res.data.comment_num
      }
    })

  }
}
</script>

<style>

</style>
