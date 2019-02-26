<template>
    <div class="card card-body bg-light mb-3">
        <div class="row">

            <div class="col-2">
                <!-- 头像 -->
                <img style="width: 100px" class="rounded-circle" :src="profileItem.user.avatar" alt="" />
            </div>

            <div class="col-lg-6 col-md-4 col-sm-8">
                <!-- 名字 -->
                <h3 >{{profileItem.user.name}}</h3>
                <!-- 工作 -->
                <p class="text-muted">{{profileItem.status}}</p>
                <!-- 地址 -->
                <p class="text-muted" v-if="profileItem.location">{{profileItem.location}}</p>
                                <!-- :to="'/profile/'+profileItem.handle"  -->
                <router-link 
                    :to="'/profile/'+profileItem.handle" 
                    class="btn btn-info">more
                </router-link>
                <br>
                <!-- <LikeButton info="LikeButton" class="btn-light" @doIt="demo"></LikeButton> -->
                <!-- <span class="btn btn-info">more</span> -->
            </div>

            <!-- 设置skill选项 -->
            <div class="col-md-3 col-md-4 d-none d-lg-block">
                <h4>技能</h4>
                <ul class="list-group">
                    <li class="list-group-item" 
                        v-for="(skill, index) in profileItem.skills"
                        :key="index">
                        <!-- 图标 -->
                        <i class="fa fa-check pr-1"></i>
                        {{skill}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
// import LikeButton from '../common/LikeButton';
export default {
  name: "profileItem",
  props: {
    profileItem: Object
  },
  components:{
    // LikeButton
  },
  methods:{
    //   demo(){
    //       this.$router.push('/profile/'+this.profileItem.handle)
    //   }
  }
};
</script>


