<template>
  <div>
    <TheShopLayout>
      <template #default>
        <Form @submitPC="submitPC">
            <div class="form-row">
                <div class="form-group col-md8 offset-2">
                    <label><strong>Hersteller</strong></label>
                    <Field as="input" type="text" class="form-control-lg" id="hersteller" name="hersteller" placeholder="Hersteller eintragen"> </Field>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md8 offset-2">
                    <label><strong>Prozessor</strong></label>
                    <Field as="input" class="form-control form-control-lg" type="text" placeholder="Prozessor" name="prozessor" id="prozessor"></Field>
                </div>
            </div>
        </Form>

      </template>
    </TheShopLayout>
  </div>
</template>

<script>
import TheShopLayout from "@/layouts/TheShopLayout.vue";
export default {
  name: "PCGeraeteschein",
  components: {
    TheShopLayout,
  },
  data(){
    return {
        hersteller : "",
        prozessor : "",
        betriebssystem:"",
        ram:"",
        festplatte:"",
        //Endkontrolle + Sichtkontrolle durch Yup
        benchmark:"",
        bemerkungen:"",
        benutzername:"user",
        passwort:"user",
    }

  }
};
</script>

<style scoped></style>
