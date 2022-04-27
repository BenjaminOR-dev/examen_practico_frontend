<template>
  <v-container>
    <v-card elevation="5" color="purple">
      <v-card-title class="text-h4">
        <v-icon size="35" left>mdi-file-edit</v-icon> Administrar examenes
      </v-card-title>
    </v-card>
    <v-divider class="my-3" />
  </v-container>
</template>

<script>
export default {
  layout: "app",
  middleware: ["auth"],

  head() {
    return { title: "Administrar examenes" };
  },
};
</script>
