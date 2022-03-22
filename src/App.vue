<template>
  <!-- App.vue -->

  <v-app>
    <v-navigation-drawer app>
      <!-- -->
      <router-link to="/"
        ><v-btn color="primary" elevation="2" outlined plain raised>
          Go to Home</v-btn
        ></router-link> <br>

      <router-link to="/Carrito-Compras"
        ><v-btn color="primary" elevation="2" outlined plain raised
          >Carrito de compras</v-btn
        ></router-link><br>
      <router-link to="/Listado-Producto"
        ><v-btn color="primary" elevation="2" outlined plain raised
          >Listado de productos</v-btn
        ></router-link> <br>     
      <router-link to="/Login-Persona"
        ><v-btn color="success" elevation="2" outlined plain raised>
          Login</v-btn
        ></router-link><br>
      <router-link to="/Registrar-Persona"
        ><v-btn color="success" elevation="2" outlined plain raised>
          Registrar</v-btn
        ></router-link
      >
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
