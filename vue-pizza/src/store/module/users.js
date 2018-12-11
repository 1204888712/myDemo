const state ={
    currentUser: null,
}
const getters = {
    currentUser: state => state.currentUser,
}
const mutations = {
    userStatus(state, payload) {
        if (payload) {
            state.currentUser = payload
            state.isLogin = true
        } else {
            state.currentUser = null
            state.isLogin = false
        }

    }
}
const actions = {
    setUser : (context, user)=>{
        context.commit("userStatus", user)
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}