import Vue from 'vue'
import Router from 'vue-router'
import Msite from "../views/Msite/Msite";
import Order from "../views/Order/Order";
import Search from "../views/Search/Search";
import Profile from "../views/Profile/Profile";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/msite',
      component:Msite
    },
  ]
})
