<template>
    <div class="customer container">
        <alert :msg="msg" v-if="msg"></alert>
        <h1 class="page-header">用户管理系统</h1>
        <input type="text" class="form-control" placeholder="search" v-model="filterInput">
        <!-- <button class="btn btn-default pull-right">search</button> -->
        <table class="table table-striped">
            <!-- thread>tr>th -->

            <thead>
                <tr>
                    <th>姓名</th>
                    <th>电话</th>
                    <th>邮箱</th>
                    <th></th>
                </tr>
            </thead>
            <!-- tbody>tr>th filterBy(customers,filterInput)-->
            <tbody>
                <!-- 依赖于filterInput 和 customers,一旦改变，这里也该改变 -->
                <tr v-for="customer in filterBy(customers,filterInput)">
                    <th>{{customer.name}}</th>
                    <th>{{customer.phone}}</th>
                    <th>{{customer.email}}</th>
                    <th>
                        <!-- 此处绑定表达式需要v-bind  下面也可以,可以根据hash传值-->
                        <!-- <router-link v-bind:to="{path:'/customer/'+customer.id, params:{id:customer.id}}" class="btn btn-default">详情</router-link> -->
                        <router-link v-bind:to="{path:'/customer/'+customer.id}" class="btn btn-default">详情</router-link>
                    </th>
                </tr>
            </tbody>
        </table>
        <!-- <button @click="fetchCustomers">1</button> -->
    </div>
</template>
<script>
    import alert from './Alert'
    export default {
        name: 'customer',
        data() {
            return {
                customers: [],
                msg: '',
                filterInput:''
            }
        },
        methods: {
            fetchCustomers() {
                // ?q='+this.search
                this.$http.get('http://localhost:3000/users').then(response => {
                    var data = response.data
                    this.customers = data
                })
            },
            filterBy(customers,input){
                // if(!input) {
                //     return customers
                // }
                return customers.filter(function(customer){
                    return customer.name.match(input)
                })
            }
        },
        components: {
            alert
        },
        created() {
            // console.log(1)
            this.fetchCustomers()
            if (this.$route.query) {
                this.msg = this.$route.query.alert
                // console.log(1)
            }


        },
        // updated(){
        //     this.fetchCustomers()
        //     // console.log(this.search)
        // }
    }
</script>