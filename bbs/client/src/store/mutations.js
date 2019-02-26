export default {
    setIsAutnenticated:(state, data) => {
        // console.log(data)
        state.isAutnenticated = data
    },
    setUser:(state, data) => {
        // console.log(data)
        state.user = data
    },
    setProfile:(state, data) => {
        state.profile = data
    },
    setProfiles:(state, data) => {
        state.profiles = data
    },
    setLoading:(state, data) => {
        state.loading = data
    }
}