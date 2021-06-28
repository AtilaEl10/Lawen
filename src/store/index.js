import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import firebase from "firebase";
import router from "@/router/index.js";
// import VuexPersistance from "vuex-persist";

import createPersistedState from "vuex-persistedstate";

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
      registroId: "",
      ubicacion: {
        ref: "",
        comuna: "",
        region: "",
      },
      linkImg: "",
    },
    registroAbejas: [],
  },
  plugins: [createPersistedState()],

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
    /*
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
    */
    // Agregar Abejas al registro en firebase
    async registrarAbeja(state, payload) {
      const db = firebase.firestore();
      const abejaId = payload.id;
      const img = payload.img;
      const nombre = payload.nombre;
      const nombrecien = payload.nombrecien;
      const orden = payload.orden;
      const familia = payload.familia;
      const caracteristicas = payload.caracteristicas;
      const habitat = payload.habitat;

      const finder = state.registradas.find((obj) => obj.abejaId === abejaId);
      if (!finder) {
        const obj = {
          abejaId: abejaId,
          img: img,
          nombre: nombre,
          nombrecien: nombrecien,
          orden: orden,
          familia: familia,
          caracteristicas: caracteristicas,
          habitat: habitat,
        };
        await db.collection("registradas").add(obj);
        router.push("/registro")
      } else {
        alert("Ya tienes esta abeja en tu registro");
      }
    },
    //Pasar data al registro
    agregarInfo(state, payload) {
      const registroId = payload.id;
      state.registro.registroId = registroId;
    },

    // Guardar data de Firebase de registros
    guardarRegistros(state, payload) {
      const abejita = payload;
      if (!abejita) return;

      const repetido = state.registradas.find((bee) => bee.id === abejita.id);
      if (!repetido) state.registradas.push(abejita);

      console.log(state.registradas);
    },

    // Guardar data de Firebase
    guardarAbejas(state, payload) {
      const abeja = payload;
      if (!abeja) return;

      const repetido = state.registroAbejas.find(
        (bee) => bee.id === abeja.id
      );
      if (!repetido) state.registroAbejas.push(abeja);

      console.log(state.registroAbejas);
    },
    //Eliminar Abeja
    eliminarAbeja(state, payload){
      const abeja = payload;
      if(!abeja) return
      const index = state.registradas.indexOf(abeja)
      state.registradas.splice(index, 1)
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
    async agregarRegistro({ commit }, payload) {
      const db = firebase.firestore();
      const registro = payload;
      if (!registro) return;

      await db.collection("registroAbejas").add(registro);
      commit();
    },

    // Obtener info de firebase de las imagenes individuales
    async getRegistro({ commit }) {
      const db = firebase.firestore();
      try {
        const request = await db.collection("registroAbejas").get();
        if (request) {
          request.docs.forEach((abeja) => {
            const obj = abeja.data();
            const id = abeja.id;
            obj.id = id;
            commit("guardarAbejas", obj);
          });
        }
      } catch (error) {
        console.log("Error en la obtencion de la Data de Firebase", error);
      }
    },
    // Obtener info de firebase de cada abeja
    async getAbejaFirebase({ commit }) {
      const db = firebase.firestore();
      try {
        const request = await db.collection("registradas").get();
        if (request) {
          request.docs.forEach((abejita) => {
            const obj = abejita.data();
            const id = abejita.id;
            obj.id = id;
            commit("guardarRegistros", obj);
          });
        }
      } catch (error) {
        console.log("Error en la obtencion de la Data de Firebase", error);
      }
    },

    // Borrar abejas del registro
    async borrarAbejas({commit}, payload) {
      // Se borra de Firebase
      const abeja = payload;
      if(!abeja) return
      
      commit("eliminarAbeja", abeja)
      const idFirebase = payload.id
      console.log(idFirebase);
      await firebase.firestore().collection("registradas").doc(idFirebase).delete()   
    },
    // Borrar abejas del registro
    async borrarRegistro({commit}, payload) {
      const idFirebase = payload.id
      console.log(idFirebase);
      commit()
      await firebase.firestore().collection("registroAbejas").doc(idFirebase).delete()   
    }
  },
  /*plugins: [
    new VuexPersistance({
      storage: window.localStorage,
    }).plugin,
    
  ],*/
});
