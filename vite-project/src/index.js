import { createRouter,createWebHashHistory } from "vue-router"
import HelloWorld from './components/HelloWorld.vue'
import Main1 from './components/main1.vue'

//配置页面的相关信息
const routes = [
    {
        //首页
        path:"/",
        component:HelloWorld
    },
    {
        path:"/about",
        component:Main1
    }
]

const router = createRouter({

    
    history:createWebHashHistory(),
    routes
})

export default router; 