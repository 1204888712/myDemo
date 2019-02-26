<template>
    <div class="profile">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <!-- <a class="btn btn-light mb-3 float-left" @click.prevent="$router.go(-1)">
                        返回
                    </a> -->
                    <Back info="back" class="btn-light"></Back>
                    <!-- <LikeButton info="LikeButton" class="btn-light" @doIt="demo"></LikeButton> -->
                </div>
            </div>
            <div v-if="profile==null">当前没有任何信息</div>
            <ProfileHeader
             v-if="profile" 
             :profile='profile'>
            </ProfileHeader>

            <ProfileAbout 
            v-if="profile" 
            :profile='profile'>
            </ProfileAbout>

            <ProfileCreds 
            v-if="profile && (profile.education || profile.experience)" 
            :experience="profile.experience"
            :education="profile.education">
            </ProfileCreds>

            <ProfileGithub 
            v-if="profile && profile.githubusername" 
            :username='profile.githubusername'>
            </ProfileGithub>
        </div>

    </div>
</template>

<script>
    import ProfileHeader from "./ProfileHeader";
    import ProfileAbout from "./ProfileAbout";
    import ProfileCreds from "./ProfileCreds";
    import ProfileGithub from "./ProfileGithub";
    import Back from '../common/Back';
    import LikeButton from '../common/LikeButton';
    export default {
        name: "Profile",
        data() {
            return {
                profile: null
            };
        },
        components: {
            ProfileHeader,
            ProfileAbout,
            ProfileCreds,
            ProfileGithub,
            Back,
            LikeButton
        },
        // beforeRouteEnter(to, from, next) {
        //     next(vm => {
        //         vm.getProfileByHandle(to.params.handle);
        //     });
        // },
        created(){
            // route是路由内容
            // 
            let handle = this.$route.params.handle;
            this.getProfileByHandle(handle)
        },
        methods: {
            demo(){
                this.$router.go(-1)
            },
            getProfileByHandle(handle) {
                console.log(handle);
                this.$axios
                    .get(`/api/profile/handle/${handle}`)
                    .then(res => {
                        console.log(res)
                        this.profile = res.data;
                    })
                    .catch(error => {
                        this.profile = null;
                        console.log(error.response.data);
                    });
            }
        }
    };
</script>