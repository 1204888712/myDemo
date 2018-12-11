<template>
    <div id="app">
      <div class="container">
        <appHeader></appHeader>
      </div>
  
      <div class="container">
        <router-view></router-view>
        <!-- <router-view></router-view>
        <router-view></router-view>
        <router-view></router-view> -->
  
      </div>
      <br>
      <div class="container">
        <div class="row">
          <!-- 小屏幕12，忠平4列 -->
          <div class="col-sm-12 col-md-4">
            <router-view name="orderingGuide"></router-view>
          </div>
          <div class="col-sm-12 col-md-4">
            <router-view name="delivery"></router-view>
          </div>
          <div class="col-sm-12 col-md-4">
            <router-view name="history"></router-view>
          </div>
        </div>
      </div>
      <!-- <router-view></router-view> -->
    </div>
  
  </template>
  
  <script>
    import Header from './components/Header'
  
  
  
    export default {
      components: {
        'appHeader': Header
      }
    }
  </script>
  
  <style>
  </style>