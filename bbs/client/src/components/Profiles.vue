<template>
    <div class="profiles">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="display-3 text-center">welcome</h1>
                    <p class="lead text-center text-info">让世界丰富多彩的你们!</p>

                    <!-- Profile Item -->
                    <!-- 注意v-if的优先级大于v-for -->
                    <ProfileItem 
                    v-if="profiles.length>0" 
                    v-for="profileItem in profiles" 
                    :key="profileItem._id"
                    :profileItem='profileItem'>
                    </ProfileItem>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProfileItem from "./common/ProfileItem";
    export default {
        data() {
            return {
                profiles: []
            };
        },
        components: {
            ProfileItem
        },
        created() {
            this.getProfiles();
        },
        methods: {
            getProfiles() {
                this.$axios
                    .get("api/profile/all")
                    .then(res => {
                        console.log(res.data);
                        this.profiles = res.data;
                        this.$store.dispatch("setProfiles", res.data);
                    })
                    .catch(error => {
                        // 失败数据清空
                        this.profiles = [];
                        this.$store.dispatch("setProfiles", []);
                        console.log(error.response.data);
                    });
            }
        }
    };
</script>