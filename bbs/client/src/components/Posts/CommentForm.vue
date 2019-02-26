<template>
    <div class="post-form mb-3">
        <div class="card card-info">
            <div class="card-header bg-info text-white">
                    
            </div>
            <div class="card-body">
                <form @submit.prevent="submit">
                    <TextArea name="text" placeholder="快来评论一下吧..." v-model="text" :error="errors.text"></TextArea>
                    <input type="submit" class="btn btn-dark btn-block" />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import TextArea from "../common/TextAreaGroup";

    export default {
        name: "commentform",
        data() {
            return {
                text: "",
                errors: ""
            };
        },
        props: {
            postId: String
        },
        components: {
            TextArea
        },
        methods: {
            submit() {
                const user = this.$store.getters.user;
                const newComment = {
                    text: this.text,
                    name: user.name,
                    avatar: user.avatar
                };

                // 添加评论
                this.$axios
                    .post(`/api/posts/comment/${this.postId}`, newComment)
                    .then(res => {
                        this.errors = ""; // 清空错误提示
                        this.text = ""; // 清空文本

                        this.$emit("update");
                    })
                    .catch(error => {
                        console.log(error,error.response);
                        this.errors = error.response.data;
                    });
            }
        }
    };
</script>