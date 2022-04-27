<template>
  <v-container>
    <v-card elevation="10" class="rounded-lg">
      <v-toolbar color="primary_custom" height="75">
        <span class="white--text text-md-h4">
          <v-icon left dark large>mdi-account-circle</v-icon> Inicia sesión
        </span>
      </v-toolbar>
    </v-card>
    <v-divider class="my-3" />
    <v-card elevation="5" class="rounded-lg" height="400">
      <v-card-text>
        <form @submit.prevent="login()">
          <v-text-field
            label="Usuario"
            prepend-inner-icon="mdi-account-key"
            type="text"
            v-model="form.login"
            :error-messages="errors.login"
            :class="errors.login ? 'mb-5' : ''"
            outlined
            required
          />
          <v-text-field
            label="Contraseña"
            prepend-inner-icon="mdi-key"
            type="password"
            v-model="form.password"
            :error-messages="errors.password"
            :class="errors.password ? 'mb-5' : ''"
            outlined
            required
          />

          <div class="text-right">
            <v-btn class="mx-2" dark large color="primary" type="submit">
              Inicia <v-icon right dark>mdi-arrow-right-thick</v-icon>
            </v-btn>
          </div>
        </form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: "simple",
  middleware: "guest",

  head() {
    return { title: "Inicia sesión" };
  },

  data: () => ({
    form: {
      login: "",
      password: "",
      remember: "",
    },
    errors: [],
  }),

  methods: {
    async login() {
      this.errors = [];

      try {
        await this.$auth
          .loginWith("Laravel", {
            data: this.form,
          })
          .then((res) => {
            this.$router.push({ name: "inicio" });
          });
      } catch (e) {
        this.errors = e.response.data.errors;
      }
    },
  },
};
</script>
