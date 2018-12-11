<template>
    <div class="add container">
        <alert :msg="msg" v-if="msg"></alert>
        <h1 class="page-header">添加用户信息</h1>
        <form @submit="add">
            <div class="well">
                <h4>用户信息</h4>
                <div class="form-group">
                    <label for="">姓名</label>
                    <input type="text" class="form-control" placeholder="name" v-model="customer.name">
                </div>
                <div class="form-group">
                    <label for="">电话</label>
                    <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
                </div>
                <div class="form-group">
                    <label for="">邮箱</label>
                    <input type="text" class="form-control" placeholder="email" v-model="customer.email">
                </div>
                <div class="form-group">
                    <label for="">学历</label>
                    <input type="text" class="form-control" placeholder="education" v-model="customer.education">
                </div>
                <div class="form-group">
                    <label for="">毕业学校</label>
                    <input type="text" class="form-control" placeholder="school" v-model="customer.school">
                </div>
                <div class="form-group">
                    <label for="">职业</label>
                    <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
                </div>
                <div class="form-group">
                    <label for="">个人简介</label>
                    <textarea rows="10" class="form-control" placeholder="profile" v-model="customer.profile"></textarea>
                </div>
                <button type="submit" class="btn btn-primary ">添加</button>
            </div>
        </form>
    </div>
</template>

<script>
    import alert from './Alert'
    export default {
        name: 'add',
        data() {
            return {
                customer: {},
                msg: ''
            }
        },
        methods: {
            add(e) {
                e.preventDefault()
                // console.log(1)
                if (!this.customer.name || !this.customer.phone || !this.customer.email) {
                    this.msg = '请添加信息'
                } else {
                    this.msg = ''
                    let newCustomer = {
                        name: this.customer.name,
                        phone: this.customer.phone,
                        email: this.customer.email,
                        education: this.customer.education,
                        school: this.customer.school,
                        profession: this.customer.profession,
                        profile: this.customer.profile
                    }
                    this.$http.post('http://localhost:3000/users', newCustomer).then(response=> {
                        // console.log(response)
                        // this.$router.push('/')
                        this.$router.push({ path: "/", query: { alert: "用户信息添加成功!" } })
                        // alert('succeed')
                    })
                }
            }
        },
        components: {
            alert
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>