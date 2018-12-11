export default{
    setMenu(state, payload) {
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