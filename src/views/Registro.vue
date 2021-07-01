<template>
  <div class="about pb-5">
    <header class="py-4">
      <h2 class="display-6 mt-5 pt-5 fw-bold">MI REGISTRO DE ABEJAS</h2>
      <b-col cols="8 mx-auto pb-5">
        <p class="rounded mt-5 p-2 bg-dark">
          Acá encontrarás las abejas que has podido avistar, puedes agregar mas información de cada una, ingresando la imagen y el lugar en dónde la encontraste
        </p>
      </b-col>
    </header>
    <section>
      <b-container class="mt-5">
        <b-row v-if="registradas.length > 0">
          <!--Información de abejas registradas-->
          <b-col
            cols="12"
            lg="10"
            class="mx-auto my-4"
            v-for="(misAbejas, i) in registradas"
            :key="i"
          >
            <b-card no-body class="overflow-hidden image text-dark">
              <b-row no-gutters>
                <b-col md="5" class="d-flex image">
                  <img
                    :src="misAbejas.img"
                    alt="Image"
                    class="img-fluid align-self-center"
                  />
                </b-col>
                <b-col md="7">
                  <b-card-body class="bee text-start h-100">
                    <h4 class="fw-bold pt-3">{{ misAbejas.nombre }}</h4>
                    <p class="fst-italic">{{ misAbejas.nombrecien }}</p>
                    <b-row>
                      <b-col cols="6">
                        <h5 class="fw-bold">
                          Orden
                          <span class="fst-italic fw-normal">{{
                            misAbejas.orden
                          }}</span>
                        </h5>
                      </b-col>
                      <b-col cols="6">
                        <h5 class="fw-bold">
                          Familia
                          <span class="fst-italic fw-normal">{{
                            misAbejas.familia
                          }}</span>
                        </h5>
                      </b-col>
                    </b-row>
                    <b-card-text>
                      <strong>CARACTERISTICAS: </strong>
                      {{ misAbejas.caracteristicas }}
                      <br />
                      <strong>NIDO: </strong> {{ misAbejas.habitat }}
                    </b-card-text>
                    <div class="mt-3">
                        <router-link
                          class="mx-auto text-success"
                          :to="{ name: 'Abejas', params: { id: misAbejas.abejaId } }"
                          variant="primary"
                          >Mas información</router-link
                        >
                      <b-row class="mt-5 mb-3">
                        <b-col cols="10" md="5" class="mb-3 mx-auto">
                          <b-button
                            @click="
                              agregarInfo({id: misAbejas.abejaId }),
                                $bvModal.show('bv-modal-example3')
                            "
                            class="col-12"
                            variant="dark"
                            v-b-tooltip.hover
                            title="Haz click para añadir información"
                            >Reportar avistamiento</b-button
                          >
                        </b-col>
                        <b-col cols="10" md="5" class="mb-3 mx-auto">
                          <b-button @click="borrarAbeja(misAbejas)" class="col-12" variant="danger"           
                          v-b-tooltip.hover
                          title="Haz click para eliminar de tu lista de Registros">Eliminar del Registro</b-button>
                        </b-col>
                      </b-row>
                    </div>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
            <EditForm />
          </b-col>
        </b-row>
        <b-row v-else>
          <b-col cols="12" md="10" class="mx-auto">
            <h2 class="fw-bold display-6">Aún no has registrado ninguna abeja</h2>
            <h3 class="my-4">Recuerda que si lográs avistar alguna, ve a la pestaña de especies y accede al botón de "Registrar Abeja"</h3>
            <h4>Luego vuelve a esta pestaña para añadirle contenido adicional</h4>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import EditForm from "../components/EditForm.vue";

export default {
  name: "Registro",
  data() {
    return {
      // editar: false
    };
  },
  components: {
    EditForm,
  },

  computed: {
    ...mapState(["registradas"]),
  },
  methods: {
    ...mapMutations(["agregarInfo"]),
    ...mapActions(["borrarAbejas"]),

    borrarAbeja(abeja){
      const result = confirm("¿Seguro que quieres eliminar esta abeja de tu registro?")
      if (result === true) {
        this.borrarAbejas(abeja)
      }
    }
  },
};
</script>

<style scoped>
header {
  background-image: url("../assets/img3.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
