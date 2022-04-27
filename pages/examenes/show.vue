<template>
  <v-container>
    <v-card elevation="5" color="primary">
      <v-card-title class="text-h4">
        <v-icon size="35" left>mdi-file-document-multiple</v-icon> Examenes disponibles
      </v-card-title>
    </v-card>
    <v-divider class="my-3" />
    <v-card>

    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: "app",
  middleware: ["auth"],

  head() {
    return { title: "Examenes disponibles" };
  },
};
</script>
