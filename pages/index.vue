<template>

</template>

<script>
export default {
  layout: "simple",
  middleware: ["auth"],

  head() {
    return { title: "Inicio" };
  },
};
</script>
