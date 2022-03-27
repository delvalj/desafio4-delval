import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        productos: [],
    },
    mutations: {
        setProducts(state, payload) {
            state.productos = payload
            console.log('set products' + JSON.stringify(this.productos))
        },
    },
    actions: {
        async getProducts({commit}) {
            try {
            await axios.get("https://6238c7400a54d2ceab7a0c3e.mockapi.io/desafio4productos").then((result) => {
                this.productos = (result.data)
                console.log("productos array " + JSON.stringify(this.productos))
                commit('setProducts', result.data)
            })
            } catch (error) {
                console.error(error)
            }
        },
    },
    modules: {}
})
