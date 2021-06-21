import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//Firebase
import firebase from "firebase"
import { firebaseConfig } from "../firebase"
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

router.beforeEach((to, from, next) => {
  const isAuthenticated= localStorage.getItem("login")

  console.log(isAuthenticated);
  if(to.name == "Registro" && to.name !== "Home" && isAuthenticated !== "logueado") next({ name: "Home" });
  next();
});

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
 

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
