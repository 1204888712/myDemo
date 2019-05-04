<template>
  <div class="hello" @click="openDialog">
    hhh
    <dialog title="xxx" :visible.sync="visible"></dialog>
  </div>
</template>

<script>
  import mydialog from "./dialog.vue"
  export default {
    data(){
      return {
        visible:false
      }
    },
    name: 'HelloWorld',
    beforeRouteEnter(to, from, next) {
      console.log("enter")
      // next(false)
      next()
    },
    methods: {
      openDialog() {
        this.visible = true // 通过data显式控制dialog
      }
    },
    beforeRouteLeave(to, from, next) {
      console.log("leave")
      // next(false)
      next()
    },
    components:{
      mydialog
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>