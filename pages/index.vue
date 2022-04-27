<template>
  <v-container>

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
