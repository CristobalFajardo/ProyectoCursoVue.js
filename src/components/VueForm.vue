<template>
  <vue-form :state="formstate" @submit.prevent="onSubmit">
    <validate tag="label">
      <span>Nombre *</span>
      <input v-model="model.name" required name="name" />
      <field-messages name="name">
        <div>Correcto!</div>
        <div slot="required">Nombre es un campo requerido</div>
      </field-messages>
    </validate>
    <validate tag="label">
      <span>Email</span>
      <input v-model="model.email" name="email" type="email" required />
      <field-messages name="email">
        <div slot="required">Email es un campo requerido</div>
        <div slot="email">Email no es válido</div>
      </field-messages>
    </validate>
    <button type="submit">ENVIAR</button>
  </vue-form>
</template>
<script>
      export default {
        name: 'VueForm',
        data: {

        formstate: {},

        model: {
        name: '',
        email: '',

        },
        methods: {
                onSubmit: function () {
                    if(this.formstate.$invalid) {

                    return
                    }

                }
        }

</script>
