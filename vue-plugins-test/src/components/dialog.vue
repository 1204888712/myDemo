<template>
    <div class="dialog"  v-if="visible">
            <div class="dialog_mian">
                <div class="dialog__header">
                    <div class="dialog__title">
                        {{ title }}
                        <div class="close_wra" v-if="closed" @click = "close">
                            <div class="close"></div>
                        </div>
                    </div>
                </div>
                <div class="dialog__body">
                    <slot>这是存在的会话</slot>
                </div>
                <div class="dialog__footer">
                    <slot name="footer"></slot>
                </div>
        </div>
        <div class="modal" v-show="modal" @click="closeModal"></div>
    </div>
</template>

<script>
    export default {
        name: 'mydialog',
        props: {
            title: String,
            visible: {
                type: Boolean,
                default: false
            },
            closed:{
                type:Boolean,
                default: true
            },
            modal:{
                type:Boolean,
                default: true
            }
        },
        methods: {
            close() {
                this.$emit('update:visible', false) // 传递关闭事件
            },
            closeModal(e) {
                if (this.visible) {
                    document.querySelector('.dialog_mian').contains(e.target) ?'' : this.close(); // 判断点击的落点在不在dialog对话框内，如果在对话框外就调用this.close()方法关闭对话框
                }
            }
        }
        
    }
</script>
<style scoped>
    .dialog {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        /* background: yellow; */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* .dialog .dialog__wrapper  {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        
    } */
    .modal{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top:0;
        left: 0;
        z-index: 1;
    }
    .dialog  .dialog_mian {
        width: 35%;
        /* height: 30%; */
        background-color: white;
        border-radius: 2px;
        z-index: 2;
    }

    .dialog_mian .dialog__header {
        position: relative;
        padding: 20px 20px 10px;
        font-size: 20px;
        /* border-bottom: 1px solid black; */
    }

    .dialog__header .close_wra {
        height: 14px;
        width: 14px;
        position: absolute;
        top: calc(50% + 5px);
        right: 5%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .close {
        display: block;
        width: 14px;
        height: 1px;
        background: #909399;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
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

    .dialog_mian .dialog__body {
        padding: 30px 20px;
        word-break: break-all;
    }

    .dialog_mian .dialog__footer {
        /* border: 1px solid; */
        padding: 10px 20px 20px;
        text-align: right;
        box-sizing: border-box;
    }
</style>