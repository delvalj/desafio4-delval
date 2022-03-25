<template>
  <v-app class="home">
    <Formulario></Formulario>
  </v-app>
</template>

<script>
import Formulario from "@/components/Formulario";
// import Tabla from "@/components/Tabla";

export default {
  name: 'Home',
  components: {
    Formulario,
  }
}
</script>
