import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
// 1：引入自定义组件
import TestContainer from "./components/testContainer.vue";
import listContainer from "./components/listContainer.vue";
import HomeContainer from "./components/tabbar/HomeContainer.vue";
import newsListContainer from "./components/news/newsListContainer.vue";
import newinfoContainer from "./components/news/newInfoContainer.vue";
import shopContainer from "./components/tabbar/ShopContainer.vue";
import goodsList from "./components/goods/GoodsList.vue";
import goodsInfo from "./components/goods/GoodsInfo.vue";
import photoContainer from "./components/photo/PhotoContainer.vue";
import loginContainer from "./components/homg/LoginContainer.vue";
import splist from "./components/dateils/splist.vue";
import fylist from "./components/dateils/fylist.vue";
import classify from "./components/list/classify.vue";
import category_list from "./components/list/category_list.vue";
import not_found from "./components/404/not_found.vue";
import registe from "./components/login/registe.vue"
Vue.use(Router)


//2：配置访问自定义组件路径
//{path 访问路径 component  组件名称}
export default new Router({
  routes: [
    {path:'/',redirect:"/home"},   //重定向
    {path:"/test",component:TestContainer},
    {path:"/list",component:listContainer},
    {path:"/home",component:HomeContainer},
    {path:"/home/newslist",component:newsListContainer},
    {path:"/home/newinfo",component:newinfoContainer},
    {path:"/shop",component:shopContainer},
    {path:"/home/goodsList",component:goodsList},
    {path:"/home/goodsInfo/:id",component:goodsInfo},
    {path:"/home/photo",component:photoContainer},
    {path:"/home/login",component:loginContainer},
    {path:"/home/splist",component:splist},
    {path:"/home/fylist",component:fylist},
    {path:"/classify",component:classify},
    {path:"/category_list",component:category_list},
    {path:"/not_found",component:not_found},
    {path:"/home/registe",component:registe}
  ]
})
