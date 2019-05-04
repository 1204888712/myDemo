import Vue from 'vue'
const NoticeConstructor = Vue.extend(require('./notice.vue').default) // 直接将Vue组件作为Vue.extend的参数
let nId = 1

const Notice = (content,showClose = true) => {
    let id = 'notice-' + nId++

    const NoticeInstance = new NoticeConstructor({
        data: {
            content: content,
            closed:showClose
        }
    }) // 实例化一个带有content内容的Notice
    NoticeInstance.id = id
    NoticeInstance.vm = NoticeInstance.$mount() // 挂载但是并未插入dom，是一个完整的Vue实例
    document.body.appendChild(NoticeInstance.vm.$el) // 将dom插入body
    NoticeInstance.vm.$el.style.zIndex = nId + 1001 // 后插入的Notice组件z-index加一，保证能盖在之前的上面
    return NoticeInstance.vm
}

export default {
    install: Vue => {
        Vue.prototype.$notice = Notice // 将Notice组件暴露出去，并挂载在Vue的prototype上
    }
}