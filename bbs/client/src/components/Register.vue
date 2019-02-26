<template>
    <div class="register">
        <div class="container">
            <div class="row">
                <div class="col-md-8 m-auto">
                    <h1 class="display-4 text-center">注册</h1>
                    <p class="lead text-center">创建新的账户</p>
                    <form @submit.prevent='submit' autocomplete="off" method="post">
                        <!-- <div class="form-group">
                            <input type="password" class="form-control form-control-lg" placeholder="用户名" name="name"
                                v-model="newUser.name" :class="{'is-invalid': errors.name}" />
                            <div v-if="errors.name" class="invalid-feedback">
                                {{errors.nmae}}
                            </div>
                        </div> -->
                        <TextField
                        type="text"
                        name="name"
                        v-model="newUser.name"
                        :error="errors.name"
                        placeholder="用户名"
                        ></TextField>
                        <!-- <div class="form-group">
                            <input type="email" class="form-control form-control-lg" placeholder="邮箱地址" name="email"
                                v-model="newUser.email" :class="{'is-invalid': errors.email}" />
                            <div v-if="errors.email" class="invalid-feedback">
                                {{errors.email}}
                            </div>
                        </div> -->
                        <TextField
                        type="email"
                        name="email"
                        v-model="newUser.email"
                        :error="errors.email"
                        placeholder="邮箱地址"
                        ></TextField>
                        <!-- <div class="form-group">
                            <input type="password" class="form-control form-control-lg" placeholder="密码" name="password"
                                v-model="newUser.password" :class="{'is-invalid': errors.password}" />
                            <div v-if="errors.password" class="invalid-feedback">
                                {{errors.password}}
                            </div>
                        </div> -->
                        <TextField
                        type="password"
                        name="password"
                        v-model="newUser.password"
                        :error="errors.password"
                        placeholder="密码"
                        ></TextField>


                        <!-- <div class="form-group">
                            <input type="password" class="form-control form-control-lg" placeholder="确认密码" name="password2"
                                v-model="newUser.password2" :class="{'is-invalid': errors.password2}" />
                            <div v-if="errors.password2" class="invalid-feedback">
                                {{errors.password2}}
                            </div>
                        </div> -->
                        <TextField
                        type="password"
                        name="password2"
                        v-model="newUser.password2"
                        :error="errors.password2"
                        placeholder="确认密码"
                        ></TextField>
                        <input type="submit" class="btn btn-info btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TextField from "./common/TextFieldGroup";

    export default {
        name: "register",
        data() {
            return {
                newUser: {
                    name: "",
                    email: "",
                    password: "",
                    password2: ""
                },
                errors: ""
            };
        },
        components:{
            TextField
        },
        methods: {
            submit() {
                this.$axios
                    .post('api/users/register', this.newUser)
                    .then(res => {
                        this.errors = "";
                        console.log(res.data);
                        alert("注册成功!");
                        this.$store.dispatch("setUser", res.data);
                        this.$router.push("/login");
                    })
                    .catch(err => {
                        this.errors = err.response.data;
                    })
            }
        }

    };
</script>
<style scoped>
</style>