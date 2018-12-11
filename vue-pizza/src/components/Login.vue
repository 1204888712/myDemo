<template>
    <div id="login" class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img class="mx-auto d-block" src="../assets/logo.png" alt="">
                    <form @submit.prevent="onSubmit">
                        <div class="from-group">
                            <label for="email">邮箱</label>
                            <input type="email" class="form-control" v-model="email">
                        </div>
                        <div class="from-group">
                            <label for="password">密码</label>
                            <input id="password" type="password" class="form-control" v-model="password">
                        </div>
                        <br>
                        <button type="submit" class="btn btn-block btn-success">登录</button>
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
                email: '',
                password: '',

            }
        },
        methods: {
            onSubmit() {
                this.axios.get('/users.json').then(res => {
                    const data = res.data
                    const users= []
                    for(let key in data){
                        const user = data[key]
                        users.push(user)
                    }
                    let result = users.filter((user)=>{
                        return user.email === this.email && user.password === this.password
                    })
                    console.log(result)
                    if(result != null && result.length > 0){
                        //传递登录状态，
                        this.$store.dispatch("setUser",result[0].email)
                        this.$router.push({name:'homeLink'})
                    }else{
                        alert("账号或者密码错误")
                        //传递null初始化
                        this.$store.dispatch("setUser",null)
                    }
                })
            }
        },
        beforeRouteEnter:(to,from,next)=>{
            next(vm=>{
                vm.$store.dispatch("setUser",null)
            })
        },
        // beforeRouteLeave:(to,from,next)=>{
        //     console.log('leave')
        //     if(confirm('确定离开吗?') == true){
        //         next()
        //     }else{
        //         next(false)
        //     }
        // },
    }
</script>