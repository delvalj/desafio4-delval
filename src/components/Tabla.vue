<template>
  <v-container>
    <h2 class="mt-4 text-uppercase">Productos</h2>
    <v-simple-table class="mt-8 mb-6">
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
          <th class="text-left">
            Price
          </th>
          <th class="text-left">
              Category
          </th>
        </tr>
        </thead>

        <tbody>
        <tr
            v-for="producto in arrayProductos"
            :key="producto.id"
            class="text-left"
        >
          <td>{{ producto.name }}</td>
          <td>{{ producto.calories }}</td>
          <td>{{ producto.price }}</td>
          <td>{{ producto.category }}</td>
        </tr>
        </tbody>

      </template>
    </v-simple-table>
  </v-container>
</template>
<script>

export default {
  name: 'Tabla',
  // props: {
  //   arrayProductos: {
  //     type: Array,
  //     default: () => []
  //   }
  // },
  data() {
    return {
      arrayProductos: this.$store.state.productos,
    }
  }

}
</script>

<style scoped>

</style>