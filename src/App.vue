<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" @nuevo="nuevo">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <h1> DESAFIO 4 - FORMULARIO </h1>
<!--    <p class="text-center pa-4"> Ingrese su Postre Favorito Por Favor! </p>-->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

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
  },
  methods: {
    nuevo(param) {
      this.desserts.push(param)
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

