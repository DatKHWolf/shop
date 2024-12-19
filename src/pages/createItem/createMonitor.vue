<template>
  <div>
    <TheShopLayout>
      <h1>Welche Anschlüsse hat der Monitor?</h1>
      <Form @submit="submitMonitor">
        <Field name="auswahl" as="checkbox" type="checkbox"  multiple>

            <!-- hier bitte mit V-For arbeiten -->
          <p>
            <label>
              <input type="checkbox" name="HDMI" value="HDMI" v-model="value[0].checked" /> : HDMI</label
            >
          </p>
          <p>
            <label> <input type="checkbox" name="DVI" value="DVI"  v-model="value[1].checked"/> : DVI</label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="DP" value="Display Port" v-model="value[2].checked" /> : Display
              Port</label>
          </p>
          <p>
            <label> <input type="checkbox" name="VGA" value="VGA" v-model="value[3].checked"/> : VGA</label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="USBC" value="USB-C" v-model="value[4].checked" /> : USB-C</label
            >
          </p>
        </Field>

        <h2>Wie groß ist der Monitor?</h2>
        <p> <Field as="input" name="size" type="text" v-model="size">
            in Zoll
        </Field></p>
        <p>
          <span> Ausgewählt : {{ value[0].checked }} + {{ value[1].checked }}+{{ value[2].checked }} +{{ value[3].checked }} +{{ value[4].checked }} + +{{ size }} Zoll</span>
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
      //  Fehler bei Objekt in Array
      value: [{type:"HDMI",amount:0, checked:false},{ type:"Display Port",amount:0, checked:false},{ type:"VGA",amount:0, checked:false},{ type:"DVI",amount:0, checked:false},{ type:"USB-C",amount:0, checked:false}], 
      values: [],
      size: "",
    };
  },
  methods: {
    //Erstellt zu viele Werte, werden die wirklich benötigt? Nochmal drüber nachdenken bitte. Sollte auch eigentlich eine User-ID haben, daher aus dem Store die entsprechende ID holen
    submitMonitor() {
      var monitorOB=[];
      // mathrandom ist keine gute ID, da kann man auch die von der Datenbank vergebene nutzen. Ist also erstmal eher ein Platzhalter und sollte sowieso mit der NutzerID kombiniert. Wird im Store hinzugefügt, soll nur daran erinnern dass das getan werden muss
      var id = Math.random();
      console.log(this.values + ", " + this.size);
      console.log(this.value);
      monitorOB.push({"id":id});
      monitorOB.push({"size":this.size});
      for (let x in this.value){
        if(this.value[x].checked){
          var menge = 1; // für die Menge muss noch was geändert werden im Formular, gibt ja auch Monitore mit mehr Anschlüssen
          var anschluss = this.value[x].type;
          monitorOB.push({anschluss, menge})
        }
        console.log(monitorOB)
      }
    },
  },
  components: { TheShopLayout, Form, Field },
  computed:{
    monitor(){

          console.log(this.values)
//das ist mal totaler quatsch hier
       
      
      return this.values;
     
    }
  }}
  
 /**       this.value[x].checked
          console.log("if check worked")
          console.log("hier fehlt noch die Logik bzw die fehlt eigentlich weiter oben im v-model")
          this.values.push(this.value[x].type)
    }*/ 
  

</script>

<style scoped></style>
