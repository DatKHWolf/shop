<template>
  <div>
    <TheShopLayout>
      <template #default>
        <Form @submit="submitPCData" :validation-schema="schema">
          <h2>Geräteschein (braucht das eine Anleitung? (DAU!))</h2>
          <div class="form-row">
            <div class="form-group col-md-8 offset-2">
              <label for="hersteller"
                ><strong>Hersteller (falls vorhanden)</strong></label
              >
              <Field
                as="input"
                name="hersteller"
                type="text"
                class="form-control"
                id="hersteller"
              ></Field>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8 offset-2">
              <label for="prozessor"><strong>Prozessor</strong></label>
              <Field
                as="input"
                name="prozessor"
                type="text"
                class="form-control"
                id="prozessor"
              ></Field>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8 offset-2">
              <label for="betriebssystem"
                ><strong
                  >Betriebssystem (eigentlich nur Ubuntu, aber es gibt ja Sonderfälle in der Theorie)</strong
                ></label
              >
              <Field
                as="input"
                name="betriebssystem"
                type="text"
                class="form-control"
                id="betriebssystem"
              ></Field>
            </div>
          </div>
          <div class="form-floating">
            <div class="form-group col-md-8 offset-2">
              <Field name="ramtype" as="select" id="ramtype">
                <option selected>Ramtyp wählen</option>
                <option value="DDR2">DDR2</option>
                <option value="DDR3">DDR3</option>
                <option value="DDR4">DDR4</option>
              </Field>
              <Field name="riegel" type="radio" value="1" id="riegel"/><strong> 1 Riegel </strong>
              <Field name="riegel" type="radio" value="2" id="riegel"/> <strong>2 Riegel </strong>
              <Field name="riegel" type="radio" value="4" id="riegel"/> <strong>4 Riegel </strong>
              <label for="ram"
                ><strong
                  > RAM </strong
                ></label
              >
              <Field as="input" name="ram" class="form-control" id="ram" placeholder="Größe der einzelnen Riegel, verschiedene Riegel verbaut man nicht!">

              </Field>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-8 offset-2">
              <label for="festplatte"
                ><strong
                  >Festplatte Größe in GB, Auswahl für SSD oder HDD anbieten?</strong
                ></label
              >
              <Field
                as="input"
                name="festplatte"
                type="text"
                class="form-control"
                id="festplatte"
              ></Field>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8 offset-2">
              <label for="benchmarkSinglecore"
                ><strong>Benchmark Single Core</strong></label
              >
              <Field
                as="input"
                name="benchmarkSinglecore"
                type="text"
                class="form-control"
                id="benchmarkSinglecore"
              ></Field>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8 offset-2">
              <label for="benchmarkMulticore"
                ><strong>BenchmarkMulticore</strong></label
              >
              <Field
                as="input"
                name="benchmarkMulticore"
                type="text"
                class="form-control"
                id="benchmarkMulticore"
              ></Field>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8 offset-2">
              <label for="bemerkungen"><strong>Bemerkungen </strong></label>
              <Field
                as="field"
                name="bemerkungen"
                type="text"
                class="form-control"
                id="bemerkungen"
              ></Field>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8 offset-2">
              <label for="benutzername"><strong>Benutzername</strong></label>
              <Field
                as="input"
                name="benutzername"
                type="text"
                class="form-control"
                id="benutzername"
                placeholder="user (muss man trotzdem noch eingeben)"
              ></Field>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8 offset-2">
              <label for="passwort"><strong>Passwort</strong></label>
              <Field
                as="input"
                name="passwort"
                type="text"
                placeholder="user (muss man trotzdem noch eingeben)"
                class="form-control"
                id="passwort"
              ></Field>
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
import * as yup from "yup";
export default {
  name: "PCGeraeteschein",
  components: {
    TheShopLayout,
    Form,
    Field,
  },
  methods: {
    submitPCData(values) {
      console.log(values);
    },
  },
  data() {
    const schema = yup.object().shape({
      hersteller: yup
        .string()
        .required("Email wird benötigt"),
      prozessor: yup
        .string()
        .required("Ein Prozessor wird benötigt"),
      betriebssystem: yup
        .string()
        .required("Ein Betriebssystem wird benötigt"),
      ramtype:yup
      .string() 
      .required("Du musst einen Typ von Arbeitsspeicher auswählen"),
      riegel:yup
      .string()
      .required("Wie viele Riegel sind im Rechner verbaut?"),
      ram:yup
      .number().integer()
      .required("Wie viel GB Arbeitsspeicher hat der verbaute Riegeltyp?"),
      festplatte:yup
      .number().integer()
      .required("Wie groß ist die Festplatte?"),
      benchmarkSinglecore:yup
      .number().integer()
      .required("Es wird ein Benchmarkscore benötigt"),
      benchmarkMulticore:yup
      .number().integer()
      .required("Es wird ein Benchmarkscore benötigt"),
      bemerkungen:yup
      .string()
      .optional(),
      benutzername:yup
      .string()
      .required("Es wird ein Benutzername benötigt."),
      passwort:yup
      .string()
      .required("Es wird ein Passwort benötigt."),




    });
    return {
      schema,
      pcDataOB: {
        hersteller: "",
        prozessor: "",
        betriebssystem: "",
        riegel:"",
        ramtype:"DDR3",
        ram: "",
        festplatte: "",
        //Endkontrolle + Sichtkontrolle durch Yup
        benchmarkSinglecore: "",
        benchmarkMulticore: "",
        bemerkungen: "",
        benutzername: "user",
        passwort: "user",
      },
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
button {
  background-color: #04aa6d; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
