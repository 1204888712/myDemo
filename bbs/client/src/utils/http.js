import axios from 'axios';
import store from '../store';
// 展示动画时间可以设置为请求到响应之间
// 设置请求拦截，每个请求都统一请求header
axios.interceptors.request.use(config => {
    store.dispatch('setLoading', true);
    if (localStorage.jwtToken) {
        config.headers.Authorization = localStorage.jwtToken;
    }
    return config;
},
error=>{
    return Promise.reject(error)
})

// 设置响应拦截
axios.interceptors.response.use(response => {
    store.dispatch('setLoading', false);

    return response;
},
    error => {//请求错误的情况下
        store.dispatch('setLoading', false);
        return Promise.reject(error)
    }
)


export default axios;
