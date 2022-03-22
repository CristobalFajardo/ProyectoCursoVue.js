<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show1 ? 'text' : 'password'"
      name="input-10-1"
      label="Contraseña"
      hint="8 caracteres como minimo."
      counter
      @click:append="show1 = !show1"
    ></v-text-field>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Ingresar
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset"> Limpiar </v-btn>

    <v-btn color="warning" @click="resetValidation">
      Reiniciar validación
    </v-btn>
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            {{mensajeTitulo}}
          </v-card-title>

          <v-card-text>
            {{ mensajeUsuario }}
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  name: "Login-Persona",
  data: () => ({
    dialog: false,
    mensajeUsuario: "hola",
    mensajeTitulo: "",
    post: [],
    valid: true,
    show1: false,
    password: "",
    rules: {
      required: (value) => !!value || "Pasword requerido.",
      min: (v) =>
        v.length >= 8 || "Longitud de contraseña: como mínimo 8 caracteres.",
    },
    email: "",
    emailRules: [
      (v) => !!v || "E-mail es requerido.",
      (v) => /.+@.+\..+/.test(v) || "E-mail no valido.",
    ],
  }),
  mounted() {
    let vue = this;
    axios
      .get("https://6237ccdbb08c39a3af82e1f7.mockapi.io/api/v1/users")
      .then(function (response) {
        vue.post = response.data;
      });
  },

  methods: {
    validate() {
      this.$refs.form.validate();

      let vue = this;
      axios
        .get("https://6237ccdbb08c39a3af82e1f7.mockapi.io/api/v1/users")
        .then(function (response) {
          vue.post = response.data;

          let persona = vue.post.find(
            (x) => x.Correo === vue.email && x.password === vue.password
          );

          if (persona !== undefined) {
            vue.mensajeUsuario = "Bienvenid@ querid@ usuari@ " + persona.name +".";
            vue.mensajeTitulo = "Me alegro de volver a verte! :)";
            vue.dialog = true;
          } else {
            vue.mensajeUsuario = "E-mail o contraseña incorrecto, intente nuevamente." ;
            vue.mensajeTitulo = "Haz fallado! :(";
            vue.dialog = true;
          }
        });
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
