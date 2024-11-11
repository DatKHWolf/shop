import HomePage from "@/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";
//import ShopPage from "@/pages/ShopPage.vue";
import TheShopLayout from "@/layouts/TheShopLayout.vue";

const router = createRouter({
  //optionen
  history: createWebHistory(),
  routes: [{ path: "/", component: HomePage }, {
    path:"/shop", component:TheShopLayout
  }],
  
});
export default router;