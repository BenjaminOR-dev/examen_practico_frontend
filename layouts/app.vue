<template>
  <v-app>
    <v-navigation-drawer app permanent>
      <v-list>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{ this.$auth.user.nombre_completo }}
            </v-list-item-title>
            <v-list-item-subtitle>{{
              this.$auth.user.login
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link :to="{ name: 'examenes' }">
          <v-list-item-icon>
            <v-icon>mdi-file-document-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Ver examenes</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'examenes.admin' }">
          <v-list-item-icon>
            <v-icon>mdi-file-edit</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Crear examen</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="logout()">
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Salir</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  async created() {
    this.user = await this.$auth.user;
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push({ name: "login" });
    },
  },
};
</script>
