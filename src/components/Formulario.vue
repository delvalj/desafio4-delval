<template>
  <v-container>
    <h1> DESAFIO Complementario Vue CDN a Vue CLI</h1>
    <p class="text-center pa-4"> Ingrese los datos de su producto.</p>
    <form>
    <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="20"
        label="Nombre"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
        type=Number
        v-model="calories"
        :error-messages="caloriesErrors"
        label="Calorias"
        required
        @input="$v.calories.$touch()"
        @blur="$v.calories.$touch()"
    ></v-text-field>
    <v-text-field
        type=Number
        v-model="price"
        :error-messages="priceErrors"
        label="Precio"
        required
        @input="$v.price.$touch()"
        @blur="$v.price.$touch()"
    ></v-text-field>
    <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Categoria"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
    ></v-select>
    <v-btn
        class="mr-4"
        @click="submitDatos"
    >
      Submit
    </v-btn>
    <v-btn @click="clear">
      Clear
    </v-btn>
  </form >
  </v-container>
</template>
<script>
import {validationMixin} from 'vuelidate'
import {required, maxLength, numeric} from 'vuelidate/lib/validators'
const axios = require('axios');

// const mustBeNumber = (value) => value.type(Number)

export default {
  mixins: [validationMixin],

  validations: {

    name: {required, maxLength: maxLength(20)},
    calories: {required, numeric},
    select: {required},
    price: {required, numeric},
    checkbox: {
      checked(val) {
        return val
      },
    },
  },

  data: () => ({
    name: '',
    calories: '',
    select: null,
    items: [
      'Entrada',
      'Plato Principal',
      'Bebida',
      'Postre',
    ],
    price: '',

  }),
  computed: {
    selectErrors() {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 20 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    caloriesErrors() {
      const errors = []
      if (!this.$v.calories.$dirty) return errors
      !this.$v.calories && errors.push('Must be valid type')
      !this.$v.calories.required && errors.push('This field is required')
      return errors
    },
    priceErrors() {
      const errors = []
      if (!this.$v.price.$dirty) return errors
      !this.$v.price && errors.push('Must be valid price')
      !this.$v.price.required && errors.push('Price is required')
      return errors
    },
  },

  methods: {
      submitDatos() {
      axios.post('https://6238c7400a54d2ceab7a0c3e.mockapi.io/desafio4productos', {
        name: this.name,
        calories: this.calories,
        price: this.price,
        category: this.select,
      })

          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        this.clear();

      },

    clear() {
      this.$v.$reset()
      this.name = ''
      this.calories = ''
      this.select = null
      this.checkbox = false
      this.price = ''
    },
  },
}
</script>

<!-- CAPTAR LA DATA ESCRITA POR EL USUARIO, Y PUSHEAR LA INFO AL ARRAY -->

