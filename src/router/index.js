import Vue from 'vue'
import VueRouter from 'vue-router'

//页面懒加载
const Home = () => import("@views/home/index");
const Category = () => import("@views/category/category");             
const Cart = () => import("@views/cart/cart");        
const User = () => import("@views/user/index");      

//二级导航
const TVshow = () => import("@views/tvshow/index");
const Otuan = () => import("@views/otuan/index");
const Global = () => import("@views/global/index");
const Mall = () => import("@views/mall/index");
const Company = () => import("@views/company/index");

// 1.安装插件
Vue.use(VueRouter);

// 2.创建router
const routes = [
    {
        path:'/home',
        component: Home,
    },
    {
        path:'/',
        redirect: '/home'
    },
    {
        path:'/user',
        component: User
    }
    ,{
        path:'/category',
        component: Category
    },{
        path:'/cart',
        component: Cart
    }
];

const router = new VueRouter ({
    routes,
    mode: 'history',
});

// 3.导出实例
export default router