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

    <v-btn color="warning" @click="resetValidation"> Reiniciar validación </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "Login-Persona",
  data: () => ({
    valid: true,
    show1: false,
    password: "",
    rules: {
      required: (value) => !!value || "Pasword requerido.",
      min: (v) => v.length >= 8 || "Longitud de contraseña: como mínimo 8 caracteres."      
    },
    email: "",
    emailRules: [
      (v) => !!v || "E-mail es requerido.",
      (v) => /.+@.+\..+/.test(v) || "E-mail no valido.",
    ]
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
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
