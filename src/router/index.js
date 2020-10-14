import Vue from 'vue'
import VueRouter from 'vue-router'

//页面懒加载
const Home = () => import("@views/home/home");
const Category = () => import("@views/category/category");        
const Detail = () => import("@views/detail/detail");        
const Cart = () => import("@views/cart/cart");        

// 1.安装插件
Vue.use(VueRouter);

// 2.创建router
const routes = [
    {
        path:'/',
        redirect: '/home'
    },
    {
        path:'/home',
        component: Home
    },{
        path:'/category',
        component: Category
    },{
        path:'/detail',
        component: Detail
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