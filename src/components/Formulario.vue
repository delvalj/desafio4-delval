<template>
  <form>
    <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
        type=Number
        v-model="calories"
        :error-messages="caloriesErrors"
        label="Calories"
        required
        @input="$v.calories.$touch()"
        @blur="$v.calories.$touch()"
    ></v-text-field>
    <v-text-field
        type=Number
        v-model="price"
        :error-messages="priceErrors"
        label="Price"
        required
        @input="$v.price.$touch()"
        @blur="$v.price.$touch()"
    ></v-text-field>
    <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Category"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
    ></v-select>
    <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn
        class="mr-4"
        @click="guardarDatos"
    >
      Submit
    </v-btn>
    <v-btn @click="clear">
      Clear
    </v-btn>
  </form>
</template>
<script>
import {validationMixin} from 'vuelidate'
import {required, maxLength, numeric} from 'vuelidate/lib/validators'

// const mustBeNumber = (value) => value.type(Number)

export default {
  mixins: [validationMixin],

  validations: {

    name: {required, maxLength: maxLength(10)},
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
      'A',
      'B',
      'C',
      'D',
    ],
    arrayPersona: [],
    price: '',
    checkbox: false,
    props: {
      arrayProp: {
        type: Array,
        default: () => []
      },
    }
  }),

  computed: {
    checkboxErrors() {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    selectErrors() {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
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
    guardarDatos() {
      const nuevo = {
        name: this.name,
        calories: this.calories,
        price: this.price,
        category: this.select,
      }

      this.$emit("nuevo", nuevo)
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

