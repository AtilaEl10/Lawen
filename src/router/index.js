import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/especies",
    name: "Especies",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Especies.vue"),
  },
  {
    path: "/especies/:id",
    name: "Abejas",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Abejas.vue"),
  },
  {
    path: "/registro",
    name: "Registro",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Registro.vue"),
  },
  {
    path: "/ayuda",
    name: "Ayuda",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Ayuda.vue"),
  },
  {
    path: "*",
    name: "Error",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Error.vue"),
  },
  //Temporal vista de las abejas
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
