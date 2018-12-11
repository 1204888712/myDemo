// import Header from './components/Header'
//一级
import Home from './components/Home'
import Menu from './components/Menu'
import Login from './components/Login'
import Register from './components/Register'
import Admin from './components/Admin'
import About from './components/about/About'
import NewPizza from './components/NewPizza'

//二级
import Contact from './components/about/Contact'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'
import Delivery from './components/about/Delivery'

//三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

const routes = [
    {
        path: '/', name: 'homeLink', components: {
            // 路由复用，在一个页面展示多个路由，需要配置name
            default: Home,
            'orderingGuide': OrderingGuide,
            'delivery': Delivery,
            'history': History,
        }
    },
    { path: '/login', name: 'loginLink', component: Login },
    { path: '/menu', name: 'menuLink', component: Menu },
    {
        path: '/admin', name: 'adminLink', component: Admin
    },
    { path: '/register', name: 'registerLink', component: Register },
    {
        path: '/about', name: 'aboutLink', redirect: '/about/contact', component: About, children: [
            {
                path: '/about/contact', name: 'contactLink', redirect: '/phone', component: Contact, children: [
                    { path: '/phone', name: 'phoneLink', component: Phone },
                    { path: '/personName', name: 'personNameLink', component: PersonName },
                ]
            },
            { path: '/about/history', name: 'historyLink', component: History },
            { path: '/about/orderingGuide', name: 'orderingGuideLink', component: OrderingGuide },
            { path: '/about/delivery', name: 'deliveryLink', component: Delivery },
        ]

    },
    { path: '*', redirect: '/' },
    
]

export default routes
