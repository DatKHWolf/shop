<template>
  <div>
    <div class="my-5 text-center offset-2 col-8">
      <img src="@/assets/welcome.svg" class="img-fluid" />
    </div>
    <div class="text-center">
      <h2>Jetzt Registrieren</h2>
      <p>
        oder
        <a class="text-vue2" role="button">
          melden Sie sich mit Ihrem Konto an</a
        >
      </p>
    </div>
    <form>
      <div class="form-row">
        <div class="form-group col-md8 offset-2">
          <label for="email"><strong>Email-Adresse</strong></label>
          <input type="email" class="form-control" id="email" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md8 offset-2">
          <label for="password"><strong>Passwort</strong></label>
          <input type="password" class="form-control" id="password" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md8 offset-2">
          <label for="password"><strong>Passwort wiederholen</strong></label>
          <input type="password" class="form-control" id="confirmPassword" />
        </div>
      </div>
      <div class="form-row mt-3">
        <div class="form-group col-md8 offset-2">
          <div class="d-grid">
            <button class="btn bg-vue">Registrieren</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterComponent",
};
</script>

<style scoped></style>
