import customer from "./components/Customer"
import about from "./components/about/About"
import add from "./components/Add"
import customerdetail from "./components/customerDetail"
import edit from "./components/Edit"
export const routes = [
    { path: "/", component: customer },
    { path: "/about", component: about },
    {path:"/add",component:add},
    // 注意这里的id
    {path:'/customer/:id',component:customerdetail},
    {path:'/edit/:id',component:edit}
]