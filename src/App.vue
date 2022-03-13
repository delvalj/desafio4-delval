<template>
  <v-app>
    <div class="background">
      <h1 class="text-center pa-4"> TITULO DE LA PAGINA</h1>
    <div class="d-block justify-center mb-6 mt-8 pa-8">
      <Formulario :arrayProp="desserts" ></Formulario>
      <Tabla :arrayProp="desserts" ></Tabla>
    </div>
    </div>
  </v-app>
</template>

<script>
import Formulario from './components/Formulario';
import Tabla from "@/components/Tabla";

export default {
  name: 'App',

  components: {
    Formulario,
    Tabla
  },

  data() {
    return {
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          price: 10,
          category: 'A'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          price: 15,
          category: 'B'
        },
        {
          name: 'Eclair',
          calories: 262,
          price: 25,
          category: 'C'
        },
        {
          name: 'Cupcake',
          calories: 305,
          price: 5.25,
          category: 'D'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          price: 15.35,
          category: 'A'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          price: 12.15,
          category: 'C'
        },
        {
          name: 'Lollipop',
          calories: 392,
          price: 9.65,
          category: 'D'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          price: 5.25,
          category: 'D'
        },
        {
          name: 'Donut',
          calories: 452,
          price: 5,
          category: 'D'
        },
        {
          name: 'KitKat',
          calories: 518,
          price: 5.99,
          category: 'A'
        },
      ],
    }
  }
};
</script>

<style>

</style>
