<template>
    <div id="newPizza">
        <form action="">
            <h3 class="text-muted my-5">添加新的Pizza</h3>
            <div class="form-group row">
                <label for="" class="col-sm-1">品种</label>
                <div class="col-sm-11">
                    <input type="text" class="form-control" v-model="newPizza.name">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-1">描述</label>
                <div class="col-sm-11">
                    <textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>
                </div>
            </div>
            <p>
                <strong>选项1</strong>
            </p>
            <div class="form-group row">
                <label for="" class="col-sm-1">尺寸</label>
                <div class="col-sm-11">
                    <input type="text" class="form-control" v-model="newPizza.size1">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-1">价格</label>
                <div class="col-sm-11">
                    <input type="text" class="form-control" v-model="newPizza.price1">
                </div>
            </div>
            <p>
                <strong>选项2</strong>
            </p>
            <div class="form-group row">
                <label for="" class="col-sm-1">尺寸</label>
                <div class="col-sm-11">
                    <input type="text" class="form-control" v-model="newPizza.size2">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-1">价格</label>
                <div class="col-sm-11">
                    <input type="text" class="form-control" v-model="newPizza.price2">
                </div>
            </div>
            <div class="form-group row">
                <button type="button" class="btn btn-success btn-block" @click="addMenuItem">添加</button>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                newPizza: {},
                // price2:1
            }
        },
        methods: {
            addMenuItem() {
                // console.log(this.newPizza)
                var newMenuItem = {
                    name: this.newPizza.name,
                    description: this.newPizza.description,
                    options: [
                        {
                            size: this.newPizza.size1,
                            price: this.newPizza.price1
                        },
                        {
                            size: this.newPizza.size2,
                            price: this.newPizza.price2
                        }
                    ]
                }
                this.axios.post('/menu.json', newMenuItem)
                .then(res=>{
                    newMenuItem.id = res.data.name
                })
                .then(res=>this.$store.commit('addMenu',newMenuItem))



                // fetch('https://wd8035063481kxzide.wilddogio.com/menu.json',{
                //     method:'POST',
                //     headers:{
                //         "Content-type":'application/json'
                //     },
                //     body:JSON.stringify(newMenuItem)
                // }).then(res=>res.json())
                // .then(res=>this.$router.push({name:'menuLink'}))
                // .catch(err=>console.log(err))
            },
            
        },
        created(){
            
        }

    }
</script>