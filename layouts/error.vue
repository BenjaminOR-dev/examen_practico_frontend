<template>
  <v-container fill-height fluid>
    <v-row>
      <v-col>
        <v-card elevation="10" class="mx-auto rounded-lg" width="500">
          <v-toolbar color="primary_custom" height="75">
            <span class="white--text text-sm-h5 font-weight-bold">
              <v-icon left dark large>mdi-alert-octagon</v-icon> Oh no!
            </span>
          </v-toolbar>
          <v-spacer class="mb-5" />
          <v-card-text>
            <v-row class="mt-n5">
              <v-col cols="12" class="mb-n3 text-center">
                <span class="text-h3 font-weight-bold">{{ error.statusCode }}</span>
              </v-col>
              <v-col cols="12" class="mb-n3 text-center">
                <p class="headline">
                  <span v-if="error.statusCode === 404">
                    {{ pageNotFound }}
                  </span>
                  <span v-else>
                    {{ otherError }}
                  </span>
                </p>
              </v-col>
              <v-col cols="12" class="text-center">
                <v-btn color="primary" type="button" :to="{ name: 'inicio' }">
                  <v-icon left>mdi-home</v-icon>
                  <span>Volver a inicio</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: ({ $auth }) => {
    if($auth.loggedIn){
      return 'app';
    } else {
      return 'default'
    }
  },
  head(){
    return { title: 'Error ' + this.error.statusCode }
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "No se encontró la página",
      otherError: "A ocurrido un error inesperado",
    };
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
