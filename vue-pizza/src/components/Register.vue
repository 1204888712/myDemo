<template>
    <div id="register" class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img class="mx-auto d-block" src="../assets/logo.png" alt="">
                    <form  @submit.prevent="onSubmit">
                        <div class="from-group">
                            <label for="email">邮箱</label>
                            <input type="email" class="form-control" v-model="email">
                        </div>
                        <div class="from-group">
                            <label for="password">密码</label>
                            <input id="password" type="password" class="form-control" v-model="password">
                        </div>
                        <div class="from-group">
                            <label for="comfirm-password">确定密码</label>
                            <input id="comfirm-password" type="password" class="form-control" v-model="comfirmPassword">
                        </div>
                        <br>
                        <button type="submit" class="btn btn-block btn-success">注册</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                email:'',
                password:'',
                comfirmPassword:''
            }
        },
        methods: {
            onSubmit() {
                if(this.password == this.comfirmPassword){
                    const userData = {
                        email : this.email,
                        password : this.password
                    }
                    // this.axios.post('https://wd8035063481kxzide.wilddogio.com/posts.json',this.userData).then(res=>{
                    //     console.log(res)
                    // })
                    // '/users'
                    this.axios.post('/users.json',userData).then(res=>{
                        // console.log(res.data)
                        this.$router.push({name:'loginLink'})
                    })
                }else{
                    alert('两次密码不一致')
                }
            }
        },
        // beforeRouteLeave: (to, from, next) => {
        //     // alert('name : ' + this.name)
        //     next(vm=>{
        //         alert('注册成功')
        //     })
        // },
    }
</script>