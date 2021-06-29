<template>
  <div class="about pb-5">
    <header class="py-4">
      <h2 class="display-6 mt-5 pt-5 fw-bold">ABEJAS NATIVAS</h2>
      <b-col cols="8 mx-auto pb-5">
        <p class="pt-5">
          En el mundo existen casi 20.000 especies de abejas agrupadas en siete
          grandes familias. Actualmente en Chile se han registrado ¡463 especies
          de abejas! pertenecientes a cinco de estas familias, se presume que
          podríamos llegar a tener más de 800 especies de abejas en Chile y el
          70% de las especies que se han descrito a la fecha son abejas
          endémicas.
        </p>
      </b-col>
    </header>
    <section>
      <b-container class="mt-5">
          <span class="col-12 mx-auto ">Aquí observaras {{ especies.length }} especies diferentes de abejas nativas, con su información de reconocimiento, nombre, tamaño (en base a una moneda de 100 pesos antigua) y con una alerta en caso de que la especie estuviera en peligro de extinción.</span>
          <hr>
          <p class="fst-italic">Si estas registrado, puedes ayudarnos reportando avistamientos de estas abejas, indicándonos una imagen y el lugar en donde se tomo la foto </p>
        <b-row v-if="especies || especies.length > 0">
          <Card
            v-for="(abeja, i) in especies"
            :key="i"
            :img="abeja.img"
            :nombre="abeja.nombre"
            :nombrecien="abeja.nombrecien"
            :orden="abeja.orden"
            :familia="abeja.familia"
            :peligro="abeja.peligro"
            :tamano="abeja.tamano"
            :id="abeja.id"
            :caracteristicas="abeja.caracteristicas"
            :habitat="abeja.habitat"
            :log="log"
          />
        </b-row>
      </b-container>
      <b-container>
        <div class="p-5 mt-5 text-dark" style="background-color: #f58b13">
          <h2 class="fw-bold">OTRAS ABEJAS NO NATIVAS</h2>
          <p class="col-12 col-md-8 mx-auto mt-4">Aquí las dos principales especies de abejas no nativas, más fáciles de reconocer y una de las que más han afectado a las especies nativas</p>
        </div>
        <b-row class="mt-5">
          <b-col
            cols="12"
            class="mx-auto my-4"
          >
            <b-card no-body class="overflow-hidden image text-dark">
              <b-row no-gutters>
                <b-col md="5" class="d-flex image">
                  <img
                    src="../assets/euro-01.jpg"
                    alt="Image"
                    class="img-fluid align-self-center"
                  />
                </b-col>
                <b-col md="7">
                  <b-card-body class="bee text-start h-100">
                    <h4 class="fw-bold pt-3">ABEJA DE LA MIEL</h4>
                    <p class="fst-italic">Apis Mellifera</p>
                    <b-row>
                      <b-col cols="6">
                        <h5 class="fw-bold">
                          Orden
                          <span class="fst-italic fw-normal">Hymenoptera </span>
                        </h5>
                      </b-col>
                      <b-col cols="6">
                        <h5 class="fw-bold">
                          Familia
                          <span class="fst-italic fw-normal">Apida</span>
                        </h5>
                      </b-col>
                    </b-row>
                    <b-card-text class="pb-3">
                      <strong>CARACTERISTICAS: </strong> Generalmente, las abejas europeas son rojas o marrones con bandas negras y anillos amarillos en el abdomen. Además, tienen pelos en el tórax y carecen de los mismos en el abdomen. tiene una canasta para el polen en sus patas traseras, las cuales son marrón oscura o negras, al igual que el resto de las patas. 
                        <br />
                      <strong>PELIGROS: </strong>
                        Muchas veces tienen patógenos, entre ellos Nosema ceranae, Varroa, varios tipos de virus, entre otros, los cuales son transmitidos a las abejas nativas.                   
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </b-col>


          <b-col
            cols="12"
            class="mx-auto my-4"
          >
            <b-card no-body class="overflow-hidden image text-dark">
              <b-row no-gutters>
                <b-col md="5" class="d-flex image">
                  <img
                    src="../assets/euro-02.jpg"
                    alt="Image"
                    class="img-fluid align-self-center"
                  />
                </b-col>
                <b-col md="7">
                  <b-card-body class="bee text-start h-100">
                    <h4 class="fw-bold pt-3">ABEJORRO COMÚN</h4>
                    <p class="fst-italic">Bombus terrestris</p>
                    <b-row>
                      <b-col cols="6">
                        <h5 class="fw-bold">
                          Orden
                          <span class="fst-italic fw-normal">Hymenoptera </span>
                        </h5>
                      </b-col>
                      <b-col cols="6">
                        <h5 class="fw-bold">
                          Familia
                          <span class="fst-italic fw-normal">Apida</span>
                        </h5>
                      </b-col>
                    </b-row>
                    <b-card-text class="pb-3">
                      <strong>CARACTERISTICAS: </strong> Tiene el cuerpo negro con bandas amarillas. Se diferencia de otras especies de abejorros por el color blanquecino del extremo del abdomen. Es un abejorro grande, la reina es de 2 a 2,7 cm de longitud y las obreras son de 1,5 a 2 cm. La probóscide o lengua de la reina puede ser de 10 mm de largo, con la de las obreras algo más corta.
                        <br />
                      <strong>PELIGROS: </strong>
                      Es considerado una plaga, debido a su facilidad de reproducirse y expandirse,  es una de las principales depredadoras del "Abejorro Colorado", considerado en peligro de extinción, además que rompe el caliz de algunas flores en las que poliniza, reduciendo la produccion del néctar y afectando en el efecto polinizador de la flor.                    
                    </b-card-text>
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

<style scoped>
header {
  background-image: url("../assets/img1.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
}
p {
  font-size: 19px;
}

.bee {
  font-family: "Roboto Condensed", sans-serif;
  background-image: url("../assets/card.jpg");
  background-color: #221d23;
  background-size: cover;
  border-radius: 15px 50px;
  border: 1px solid #221d23;
}
.image {
  background-color: #221d23;
}

</style>

<script>
import Card from "../components/Card.vue";
import { mapState } from "vuex";

export default {
  name: "Especies",

  components: {
    Card,
  },

  computed: {
    ...mapState(["especies", "log"]),
  },
};
</script>
