<template>
    <div id="showBlog" v-theme:column="'narrow'">
        <h1>博客总览</h1>
        <input type="text" name="" id="search" placeholder="搜索" v-model="search">
        <!-- {{search}} -->
        <div class="singleBlog" v-for="data in searchFilter">
            <!-- 管道传值,会传到回调函数的参数上 -->
            <h2 v-rainbow>{{data.title | to-uppercase}}</h2>
            
            <article>{{data.content | snippet}}</article>
            <router-link :to="'/blog/'+data.id">
                <button>详情</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'showBlog',
        data() {
            return {
                dataArray: [],
                search: "",
                
            }
        },
        methods: {

        },
        computed: {
            searchFilter() {
                return this.dataArray.filter(data => {

                    return data.title.match(this.search)
                })
            }
        },
        created() {
            // 'http://jsonplaceholder.typicode.com/posts'
            this.$http.get('https://wd5850362164ghimed.wilddogio.com/posts.json').then(response => {
                // this.dataArray = response.data.slice(0, 10)
                console.log(response)
                return response.data
            }).then(response=>{
                var blogArray = [];
                for(let key in response){
                    // console.log(key)//这个是name
                    // console.log(response[key]);//这个是所需对象,
                    response[key].id = key;
                    blogArray.push(response[key])//装入数据
                }
                this.dataArray = blogArray
            })
        },
        directives: {
            "rainbow": {
                bind(el, binding, vnode) {
                    el.style.color = "#" + Math.random().toString(16).slice(2, 8)
                }
            }
        },
        filters: {
            "to-uppercase": function (value) {
                //   // 返回处理后的值
                return value.toUpperCase()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #showBlog {
        max-width: 800px;
        margin: 0 auto;
    }

    #search {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    }

    .singleBlog {
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
    #showBlog a button{
        cursor: pointer;
    }
</style>