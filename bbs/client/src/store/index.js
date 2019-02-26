import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';


Vue.use(Vuex);


const state = {
    isAutnenticated: false,  // 是否认证
    user: {},   // 存储用户登录信息
    profile: {}, // 存储用户个人信息
    loading: false,//判断是否正在请求，默认不是
    profiles: [] // 存储开发者信息
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
