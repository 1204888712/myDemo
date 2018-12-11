const state ={
    Menu: {},
}
const getters = {
    getMenu: state => state.Menu,
    // getMenu(state){
    //     return state.Menu
    // }
}
const mutations = {
    setMenu(state, payload) {
        // console.log(payload)
        state.Menu = payload
    },
    removeMenu(state, payload) {
        state.Menu.forEach((item, index) => {
            if (item == payload) {
                state.Menu.splice(index, 1)
                // return
            }
        })
    },
    addMenu(state, payload) {
        state.Menu.push(payload)
    },
}
const actions = {

}
export default {
    state,
    getters,
    mutations,
    actions

}