<template>
  <div>
    <TheShopLayout>
      <h1>Was willst du erstellen?</h1>
      <Form @submit="submitChoice(auswahl)">
        <Field name="auswahl" as="select" v-model="value">
          <option selected>Wähle was du erstellen willst:</option>
          <option value="PC">einen PC</option>
          <option value="Laptop">einen Laptop</option>
          <option value="Drucker">einen Drucker</option>
          <option value="Monitor">einen Monitor</option>
        </Field>
        <p>
          <span> Ausgewählt : {{ value }}</span>
        </p>
        <br />
        <button class="btn bg-vue">
          <span>Weiter</span>
        </button>
      </Form>
    </TheShopLayout>
  </div>
</template>

<script>
import TheShopLayout from "@/layouts/TheShopLayout.vue";
import { Form, Field } from "vee-validate";

export default {
  name: "createItem",
  data() {
    return {
      value: "",
    };
  },

  components: {
    TheShopLayout,
    Form,
    Field,
  },

  methods: {

    submitChoice() {
      switch (this.value) {
        case "PC":
        this.$router.push({path:"/pc/pc"})
          console.log(this.value);
          break;
        case "Laptop":
        this.$router.push({path:"/pc/laptop"})
          console.log(this.value);
          break;
        case "Monitor":
          this.$router.push({path:"/pc/monitor"})
          console.log(this.value);
          break;
        case "Drucker":
        this.$router.push({path:"/pc/drucker"})
          console.log(this.value);
          break;
        default:
          console.log("Da ist was schief gelaufen");
      }
    },
  },
};
</script>

<style scoped></style>
