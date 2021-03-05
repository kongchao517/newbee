import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import cart from "../views/cart.vue";
import mine from "../views/mine.vue";
import classfy from "../views/classfy.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }, {
    path: "/cart",
    name: "cart",
    component: cart
  }, {
    path: "/mine",
    name: "mine",
    component: mine
  }, {
    path: "/classfy",
    name: "classfy",
    component: classfy
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
