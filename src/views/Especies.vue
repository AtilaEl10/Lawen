<template>
  <div class="about pb-5">
    <header class="py-4">
      <h2 class="mt-5 pt-5 fw-bold">ABEJAS NATIVAS</h2>
      <b-col cols="8 mx-auto pb-5">
        <p class="pt-5">En el mundo existen casi 20.000 especies de abejas agrupadas en siete grandes familias. Actualmente en Chile se han registrado ¡463 especies de abejas! pertenecientes a cinco de estas familias, se presume que podríamos llegar a tener más de 800 especies de abejas en Chile y el 70% de las especies que se han descrito a la fecha son abejas endémicas.</p>
      </b-col>
    </header>  
    <section>
      <b-container class="mt-5">
        <b-row>
          <Card v-for="(abeja, i) in especies" :key="i"
          :img="abeja.img" :nombre="abeja.nombre" :nombrecien="abeja.nombrecien" 
          :orden="abeja.orden" :familia="abeja.familia" :peligro="abeja.peligro" 
          :tamano="abeja.tamano" :id="abeja.id" :caracteristicas="abeja.caracteristicas" :habitat="abeja.habitat"
          />
        </b-row>
      </b-container>    
    </section>
  </div>
</template>

<style scoped>
  header {
    background-image: url("../assets/img1.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>

<script>
import Card from "../components/Card.vue"
import { mapState } from "vuex"

export default {
  name: "Especies",

  components: {
    Card,
  },

  computed: {
    ...mapState(["especies"])
  },

}
</script>
