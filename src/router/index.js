import HomePage from "@/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";
import ShopPage from "@/pages/ShopPage.vue";
//import TheShopLayout from "@/layouts/TheShopLayout.vue";
import store from "@/store";
import CreateProductPage from "@/pages/CreateProductPage.vue";
import createItem from "@/pages/createItem/createItem.vue";
import CreateMonitor from "@/pages/createItem/createMonitor.vue";
import CreateLaptop from "@/pages/createItem/createLaptop.vue";
import CreateDrucker from "@/pages/createItem/createDrucker.vue";
import CreatePc from "@/pages/createItem/createPc.vue";

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
       createItem,
       meta:{
        requiresAuth:true,
      }
    },
    {
      path:"/pc",
      component:createItem   
    },
    {
      path:"/pc/pc",
      component:CreatePc
    },
    {
      path:"/pc/monitor",
      component:CreateMonitor
    },
    {
      path:"/pc/laptop",
      component:CreateLaptop
    },
    {
      path:"/pc/drucker",
      component:CreateDrucker
    },
    
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
