import { createRouter, createWebHistory } from "vue-router";
import { createApp } from 'vue';
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
      path: "/Store",
      name: "StoreSide",
      component: StoreSide,
    },
  ],
  history: createWebHistory(),
});
export default router
