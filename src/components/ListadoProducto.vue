<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :search="search"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Lista de postres</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
<v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar postre"
        single-line
        hide-details
      ></v-text-field>
        <v-dialog v-model="dialog" hide-overlay persistent width="300">
          <v-card color="primary" dark>
            <v-card-text>
              ¡Agregando el producto a su carrito!
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small @click="addItemCart(item)"> mdi-cart-plus </v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  search: '',
    headers: [
      {
        text: "Postres (100g)",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Calorias", value: "calories" },
      { text: "Grasas (g)", value: "fat" },
      { text: "Carbohidratos (g)", value: "carbs" },
      { text: "Proteinas (g)", value: "protein" },
      { text: "Precio", value: "price" },
      { text: "Acciones", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
      price: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
      price: 0,
    },
  }),
  watch: {
    dialog(val) {
      if (!val) return;
      setTimeout(() => (this.dialog = false), 2000);
    },
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.desserts = [
        {
          name: "Yogurt congelado",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          price: 500,
        },
        {
          name: "Sándwich de helado",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          price: 700,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          price: 200,
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          price: 1000,
        },
        {
          name: "Pan de jengibre",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          price: 300,
        },
        {
          name: "Frijol de jalea",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          price: 200,
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          price: 50,
        },
        {
          name: "Miel",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          price: 2000,
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          price: 500,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          price: 200,
        },
         {
          name: "Gelato",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          price: 500,
        },
        {
          name: "Tiramisú",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          price: 700,
        },
        {
          name: "Panna Cotta",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          price: 200,
        },
        {
          name: "Pasteís de Belém",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          price: 1000,
        },
        {
          name: "Pávlola",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          price: 300,
        },
        {
          name: "Pastafrola",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          price: 200,
        },
        {
          name: "Crema de papaya",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          price: 50,
        },
        {
          name: "Cholado",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          price: 2000,
        },
        {
          name: "Buñuelos de viento",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          price: 500,
        },
        {
          name: "El Milhojas",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          price: 200,
        },
      ];
    },

    addItemCart(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
