<template>
  <v-app class="about">
    <Formulario :nuevo="nuevo"></Formulario>
    <Tabla :arrayProductos="productos"></Tabla>
  </v-app>
</template>

<script>
import Tabla from "@/components/Tabla";
import Formulario from "@/components/Formulario";

const axios = require('axios');

export default {
  name: 'About',
  data() {
    return {
      productos: [],
    }
  },
  created() {
    axios.get("https://6238c7400a54d2ceab7a0c3e.mockapi.io/desafio4productos").then((result) => {
      this.productos = (result.data)
      console.log("productos array " + JSON.stringify(this.productos))
    })
  },
  components: {
    Tabla,
    Formulario
  },
  methods: {
    nuevo(param) {
      this.productos.push(param)
    }
  }
}
</script>
