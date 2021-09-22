<template>
  <div>
    <navbar/>
    <v-container class="px-5">
          <h1>Contactanos</h1>
          <v-row justify="center">
            <v-col col="8">
          <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <v-row>
    <v-col lg="6" xl="6" md="6" cols="12">
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Nombre"
      required
    ></v-text-field>
    </v-col>
    <v-col lg="6" xl="6" md="6" cols="12">
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    </v-col>
  </v-row>

<v-row justify="center">
  <v-col lg="6" xl="6" md="6" cols="12">
    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Motivo de consulta"
      required
    ></v-select>
  </v-col>
</v-row>


<v-row>
  <v-col cols="12">
    <v-textarea
          name="input-7-1"
          label="Comentanos tu situación"
          value="Comentario"
          hint="Hint text"
        ></v-textarea>
  </v-col>
</v-row>

<v-row justify="center">
  <v-col>
        <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-col>
</v-row>

          </v-form>
            </v-col>
          </v-row>

    </v-container>

  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'
export default {
      data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Cotizar por unidad',
        'Cotizar por mayor',
        'Reclamos',
        'Otra consulta',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
    components: {
        Navbar,
    }
}
</script>
