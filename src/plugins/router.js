import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/home",
    name: "home",
    component: function () {
      return import("../views/Home/Home.vue");
    },
   
  },
  {
    path: "/navbar-v1",
    name: "navbar-v1",
    component: function () {
      return import("../views/Navbar_v1/NavbarVersion.vue");
    },
   
  },
  {
    path: "/navbar-v2",
    name: "navbar-v2",
    component: function () {
      return import("../views/Navbar_v2/Navbar_Multiple.vue");
    },
   
  },
  {
    path: "/layout-v1",
    name: "layout-v1",
    component: function () {
      return import("../views/Layout_v1/Laout_v1.vue");
    },
    children:[
      {
        path: "/transition",
        name: "transition",
        component: function () {
          return import("../views/Transition/Transition.vue");
        },
       
      },
    ]
   
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;