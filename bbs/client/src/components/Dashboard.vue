<template>
    <div>
        <!-- this is Dashboard
        <div>{{user}}</div> -->
        <div class="dashboard">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="display-4">this is Dashboard page</h1>
                        <p class="lead text-muted" v-if="user != null">
                            Welcome 
                            <!-- <span class="text-info">{{user.name}}</span> -->
                            <span v-if="profile == null" class="text-muted">{{user.name}}</span>
                            <!-- <router-link v-else :to="{name: 'profile', params:{handle: profile.handle}}" class="text-info "> -->
                            <router-link v-else :to="`/profile/${profile.handle}`">
                                {{user.name}}
                            </router-link>
                            <!-- 设置入口 -->
                        </p>
                        <div v-if='profile !== null'>
                            <!-- to do show msg -->
                            <ProfileActived></ProfileActived>
                            <!-- 个人履历 -->
                            <Experience 
                            :experience="profile.experience"
                            @deleteExperience= "deleteExperience"
                            ></Experience>

                            <!-- 教育经历 -->
                            <Education
                            :education="profile.education"
                            @deleteEducation="deleteEducation"
                            ></Education>

                            <!-- 删除账户按钮 -->
                            <div class="mb-2 mt-2">
                                <button class="btn btn-danger" @click="deleteClick">
                                    删除当前账户
                                </button>
                            </div>
                        </div>


                        <div v-else>
                            <p>当前没有任何相关的个人信息，请添加一些您的个人信息</p>
                            <router-link to='/create-profile' class="btn btn-lg btn-info">添加个人信息</router-link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProfileActived from "./common/ProfileActived";
    import Experience from "./common/Experience";
    import Education from "./common/Education";
    export default {
        name: "Dashboard",
        data() {
            return {
                profile: null // 存储用户个人信息
            };
        },
        computed: {
            user() {
                return this.$store.getters.user
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.getProfileData();
            });
        },
        components: {
            ProfileActived,
            Education,
            Experience
        },
        methods: {
            getProfileData() {
                // 请求数据
                this.$axios("/api/profile")
                    .then(res => {
                        console.log(res.data);
                        this.profile = res.data;
                        // if(this.profile.user){
                        //     this.user.avatar = this.profile.user.avatar;
                        //     this.$store.dispatch("setUser", this.user);
                        // }
                        // 更新store
                        this.$store.dispatch("setProfile", res.data);
                        
                    })
                    .catch(error => {
                        this.profile = null;
                        
                        // 更新store
                        this.$store.dispatch("setProfile", null);
                        console.log(error, error.response)
                    });
            },
            deleteClick() {
                this.$axios
                    .delete("/api/profile")
                    .then(res => {
                        this.profile = null;
                        // 更新store
                        // this.$store.dispatch("setProfile", null);
                       
                        this.$store.dispatch("clearCurrentState");
                        this.$router.push("/login");
                    })
                    .catch(error => {
                        alert(error.response.data);
                    });
            },
            deleteExperience(id) {
                this.$axios
                    .delete(`/api/profile/experience/${id}`)
                    .then(res => {
                        console.log(res.data);
                        // 刷新储存的值
                        this.profile = res.data;
                    })
                    .catch(error => { });
            },
            deleteEducation(id) {
                this.$axios
                    .delete(`/api/profile/education/${id}`)
                    .then(res => {
                        console.log(res.data);
                        this.profile = res.data;
                    })
                    .catch(error => { });
            }
        }
    };
</script>

<style scoped>
</style>