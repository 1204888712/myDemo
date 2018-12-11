export default  {
    //防止将数据暴露
    getMenu: state => state.Menu,
    currentUser: state => state.currentUser,
    isLogin: state => state.isLogin
}