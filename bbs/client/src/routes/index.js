import Vue from "vue";
import Router from "vue-router";
import Landing from "../components/Landing";
import Login from "../components/Login";
import Register from "../components/Register";
import Dashboard from '../components/Dashboard';
import CreateProfile from '../components/CreateProfile';
import EditProfile from '../components/EditProfile';
import AddExperience from '../components/AddExperience';
import AddEducation from '../components/AddEducation';
import Profiles from '../components/Profiles'
import Profile from '../components/Profile/Profile';
import Posts from '../components/Posts/Posts';
import Post from '../components/Posts/Post';

Vue.use(Router);
const route = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        { path: '*', redirect: '/' },
        { path: '/', name: 'landing', component: Landing },
        { path: '/login', name: 'login', component: Login },
        { path: '/register', name: 'register', component: Register },
        { path: '/dashboard', name: 'dashboard', component: Dashboard },
        { path: '/create-profile', name: 'create-profile', component: CreateProfile },
        { path: '/edit-profile', name: 'edit-profile', component: EditProfile },
        { path: '/add-experience', name: 'add-experience', component: AddExperience },
        { path: '/add-education', name: 'add-education', component: AddEducation },
        { path: '/profiles', name: 'profiles', component: Profiles },
        { path: '/profile/:handle', name: 'profile', component: Profile },
        {path:'/posts',name:'posts',component:Posts},
        {path:'/post/:id',name:'post',component:Post}
    ]
});

route.beforeEach((to, from, next) => {
    // 获取token
    const isLogin = localStorage.jwtToken ? true : false;
    if (to.path === "/login" || to.path === "/register" || to.path === "/") {
        next();
    } else {
        isLogin ? next() : next("/login");
    }
})

export default route