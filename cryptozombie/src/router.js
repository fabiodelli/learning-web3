import { createRouter, createWebHistory } from "vue-router";
import home from "./views/Home.vue";
import army from "./views/Army.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/army",
      name: "army",
      component:army
    }
  ],
});

export { router };