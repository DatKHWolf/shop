<template>
  <div>
    <TheShopLayout>
      <h1>Welche Anschlüsse hat der Monitor?</h1>
      <Form @submit="submitMonitor">
        <Field name="auswahl" as="checkbox" type="checkbox"  multiple>

            <!-- hier bitte mit V-For arbeiten -->
          <p>
            <label>
              <input type="checkbox" name="HDMI" value="HDMI" v-model="values" /> : HDMI</label
            >
          </p>
          <p>
            <label> <input type="checkbox" name="DVI" value="DVI"  v-model="values"/> : DVI</label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="DP" value="Display Port" v-model="values" /> : Display
              Port</label>
          </p>
          <p>
            <label> <input type="checkbox" name="VGA" value="VGA" v-model="values"/> : VGA</label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="USBC" value="USB-C" v-model="values" /> : USB-C</label
            >
          </p>
        </Field>

        <h2>Wie groß ist der Monitor?</h2>
        <p> <Field as="input" name="size" type="text" v-model="size">
            in Zoll
        </Field></p>
        <p>
          <span> Ausgewählt : {{ values }} + {{ size }} Zoll</span>
        </p>
        <br />

        <button class="btn bg-vue">
          <span>Erstellen</span>
        </button>
      </Form>
    </TheShopLayout>
  </div>
</template>

<script>
import TheShopLayout from "@/layouts/TheShopLayout.vue";
import { Form, Field } from "vee-validate";


export default {
  name: "CreateMonitor",

  data() {
    return {
     // values: ["HDMI", "Display Port","VGA", "DVI", "USB-C"], zum abgucken was so rauskommen kann, wird nicht gebraucht
      values:[],
      size:""

    };
  },
  methods:{
    submitMonitor(){
      console.log(this.values+", "+this.size)
    }
 
    
  },
  components:{ TheShopLayout,
  Form,
  Field,
}
};
</script>

<style scoped></style>
