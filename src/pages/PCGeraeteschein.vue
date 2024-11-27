<template>
  <div>
    <TheShopLayout>
      <template #default>
        <Form @submit="submitPCData">
          <h2>Geräteschein</h2>
          <div class="form-row">
            <div class="form-group col-md-8 offset-2">
              <label for="hersteller"><strong>Hersteller (falls vorhanden)</strong></label>
              <Field as="input" name="hersteller" type="text" class="form-control" id="hersteller"></Field>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8 offset-2">
              <label for="prozessor"><strong>Prozessor</strong></label>
              <Field as="input" name="prozessor" type="text" class="form-control" id="prozessor"></Field>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8 offset-2">
              <label for="betriebssystem"><strong>Betriebssystem (könnte mit select sein, wir erlauben ja nur ein paar)</strong></label>
              <Field as="input" name="betriebssystem" type="text" class="form-control" id="betriebssystem"></Field>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8 offset-2">
              <label for="ram"><strong>RAM fehlt noch die Auswahl von Anzahl Riegel und Größe</strong></label>
              <Field as="input" name="ram" type="text" class="form-control" id="ram"></Field>
            </div>
          </div>


          <div class="form-row">
            <div class="form-group col-md-8 offset-2">
              <label for="festplatte"><strong>Festplatte sollte mit Angabe über HD oder SSD sein</strong></label>
              <Field as="input" name="festplatte" type="text" class="form-control" id="festplatte"></Field>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8 offset-2">
              <label for="benchmarkSinglecore"><strong>Benchmark Single Core</strong></label>
              <Field as="input" name="benchmarkSinglecore" type="text" class="form-control" id="benchmarkSinglecore"></Field>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8 offset-2">
              <label for="benchmarkMulticore"><strong>BenchmarkMulticore</strong></label>
              <Field as="input" name="benchmarkMulticore" type="text" class="form-control" id="benchmarkMulticore"></Field>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8 offset-2">
              <label for="bemerkungen"><strong>Bemerkungen </strong></label>
              <Field as="input" name="bemerkungen" type="text" class="form-control" id="bemerkungen"></Field>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8 offset-2">
              <label for="benutzername"><strong>Benutzername</strong></label>
              <Field as="input" name="benutzername" type="text" class="form-control" id="benutzername" placeholder="user" disabled></Field>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8 offset-2">
              <label for="passwort"><strong>Passwort</strong></label>
              <Field as="input" name="passwort" type="text" placeholder="user" class="form-control" id="passwort" disabled></Field>
            </div>
          </div>
          <button class="btn bg-vue">
              <span>Speichern</span>
            </button>
        </Form>
      </template>
    </TheShopLayout>
  </div>
</template>

<script>
import TheShopLayout from "@/layouts/TheShopLayout.vue";
import { Form, Field } from "vee-validate";
//import * as yup from "yup";
export default {
  name: "PCGeraeteschein",
  components: {
    TheShopLayout,
    Form,
    Field,
  },
  methods:{
      submitPCData(values){
        console.log(values)
      }
    },
  data(){
    return {
        hersteller : "",
        prozessor : "",
        betriebssystem:"",
        ram:"",
        festplatte:"",
        //Endkontrolle + Sichtkontrolle durch Yup
        benchmarkSinglecore:"",
        benchmarkMulticore:"",
        bemerkungen:"",
        benutzername:"user",
        passwort:"user",
    }


  }
};
</script>

<style scoped>
h2{
  text-align: center;
}
button{
  background-color: #04AA6D; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
