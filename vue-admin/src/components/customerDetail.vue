<template>
    <div class="customerDetail container">
        <router-link to="/" class="btn btn-default">返回</router-link>
        <h1 class="page-header">
            {{customer.name}}
            <span class="pull-right">
                <router-link v-bind:to="'/edit/'+ customer.id" class="btn btn-primary">编辑</router-link>
                <button @click="deleteCustomer(customer.id)" class="btn btn-danger">删除</button>
            </span>
        </h1>
        <ul class="list-group">
            <li class="list-group-item">
                <span class="glyphicon glyphicon-user">
                    {{customer.phone}}
                </span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-user">
                    {{customer.email}}
                </span>
            </li>


        </ul>
        <ul class="list-group">

            <li class="list-group-item">
                <span class="glyphicon glyphicon-user">
                    {{customer.education}}
                </span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-user">
                    {{customer.school}}
                </span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-user">
                    {{customer.profession}}
                </span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-user">
                    {{customer.profile}}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'customerDetail',
        data() {
            return {
                customer: ''
            }
        },
        methods: {
            deleteCustomer(id) {
                // console.log(id)
                this.$http.delete('http://localhost:3000/users/' + id).then((response )=> {
                    // console.log(response)
                    console.log(this)
                    this.$router.push({ path: '/', query: { alert: '删除成功' } })
                })
            },
            fetchCustomers(id) {
                this.$http.get('http://localhost:3000/users/' + id).then(response => {
                    // console.log(response)
                    var data = response.data
                    this.customer = data
                })
            }
        },
        created() {
            this.fetchCustomers(this.$route.params.id)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>