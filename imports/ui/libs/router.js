import {createRouter, createWebHistory} from "vue-router";
import StoreSide from '../pages/StoreSide.vue';
import CostumerSide from '../pages/CostumerSide.vue';

export const router = createRouter({
  routes: [
    {
      path: "/",
      name: "CostumerSide",
      component: CostumerSide,
    },
    {
      path: "/store",
      name: "StoreSide",
      component: StoreSide,
    },
  ],
  history: createWebHistory(),
});
