import HomePage from "@/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";
import ShopPage from "@/pages/ShopPage.vue";
//import TheShopLayout from "@/layouts/TheShopLayout.vue";
import store from "@/store";
import CreateProductPage from "@/pages/CreateProductPage.vue";
import PCGeraeteschein from "@/pages/PCGeraeteschein.vue";

const router = createRouter({
  //optionen
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage, beforeEnter:(to, from, next)=>{
      if(store.getters.isAuthenticated){
        next("/shop");
      }else{
        next();
      }
     } },
    {
      path: "/shop",
      component: ShopPage,
      meta:{
        requiresAuth:true,
      }
    },
    {
      path:"/shop/item/create",
       component: CreateProductPage,
       meta:{
        requiresAuth:true,
      }
    },
    {
      path:"/pc",
      component:PCGeraeteschein   
    }
    
  ],
});
router.beforeEach((to, from, next) =>{
  if(to.meta.requiresAuth && !store.getters.isAuthenticated){
    next("/");
  }else{
    next();
  }
});

export default router;
