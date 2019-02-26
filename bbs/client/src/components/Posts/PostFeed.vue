<template>
    <div class="posts">
        <!-- Post Item -->
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-2">
                    <a>
                        <img class="rounded-circle d-nonse d-md-block m-auto" style="width: 50px" :src="post.avatar" alt="" />
                    </a>
                    <br />
                    <p class="text-center">{{post.name}}</p>
                </div>
                <div class="col-md-10">
                    <!-- 文本区 -->
                    <p class="lead">{{post.text}}</p>
                    <!-- 功能区 -->
                    <span v-if="showAction">
                        <button 
                        type="button" 
                        class="btn btn-light mr-1" 
                        @click="likeClick(post._id)">
                            <i class="fas fa-thumbs-up" :class="{'text-info' : findUserLike}"></i>
                            <span class="badge badge-light">{{post.likes.length}}</span>
                        </button>
                        <button 
                        type="button" 
                        class="btn btn-light mr-1" 
                        @click="unLikeClick(post._id)">
                            <i class="text-secondary fas fa-thumbs-down"></i>
                        </button>
                        <!-- 评论入口 -->
                        <router-link 
                        class="btn btn-info mr-1" 
                        :to="{name: 'post', params:{id: post._id}}">
                            评论
                        </router-link>

                        <!-- 判断是否可以删除留言(本人可以删除) -->
                        <button 
                        v-if="user != null && user.id == post.user"
                        type="button" 
                        class="btn btn-danger mr-1 float-right"
                        @click="deleteClick(post._id)">
                            <i class="fas fa-times" ></i>
                        </button>
                    </span>
                </div>
            </div>
        </div>
        <div v-if="errors.notauthorized !== undefined" class="text-danger m-2">错误：{{errors.notauthorized}}</div>
    </div>
</template>

<script>
    export default {
        name: "postfeed",
        data() {
            return {
                userLike: false,
                errors:{}
            };
        },
        props: {
            post: Object,
            showAction: {
                type:Boolean,
                default:false
            }
        },
        computed: {
            user() {
                return this.$store.getters.user;
            },
            findUserLike() {
                
                const user = this.$store.getters.user;
                // console.log("find",this.post.likes.filter(like => {
                //             return like.user == user.id;
                //         }))
                if(user!=null)
                if (this.post.likes.length > 0) {
                    // 如果likes长度大于0的时候筛选,本人点赞的高亮显示
                    if (
                        this.post.likes.filter(like => {
                            return like.user == user.id;
                        }).length > 0
                    )
                    return true;
                }
                return false; // 如果likes长度长度为0直接返回false
            }
        },
        methods: {
            deleteClick(id) {
                this.$axios
                    .delete(`/api/posts/${id}`)
                    .then(res => {
                        this.errors = {};
                        // 删除成功，更新数据
                        this.$emit("update");
                    })
                    .catch(error => {
                        console.log(error.response.data);
                        this.errors = error.response.data;
                    });
            },
            likeClick(id) {
                this.$axios
                    .post(`/api/posts/like/${id}`)
                    .then(res => {
                        this.errors = {};
                        // 成功，更新数据
                        this.$emit("update");
                    })
                    .catch(error => {
                        alert(error.response.data.alreadyliked);
                    });
            },
            unLikeClick(id) {
                this.$axios
                    .post(`/api/posts/unlike/${id}`)
                    .then(res => {
                        this.errors = {};
                        // 成功，更新数据
                        this.$emit("update");
                    })
                    .catch(error => {
                        alert(error.response.data.notliked);
                    });
            }
        }
    };
</script>