import addBlog from './components/AddBlog'
import showBlog from './components/ShowBlog'
import singleBlog from './components/SingleBlog'
import edit from './components/Edit'

export const routes = [
    {path:'/',component:addBlog},
    {path:'/showBlog',component:showBlog},
    {path:'/blog/:id',component:singleBlog},
    {
        path:'/edit/:id',component:edit
    }
]

