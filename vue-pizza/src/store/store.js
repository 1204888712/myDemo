import Vue from 'vue'
import Vuex from 'vuex'

// import getters from './getters'
// import mutations from './mutations'
// import * as actions from './actions'

import menu from './module/menu'
import status from './module/status'
import users from './module/users'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        menu,
        status,
        users
    }


    // state: {
    //     Menu: {},
    //     currentUser: null,
    //     isLogin: false
    // },
    // getters,
    // actions,
    // mutations
})

export default store