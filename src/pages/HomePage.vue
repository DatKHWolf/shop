<template>
  <TheTwoColumnsLayout
    :leftColumnClass="'col-md-8 bg-vue'"
    :rightColumnClass="'col-md-4'"
    :fullsize="true"
  >
  <template #leftCol>
    <div class="mt-5">
        <div class="display-1 my-5">Der Shop</div>
        <div class="display-4 my-5">
            Erhalten Sie Zugriff auf exklusive Artikel
        </div>
        <div class="my-5 offset-4 col-2">
            <img src="@/assets/shopping.svg" class="img-fuid">
        </div>
    </div>
  </template>
  <template #rightCol>
    <RegisterComponent />
  </template>
  </TheTwoColumnsLayout>
</template>

<script>
import TheTwoColumnsLayout from "@/layouts/TheTwoColumnsLayout";
import RegisterComponent from "@/components/auth/RegisterComponent.vue";
export default {
  name: "HomePage",
  components: {
    TheTwoColumnsLayout,
    RegisterComponent,
  },
};
</script>

<style scoped></style>
