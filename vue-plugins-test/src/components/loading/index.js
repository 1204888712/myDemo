import Vue from 'vue'
const LoadingConstructor = Vue.extend(require('./loading.vue').default)

const Loading = function (timing = 2000) {
    // options = options || { timing: 2000 }
    let options = {
        timing: timing
    }
    let instance = new LoadingConstructor({
        data: options
    })
    instance.vm = instance.$mount();
    let isNode = document.querySelector('.loading');
    if (!isNode) {
        document.body.appendChild(instance.vm.$el);
    } else {
        document.body.removeChild(isNode);
    }
    return instance.vm
}
export default {
    install: Vue => {
        Vue.prototype.$myloading = Loading
    }
}
