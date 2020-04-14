import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/Home"
import BarStat from "../components/BarStat";
import Index from "../components/Index"
Vue.use(VueRouter)

let routes = [
    {
        path:"/Home",
        component:Home,
        children:[
            {
                path:":location",
                component:BarStat
            },
            {
                path:":location/:area/:areaindex",
                component:BarStat
            }

        ]
    },
    {
        path:"/",
        component: Index,

    }]

let router = new VueRouter({
    routes:routes
})

export default router