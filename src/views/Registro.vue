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
            <b-col cols="12" lg="10" class="mx-auto my-4" v-for="(misAbejas, i) in registradas" :key="i">
                <b-card no-body class="overflow-hidden bee text-dark">
                    <b-row no-gutters>
                    <b-col md="5" class="d-flex bg-dark">
                        <img :src=misAbejas.img alt="Image" class="img-fluid align-self-center">
                    </b-col>
                    <b-col md="7">
                        <b-card-body class="text-start">
                            <h4 class="fw-bold pt-3">{{ misAbejas.nombre }}</h4>
                            <p class="fst-italic">{{ misAbejas.nombrecien }}</p>
                            <b-row>
                                <b-col cols="6">
                                    <h5 class="fw-bold">Orden <span class="fst-italic fw-normal">{{misAbejas.orden}}</span> </h5>
                                </b-col>
                                <b-col cols="6">
                                    <h5 class="fw-bold">Familia <span class="fst-italic fw-normal">{{misAbejas.familia}}</span> </h5>
                                </b-col>
                            </b-row>
                        <b-card-text>
                            <strong>CARACTERISTICAS: </strong> {{misAbejas.caracteristicas}}
                            <br>
                            <strong>NIDO: </strong> {{misAbejas.habitat}}
                        </b-card-text>
                        <div class="mt-3">
                            <a class="mx-4 text-success" href="#" variant="primary">Mas información</a>
                            <b-button @click="agregarInfo()" class="mx-4" href="#" variant="dark">Agregar Info</b-button>
                        </div>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
      </b-container>    
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "Registro",

  computed: {
    ...mapState(["registradas"])
  },

}
</script>

<style scoped>
  header {
    background-image: url("../assets/img3.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

.bee {
    font-family: 'Roboto Condensed', sans-serif;
    background-image: url("../assets/card.jpg");
    background-size: cover;
    border-radius: 15px 50px
  }
</style>