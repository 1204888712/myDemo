<template>
    <div class="notice">
        <transition name="slide-fade">
            <div class="content" v-if=show_me>
                {{ content }}
                <div class="close" v-if="closed" @click="show_me = false;close()"></div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'notice',
        data() {
            return {
                // visible: false,
                content: '',
                duration: 3000,
                show_me: true,
                closed: true
            }
        },
        methods: {
            setTimer() {
                setTimeout(() => {
                    this.show_me = false;
                    this.close() // 3000ms之后调用关闭方法
                }, this.duration)
            },
            close() {
                // this.visible = false
                setTimeout(() => {
                    this.$destroy(true)
                    // this.$el.parentNode.removeChild(this.$el) // 从DOM里将这个组件移除
                }, 800)
            }
        },
        mounted() {
            this.setTimer() // 挂载的时候就开始计时，3000ms后消失
        }
    }
</script>
<style scoped>
    /* .notice {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;

    } */

    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #edf2fc;
        background: #edf2fc;
        padding: 10px 10px 10px 15px;
        box-sizing: border-box;
        border-radius: 5px;
    }

    .close {
        display: inline-block;
        width: 14px;
        height: 1px;
        background: #909399;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        vertical-align: middle;
        cursor: pointer;
    }

    .close::after {
        content: '';
        display: block;
        width: 14px;
        height: 1px;
        background: #909399;
        transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg);
    }

    .close:hover {
        background-color: #409EFF;
    }

    .close:hover::after {
        background-color: #409EFF;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter,
    .slide-fade-leave-to {
        transform: translate(-50%, calc(-50% - 20px));
        opacity: 0;
    }
</style>