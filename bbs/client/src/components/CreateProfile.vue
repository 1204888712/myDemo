<template>
    <div class="create-profile">
        <div class="container">
            <div class="row">
                <div class="col-md-8 m-auto">
                    <a class="btn btn-info" @click.prevent="$router.go(-1)">返回</a>
                    <h1 class="display-4 text-center">创建个人资料</h1>
                    <p class="lead text-center">填写您的个人资料, 让我们更多的了解你!</p>
                    <small class="d-block pb-3">* 表示必填项</small>
                    <form @submit.prevent="submit">
                            <TextField 
                             type='text'
                             name='handle'
                             placeholder="* Profile Handle"
                             v-model="msgInfo.handle"
                             :error='errors.handle'
                             info='此处的handle是在后端接口中需要用来查询数据的, 通常是写你email的名字'
                           ></TextField>
           
                           <SelectList
                             name='status'
                             :error='errors.status'
                             v-model="msgInfo.status"
                             :options='options'
                             info='请告知我们您目前所从事的岗位'
                           ></SelectList>
                           
                           <TextField 
                             type='text'
                             name='company'
                             placeholder="公司"
                             v-model="msgInfo.company"
                             :error='errors.company'
                             info='可以是你自己的公司或者是你的在职公司'
                           ></TextField>
           
                           <TextField 
                             type='text'
                             name='website'
                             placeholder="网址"
                             v-model="msgInfo.website"
                             :error='errors.website'
                             info='你公司网址或者是你在职公司网址'
                           ></TextField>
           
                           <TextField 
                             type='text'
                             name='location'
                             placeholder="位置"
                             v-model="msgInfo.location"
                             :error='errors.location'
                             info='你所在的城市及所在区'
                           ></TextField>
           
                           <TextField 
                             type='text'
                             name='skills'
                             placeholder="* 技能"
                             v-model="msgInfo.skills"
                             :error='errors.skills'
                             info='请使用逗号隔开你所掌握的技能'
                           ></TextField>
           
                           <TextField 
                             type='text'
                             name='githubusername'
                             placeholder="Github 用户名"
                             v-model="msgInfo.githubusername"
                             :error='errors.githubusername'
                             info='如果你希望将你的项目分享给大家, 可以填写你的github用户名'
                           ></TextField>
           
                          <TextArea
                           placeholder="自我介绍"
                           name='bio'
                           v-model="msgInfo.bio"
                           :error='errors.bio'
                           info='简单介绍一下自己'
                          ></TextArea>
                         
                          <div class="mb-3">
                           <button type="button" class="btn btn-info" 
                             @click="displaySocialInputs = !displaySocialInputs">添加社交账号</button>
                           <span class="text-muted">点击添加</span>
                          </div>
                         
                          <div v-show="displaySocialInputs">
                            <InputGroup
                             placeholder="微信公众号"
                             name='wechat'
                             v-model="msgInfo.wechat"
                             :error='errors.wechat'
                             icon='fab fa-weixin'
                            ></InputGroup>
           
                            <InputGroup
                             placeholder="QQ"
                             name='QQ'
                             v-model="msgInfo.QQ"
                             :error='errors.QQ'
                             icon='fab fa-qq'
                            ></InputGroup>
           
                          </div>
           
                           <input type="submit" class="btn btn-info btn-block mt-4" />
                         </form>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import TextField from "./common/TextFieldGroup";
    import TextArea from "./common/TextAreaGroup";
    import SelectList from "./common/SelectListGroup";
    import InputGroup from "./common/InputGroup";

    export default {
        name: "create-profile",
        data() {
            return {
                msgInfo: {
                    handle: "",
                    status: "请选择您的职业",
                    company: "",
                    website: "",
                    location: "",
                    skills: "",
                    githubusername: "",
                    bio: "",
                    wechat: "",
                    QQ: "",
                },
                options: [
                    { label: "0", value: "请选择您的职业" },
                    { label: "1", value: "搬砖" },
                    { label: "2", value: "砌墙" },
                    { label: "3", value: "装修" },
                    
                ],
                errors: "",
                displaySocialInputs: false
            };
        },
        components: {
            TextField,
            TextArea,
            SelectList,
            InputGroup
        },
        created() { },
        methods: {
            submit() {
                // console.log(this.msgInfo);
                this.$axios
                    .post("/api/profile", this.msgInfo)
                    .then(res => {
                        this.errors = ""; // 清空页面错误信息
                        console.log(res.data);
                        this.$store.dispatch("setProfile", res.data);
                        this.$router.push("/dashboard");
                    })
                    .catch(error => {
                        console.log(error.response)
                        if (error.response.data) {
                            this.errors = error.response.data;
                        }
                    });
            }
        }
    };
</script>

<style>
</style>