import vue from "vue"
import Router from "vue-router"

vue.use(Router)

const router = new Router({
    mode:"history",
    linkActiveClass:"active",
    routes:[
        {
              path: '/',
              name: 'home',
              beforeEnter(to,from,next){
                  console.log("a")
                  next()
              },
              beforeLeave(to,from,next){
                console.log("b")
                // next()
            },
              component: ()=>import("./components/HelloWorld")
            },
            {
                path:'/xxx',
                name:'xxx',
                component:()=>import("./components/xx")
            }
    ]
})
export default router