<template>
        <div id="blogHeader">
          <nav>
              <ul>
                  <li>
                        <router-link to="/" exact>add</router-link>
                        <router-link to="/showBlog" exact>show</router-link>
                  </li>
              </ul>
          </nav>
        </div>
      </template>
      
      <script>
      export default {
        name: 'blogHeader',
        data () {
          return {
            
          }
        }
      }
      </script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
      <style scoped>
          nav{
              background: crimson;
              padding: 30px 0;
              margin-bottom: 30px
          }
          ul{
              list-style: none;
              text-align: center;
              margin: 0;
          }
          li{
              display: inline-block;
              margin: 0 10px;

          }
          a{
              color: #fff;
              text-decoration: none;
              padding: 12px;
              border-radius: 5px;
          }
          .router-link-active{
              background: rgba(255,255,255,0.8);
              color:#444;
          }
      </style>
      