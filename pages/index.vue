<template>
  <v-container>
    <v-card elevation="5" color="teal">
      <v-card-title class="text-h4">
        <v-icon size="35" left>mdi-home</v-icon> Inicio
      </v-card-title>
    </v-card>
    <v-divider class="my-3" />
    <v-card class="rounded-lg mx-auto" elevation="10">
      <v-card-title>Bienvenido, {{ this.$auth.user.nombre }}</v-card-title>
      <v-card-text>
        <v-btn class="primary" medium :to="{ name: 'examenes' }"> Ver Examenes </v-btn>
        <v-btn class="purple" medium :to="{ name: 'examenes.admin' }"> Crear examen </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: "app",
  middleware: ["auth"],

  head() {
    return { title: "Inicio" };
  },
};
</script>
