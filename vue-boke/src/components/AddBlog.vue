<template>
    <div id="addBlog">
        <h2>添加博客</h2>
        <form v-if="!submitted">
            <label>博客标题</label>
            <input type="text" v-model="blog.title" required>

            <label>博客内容</label>
            <textarea v-model="blog.content"></textarea>

            <div id="checkboxes">
                <label for="">vue1.js</label>
                <input type="checkbox" value="vue1.js" v-model="blog.categories">
                <label for="">vue2.js</label>
                <input type="checkbox" value="vue2.js" v-model="blog.categories">
                <label for="">vue3.js</label>
                <input type="checkbox" value="vue3.js" v-model="blog.categories">
                <label for="">vue4.js</label>
                <input type="checkbox" value="vue4.js" v-model="blog.categories">
            </div>
            <label for="">作者:</label>
            <select v-model="blog.author">
                <option v-for="author in authors">
                    {{author}}
                </option>
            </select>

            <button @click.prevent="post">添加博客</button>
        </form>

        <h3 v-if="submitted">博客发布成功</h3>
        <hr>
<!--  v-if="submitted" -->
        <div id="preview">
            <h2>博客总览</h2>
            <p>博客标题:{{blog.title}}</p>
            <p>博客内容:</p>
            <p>{{blog.content}}</p>
            <p>博客分类:</p>
            <ul>
                <li v-for="category in blog.categories">{{category}}</li>
            </ul>
            <p>作者:{{blog.author}}</p>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'addBlog',
        data() {
            return {
                blog: {
                    title: '',
                    content: '',
                    categories:[],
                    author:''
                },
                submitted:false,
                authors:["name1","name2","name3"]
            }
        },
        methods:{
            post(){
                this.$http.post('https://wd5850362164ghimed.wilddogio.com/posts.json',this.blog,
                // {
                //     title:this.blog.title,
                //     body:this.blog.content,
                //     userId:1
                // }
            ).then(response=>{
                    console.log(response),
                    this.submitted = !this.submitted
                })
            }
        }
        
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #addBlog *{
        box-sizing: border-box;
    }
    #addBlog{
        margin: 20px auto;
        max-width: 600px;
        padding: 20px;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }
    input[type="text"],textarea,select{
        display: block;
        width: 100%;
        padding: 8px;
    }
    select{
        cursor: pointer;
    }
    textarea{
        height: 200px;
    }
    #checkboxes label{
        display: inline-block;
        margin-top: 0;
    }
    #checkboxes input{
        display: inline-block;
        margin-right: 10px;
    }
    button{
        display: block;
        margin: 20px 0;
        background: crimson;
        color: white;
        border: 0;
        padding: 14px;
        border-radius: 4px;
        font-size: 18px;
        cursor: pointer;
    }


    #preview{
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }
    h3{
        margin-top: 10px;
    }
</style>