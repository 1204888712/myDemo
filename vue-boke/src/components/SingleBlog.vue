<template>
    <div class="singleBlog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>作者：{{blog.author}}</p>
        <p>分类：</p>
        <ul>
            <li v-for="category in blog.categories">
                {{category}}
            </li>
        </ul>
        <button @click="deleteCustomer">删除</button>
        <router-link :to="'/edit/'+id"><button>bianji</button></router-link>
        
    </div>
</template>

<script>
    export default {
        name: 'singleBlog',
        data() {
            return {
                id:null,
                blog:{},
            }
        },
        methods:{
            deleteCustomer(id) {
                // console.log(id)
                this.$http.delete('https://wd5850362164ghimed.wilddogio.com/posts/' + this.$route.params.id+'.json').then((response )=> {
                    // console.log(response)
                    console.log(this)
                    this.$router.push({ path: '/showBlog', query: { alert: '删除成功' } })
                })
            }
        },
        created(){
            this.$http.get('https://wd5850362164ghimed.wilddogio.com/posts/'+this.$route.params.id+'.json').then(response=>{
                // console.log(response)
                // this.blog = response.data
                this.id = this.$route.params.id
                return response.data
            }).then(response=>{
                this.blog = response
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .singleBlog{
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
        background: #eee;
        border: 1px dotted #aaa;
    }
</style>