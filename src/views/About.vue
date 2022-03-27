<template>
  <v-app class="about">
    <Formulario></Formulario>
    <Tabla></Tabla>
  </v-app>
</template>

<script>
import Tabla from "@/components/Tabla";
import Formulario from "@/components/Formulario";

export default {
  name: 'About',
  data() {
    return {
      productos: [],
    }
  },
  created() {
    this.$store.dispatch('getProducts')
  },
  components: {
    Tabla,
    Formulario
  },

}
</script>
