<template>
  <v-container>
    <v-card elevation="5" color="primary">
      <v-card-title class="text-h4">
        <v-icon size="35" left>mdi-file-document-multiple</v-icon> Examenes
        disponibles
      </v-card-title>
    </v-card>
    <v-divider class="my-3" />
    <v-card>
      <Datatable
        :loading="table.loading"
        :headers="table.headers"
        :items="table.items"
      >
        <template v-slot:item.acciones="{ item }"> </template>
      </Datatable>
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

  data: () => ({
    table: {
      loading: false,
      headers: [
        { text: "Folio", value: "idExamen" },
        { text: "Examen", value: "titulo" },
        { text: "Autor", value: "tbl_usuarios.nombre" },
        { text: "Creación", value: "created_at"},
        {
          text: "",
          value: "acciones",
          sortable: false,
          align: "center",
        },
      ],
      items: [],
      search: "",
    },
  }),

  created() {
    this.getData();
  },

  methods: {
    async getData(){
      this.table.loading = true;
      await this.$axios.get("data/examenes-disponibles")
      .then(async (res) => {
        this.table.items = await res.data;
      }).catch((e) => {
        console.log(e);
      }).finally(() => {
        this.table.loading = false;
      });
    }
  }
};
</script>
