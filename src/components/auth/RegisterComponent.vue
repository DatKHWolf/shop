<template>
  <div>
    <div class="my-5 text-center offset-2 col-8">
      <img src="@/assets/welcome.svg" class="img-fluid" />
    </div>
    <div class="text-center">
      <h2>Jetzt Registrieren</h2>
      <p>
        oder
        <a
          class="text-vue2"
          role="button"
          @click="changeComponent('LoginComponent')"
        >
          melden Sie sich mit Ihrem Konto an</a
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
      <div class="form-row">
        <div class="form-group col-md8 offset-2">
          <label for="password"><strong>Passwort wiederholen</strong></label>
          <Field
            as="input"
            type="password"
            class="form-control"
            id="confirmPassword"
            name="confirmPassword"
          /><small class="text-danger" v-if="errors.confirmPassword">{{
            errors.confirmPassword
          }}</small>
        </div>
      </div>
      <div class="form-row mt-3">
        <div class="form-group col-md8 offset-2">
          <div class="d-grid">
            <button class="btn bg-vue">
              <span v-if="!isLoading">Registrieren</span>
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
export default {
  name: "RegisterComponent",
  components: {
    Form,
    Field,
  },
  emits: {
    "change-component": (paylaod) => {
      if (paylaod.componentName !== "LoginComponent") {
        return false;
      }
      return true;
    },
  },
  computed: {
    errorDisplayText() {
      if (this.error) {
        if (this.error.includes("EMAIL_EXISTS")) {
          return "Die Email Adresse existiert bereits";
        }
        return "Es ist ein unbekannter Fehler aufgetreten. Bitte versuchen Sie es erneut";
      }
      return "";
    },
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
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwörter stimmen nicht überein"),
    });
    return {
      schema,
      error: "",
      isLoading: false,
    };
  },
  methods: {
    submitData(values) {
      this.isLoading = true;
      this.error = "";
      //console.log(values);
      this.$store
        .dispatch("signup", {
          email: values.email,
          password: values.password,
        })
        .then(() => {
          this.isLoading = false;
          //console.log(this.$store.state);
          this.changeComponent("LoginComponent");
        })
        .catch((error) => {
          this.error = error.message;
          this.isLoading = false;
        });
    },
    changeComponent(componentName) {
      this.$emit("change-component", { componentName });
    },
  },
};
</script>

<style scoped></style>
