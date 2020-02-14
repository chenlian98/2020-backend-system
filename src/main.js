import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//element-ui组件
import "./components/element-components";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
