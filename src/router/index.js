import Vue from "vue";
import VueRouter from "vue-router";
import HomeIndex from "../views/Home/homeIndex.vue";
import ContactIndex from "../views/Contact/contactIndex.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeIndex,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactIndex,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
