export default {
    setIsAutnenticated:({commit}, data) => {
        commit('setProfile', 1)
        commit('setIsAutnenticated', data)
    },
    setUser:({commit}, data) => {
        commit('setUser', data)
    },
    setProfile:({commit}, data) => {
        commit('setProfile', data)
    },
    setProfiles:({commit}, data) => {
        commit('setProfiles', data)
    },
    setLoading:({commit}, data) => {
        commit('setLoading', data)
    },
    clearCurrentState:({ commit }) => {
        commit('setProfile', null)
        commit('setUser', null)
        commit('setIsAutnenticated', false)
    }
}