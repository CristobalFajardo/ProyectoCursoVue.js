

<template>
 
  <v-app>

 <v-navigation-drawer 
   app 
   right  
   width="500"     
  >
      <CarritoCompras/>
  </v-navigation-drawer>
 
  <v-app-bar 
  class="d-flex justify-end mb-6"
  app>
    <!-- -->
  <div>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Registrar
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Registrar
        </v-card-title>

        <v-card-text>
          <RegistrarPersona/>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
          
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Login
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Iniciar sesión
        </v-card-title>

        <v-card-text>
          <LoginPersona/>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
          
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
 
 <ListadoProducto/>

 
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>

import LoginPersona from './components/LoginPersona';
import RegistrarPersona from './components/RegistrarPersona';
import ListadoProducto from './components/ListadoProducto';
import CarritoCompras from './components/CarritoCompras';

export default {
  name: 'App',

  components: {
    CarritoCompras,
    LoginPersona,
    RegistrarPersona,
    ListadoProducto,

  },

  data: () => ({
    //
  }),
};
</script>
