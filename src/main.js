import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper";
import { Message, Loading, Input } from "element-ui";
import "swiper/css/swiper.css";
import "@/font/index.scss";

Vue.use(VueAwesomeSwiper);
Vue.use(Loading);
Vue.use(Loading.directive);
Vue.use(Input);

Vue.prototype.$message = Message;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
