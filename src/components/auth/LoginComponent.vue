<template>
  <div>
    <div class="my-5 text-center offset-2 col-8">
      <img src="@/assets/lock.svg" class="img-fluid" />
    </div>
    <div class="text-center">
      <h2>Jetzt einloggen</h2>
      <p>
        oder
        <a
          class="text-vue2"
          role="button"
          @click="changeComponent('RegisterComponent')"
        >
          erstellen Sie ein Konto.</a
        >
      </p>
    </div>
    <div class="alert alert-danger col-md-8 offset-2" v-if="error">
      {{ errorDisplayText }}
    </div>
    <Form @submit="submitData" :validation-schema="schema" v-slot="{ errors }">
      <div class="form-row">
        <div class="form-group col-md8 offset-2">
          <label for="email"><strong>Email-Adresse</strong></label>
          <Field
            as="input"
            type="email"
            class="form-control"
            id="email"
            name="email"
          /><small class="text-danger" v-if="errors.email">{{
            errors.email
          }}</small>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md8 offset-2">
          <label for="password"><strong>Passwort</strong></label>
          <Field
            as="input"
            type="password"
            class="form-control"
            id="password"
            name="password"
          /><small class="text-danger" v-if="errors.password">{{
            errors.password
          }}</small>
        </div>
      </div>

      <div class="form-row mt-3">
        <div class="form-group col-md8 offset-2">
          <div class="d-grid">
            <button class="btn bg-vue">
              <span v-if="!isLoading">Einloggen</span>
              <span v-else class="spinner-border spinner-border.sm"></span>
            </button>
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import axios from "axios";
import { FIREBASE_API_KEY } from "@/config/firebase";
export default {
  name: "LoginComponent",
  components: {
    Form,
    Field,
  },
  emits: {
    "change-component": (paylaod) => {
      if (paylaod.componentName !== "RegisterComponent") {
        return false;
      }
      return true;
    },
  },  computed:{
    errorDisplayText(){
      if(this.error){
        if(this.error.includes("INVALID_PASSWORD")){
          return "Das Passwort ist nicht gültig."
        }
        else if(this.error.includes("EMAIL_NOT_FOUND")){
          return "Die Email Adresse konnte nicht gefunden werden."
        }
        return "Es ist ein unbekannter Fehler aufgetreten. Bitte versuchen Sie es erneut."
      }
      return ""
    }
  },
  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("Email wird benötigt")
        .trim()
        .email("Das ist keine gültige Emailadresse"),
      password: yup
        .string()
        .required("Ein Passwort wird benötigt")
        .min(6, "Das Passwort muss mindestens 6 Zeichen lang sein"),
    });
    return {
      schema,
      error:"",
      isLoading:false,
    };
  },
  methods: {
    submitData(values) {
      this.isLoading=true;
      this.error="";
      //console.log(values);
      const signinDO = {
        email: values.email,
        password: values.password,
        returnSecureToken: true,
      };
      axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
          signinDO
        )
        .then((data)=>{
          console.log(data)
          this.isLoading=false;
        })
        .catch((error) =>{
          
          console.log(error)
         // this.error = error.response.data.error.message;
          this.isLoading=false;
        })
        ;
    },
  },
};
</script>

<style scoped></style>
