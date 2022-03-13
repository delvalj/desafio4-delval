<template>
  <v-simple-table class="mt-16">
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
          v-for="postre in arrayProp"
          :key="postre.name"
      >
        <td>{{ postre.name }}</td>
        <td>{{ postre.calories }}</td>
        <td>{{ postre.price }}</td>
        <td>{{ postre.category }}</td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  name: 'Tabla',
  props: {
    arrayProp: {
      type: Array,
      default: () => []
    }

  }

}
</script>

<style scoped>

</style>