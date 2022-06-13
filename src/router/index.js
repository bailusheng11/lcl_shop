import Vue from "vue";
import VueRouter from "vue-router";

const home = () => import("../view/index/home.vue");
const goodsDetail = () => import("../view/index/detail/goodsDetail.vue")

const category = () => import("../view/category/category.vue");
const cart = () => import("../view/shopcart/shopcart.vue");

const mine = () => import("../view/mine/mine.vue");
const register = () => import("../view/mine/user/register");
const login = () => import("../view/mine/user/login");
const userInfo = () => import("../view/mine/user/userInfo.vue");
const updatePwd = () => import("../view/mine/user/updatePwd.vue");
const collect = ()=> import ("../view/mine/user/collect.vue")

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: home,
  },
  {
    path: "/mine",
    component: mine,
  },
  {
    path: "/category",
    component: category,
  },
  {
    path: "/cart",
    component: cart,
  },
  {
    path: "/register",
    component: register,
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/userinfo",
    component: userInfo,
  },
  {
    path: "/update",
    component: updatePwd,
  },
  {
    path:"/goods/:id",
    component: goodsDetail
  },
  {
    path:"/collect",
    component: collect,
    name:'/collect'
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
