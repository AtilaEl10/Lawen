import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    especies: [],
    registradas: []
  },

  mutations: {
    // Cargar API a state
    cargarData(state, payload){
      state.especies = payload
      // console.log(state.especies);
    },
    // Agregar Abejas al Rgistro
    registrarAbeja(state, payload) {
      const id = payload.id
      const img = payload.img
      const nombre = payload.nombre
      const nombrecien = payload.nombrecien
      const orden = payload.orden
      const familia = payload.familia
      const caracteristicas = payload.caracteristicas
      const habitat = payload.habitat

      const finder = state.registradas.find((obj) => obj.id === id)
      if(!finder) {
        const obj = {
          id, img, nombre, nombrecien, orden, familia, caracteristicas, habitat
        }
        state.registradas.push(obj)
        console.log(state.registradas);
      }else {
        alert("Ya tienes esta abeja en tu registro")
      }
    },
  },

  actions: {
    async getData({ commit }) {
      const url = "https://us-central1-apis-varias-mias.cloudfunctions.net/bees"
      try {
        const req = await axios(url)
        const abejas = req.data

        commit("cargarData", abejas)
        // console.log(abejas);
      } catch (error) {
        console.log(error);
      }
    }
  },
});
