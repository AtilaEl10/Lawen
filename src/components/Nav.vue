<template>
  <b-navbar class="navbar-dark fixed-top text-uppercase fw-bold" toggleable="md">
    <b-container>
      <b-navbar-brand>
        <router-link class="fw-bold nav-link nav_text img-fluid" to="/"
          ><img src="../assets/logo.png" alt="logo lawen" class="img-fluid"></router-link
        >
      </b-navbar-brand>

      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="ms-auto">
          <b-nav-text>
            <router-link class="nav-link mx-1" to="/" style="color: #f58b13"
              >Inicio</router-link
            >
          </b-nav-text>
          <b-nav-text>
            <router-link
              class="nav-link mx-1"
              to="/especies"
              style="color: #f58b13"
              >Especies</router-link
            >
          </b-nav-text>
          <b-nav-text>
            <router-link class="nav-link mx-1" to="/ayuda" style="color: #f58b13"
              >¿Cómo ayudar?</router-link
            >
          </b-nav-text>
          <!--Agregar un v-if para esta opcion-->
          <b-nav-text>
            <router-link
              class="nav-link mx-1"
              v-if="log"
              to="/registro"
              style="color: #f58b13"
              >Mi registro</router-link
            >
          </b-nav-text>
          <b-nav-text>
            <!--Agregar un v-if para esta opcion-->
            <b-button
              @click="$bvModal.show('bv-modal-example')"
              v-if="!log"
              class="btn_login px-3 ms-3 text-light fw-bold"
              >Iniciar Sesión</b-button
            >
            <!--Agregar un v-else para esta opcion-->
            <b-button
              @click="logout()"
              v-else
              class="btn_logout px-3 ms-3 text-white fw-bold"
              >Cerrar Sesión</b-button
            >
          </b-nav-text>

          <!--Modal de Inicio de Sesión-->
          <b-modal id="bv-modal-example" hide-footer hide-header>
            <b-col
              cols="12"
              class="m-auto border rounded-2 p-5 shadow bg-light"
            >
              <h2 class="fw-bold">Ingresar</h2>
              <b-form-group
                label="Correo electrónico:"
                description="Introduzca su correo"
                class="fw-bold text-start mt-4"
              >
                <b-form-input
                  v-model="form.email"
                  type="email"
                  placeholder="Correo Electrónico"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="Contraseña"
                description="Introduzca su contraseña"
                class="mt-4 fw-bold text-start"
              >
                <b-form-input
                  v-model="form.pass"
                  type="password"
                  placeholder="Contraseña"
                ></b-form-input>
              </b-form-group>

              <b-button
                @click="login(), $bvModal.hide('bv-modal-example')"
                type="button"
                variant="warning"
                class="mt-4 mx-2 text-uppercase"
                >Ingresar</b-button
              >
              <b-button
                @click="$bvModal.hide('bv-modal-example')"
                type="button"
                variant="danger"
                class="mt-4 mx-2 text-uppercase"
                >Cancelar</b-button
              >
            </b-col>
          </b-modal>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
//import firebase from "firebase"
import { mapMutations, mapState } from "vuex";

export default {
  name: "Nav",

  methods: {
    ...mapMutations(["login", "logout"]),
  },
  computed: {
    ...mapState(["log", "form"]),
  },
};
</script>

<style scoped>
nav {
  opacity: 0.85;
  background-color: #121013;
}
router-link {
  color: #f58b13;
}

.btn_login {
  background-color: #f58b13;
  border-radius: 25px;
  border: 0;
}
.btn_login:hover, .btn_login:focus  {
  background-color: #cc6f05;
}
.btn_logout {
  background-color: #e04a1c;
  border-radius: 25px;
  border: 0;
}
.btn_logout:hover, .btn_logout:focus {
  background-color: #ac2f21;
}
</style>
