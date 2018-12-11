<template>
    <div class="nav">
        <router-link class="nav-item" to="/goods">
            点餐
            <i class="line"></i>
        </router-link>
        <router-link class="nav-item" to="/ratings">
            评价
            <span v-if="commentNum">({{commentNum}})</span>
            <i class="line"></i>
        </router-link>
        <router-link class="nav-item" to="/seller">
            商家
            <i class="line"></i>
        </router-link>
    </div>
</template>

<script>
    export default {
        props:{
            commentNum:{
                type:Number,
                default:0
            }
        }
            ,
        components: {

        }
    }
</script>

<style scoped>
    .nav {
        
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #e4e4e4;
    }

    .nav-item {
        position: relative;
        flex: 1;
        text-align: center;
        font-size: 13px;
        text-decoration: none;
        color: #666;
    }

    .nav .active {
        color: #ffbb22;
    }
    .nav .active .line{
        position: absolute; 
        bottom: 0px;
        left: 50%;
        transform: translate(-50%);
        display: inline-block;
        height: 2px;
        width: 2em;
        background-color:#fb2;
    }
</style>