import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import firebase from "firebase";
import router from "@/router/index.js";

// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //registro
    form: { email: "", pass: "" },
    log: false,

    especies: [],
    registradas: [],

    //Agregar info a firebase
    registro: {
      id: "",
      ubicacion: {
        ref: "",
        comuna: "",
        region: "",
      },
      linkImg: "",
    },
  },
  // plugins: [createPersistedState()],

  mutations: {
    //Log in
    async login(state) {
      if (!state.form && !state.form.email && !state.form.pass) return;
      console.log(state.form.email);
      console.log(state.form.pass);
      try {
        const request = await firebase
          .auth()
          .signInWithEmailAndPassword(state.form.email, state.form.pass);
        console.log(request);
        if (request && request !== null) {
          localStorage.setItem("login", "logueado");
          state.log = true;
        }
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Codigo de error", errorCode);
        console.log("Mensaje de error", errorMessage);
      }
    },
    // Logout
    async logout(state) {
      try {
        await firebase.auth().signOut();
        localStorage.setItem("login", "");
        state.log = false;
        router.push("/");
      } catch (error) {
        console.log("No se ha podido cerrar sesion", error);
      }
    },

    // Cargar API a state
    cargarData(state, payload) {
      state.especies = payload;
      // console.log(state.especies);
    },
    // Agregar Abejas al registro
    registrarAbeja(state, payload) {
      const id = payload.id;
      const img = payload.img;
      const nombre = payload.nombre;
      const nombrecien = payload.nombrecien;
      const orden = payload.orden;
      const familia = payload.familia;
      const caracteristicas = payload.caracteristicas;
      const habitat = payload.habitat;

      const finder = state.registradas.find((obj) => obj.id === id);
      if (!finder) {
        const obj = {
          id,
          img,
          nombre,
          nombrecien,
          orden,
          familia,
          caracteristicas,
          habitat,
        };
        state.registradas.push(obj);
        console.log(state.registradas);
      } else {
        alert("Ya tienes esta abeja en tu registro");
      }
    },
    //Pasar data al registro
    agregarInfo(state, payload) {
      const id = payload.id;
      state.registro.id = id;
    },
  },

  actions: {
    // Consumir API
    async getData({ commit }) {
      const url =
        "https://us-central1-apis-varias-mias.cloudfunctions.net/bees";
      try {
        const req = await axios(url);
        const abejas = req.data;
        commit("cargarData", abejas);
        // console.log(abejas);
      } catch (error) {
        console.log(error);
      }
    },

    //Agregar registro a firebase
    async agregarRegistro(payload) {
      const db = firebase.firestore()
      const registro = payload
      if(!registro) return

      await db.collection("registroAbejas").add(registro)
    }
  },
});
