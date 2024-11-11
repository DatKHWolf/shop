<template>
  <TheShopLayout>
    <template #default>
      <h2 >Hallo</h2>
    </template>
  </TheShopLayout>
</template>

<script>
import TheShopLayout from "@/layouts/TheShopLayout.vue";
export default {
  name: "ShopPage",
  component: { TheShopLayout },
};
</script>

<style scoped>
h2{text-align: center;
    text-decoration: underline dotted;
text-decoration-color: blue;
margin-top: 20px;
color:rgb(214, 40, 121)}
</style>