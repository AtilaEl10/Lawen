<template>
  <div v-if="abeja">
    <b-container class="my-5">
      <b-row class="pt-5">
        <b-col cols="12" md="5" class="mt-5">
          <div>
            <img class="img-fluid" :src="abeja.img" alt="" />
          </div>
          <b-button
            v-if="log"
            @click="
              registrarAbeja({
                id: abeja.id,
                img: abeja.img,
                nombre: abeja.nombre,
                nombrecien: abeja.nombrecien,
                orden: abeja.orden,
                familia: abeja.familia,
                caracteristicas: abeja.caracteristicas,
                habitat: abeja.habitat,
              })
            "
            class="mx-4 col-10 mt-3"
            href="#"
            variant="warning"
            >Agregar al Registro</b-button
          >
        </b-col>
        <b-col cols="12" md="7" class="mt-5">
          <div>
            <b-tabs content-class="mt-3" v-model="tabIndex">
              <b-tab title="Generales" active :title-link-class="linkClass(0)">
                <div class="text-start mt-3">
                  <h2 class="fw-bold">{{ abeja.nombre }}</h2>
                  <h4 class="fst-italic">{{ abeja.nombrecien }}</h4>
                  <hr />
                </div>
                <b-row class="text-start">
                  <b-col cols="6">
                    <h5 class="fw-bold">
                      Orden:
                      <span class="fst-italic fw-normal">{{
                        abeja.orden
                      }}</span>
                    </h5>
                  </b-col>
                  <b-col cols="6">
                    <h5 class="fw-bold">
                      Familia:
                      <span class="fst-italic fw-normal">{{
                        abeja.familia
                      }}</span>
                    </h5>
                  </b-col>
                </b-row>
                <b-row class="mt-4">
                  <b-col cols="6" class="mx-auto mt-2">
                    <img
                      src="../assets/sm.png"
                      alt="sm"
                      style="max-width: 30%"
                      class="img-fluid mx-auto mb-2"
                      v-if="abeja.tamano === 'Pequeño'"
                    />
                    <img
                      src="../assets/md.png"
                      alt="md"
                      style="max-width: 30%"
                      class="img-fluid mx-auto mb-2"
                      v-if="abeja.tamano === 'Mediano'"
                    />
                    <img
                      src="../assets/lg.png"
                      alt="lg"
                      style="max-width: 30%"
                      class="img-fluid mx-auto mb-2"
                      v-if="abeja.tamano === 'Grande'"
                    />
                    <h5>
                      Tamaño: <strong>{{ abeja.tamano }}</strong>
                    </h5>
                  </b-col>
                  <b-col
                    cols="6"
                    class="hide mx-auto mt-2"
                    :class="{ show: abeja.peligro }"
                  >
                    <img
                      src="../assets/danger.png"
                      alt="danger"
                      style="max-width: 35%"
                      class="img-fluid mx-auto mb-2"
                    />
                    <h5><strong>EN PELIGRO</strong></h5>
                  </b-col>

                  <b-row class="mt-5">
                    <h6 class="text-center">
                      <strong>Meses en los que esta activa</strong>
                    </h6>
                    <div class="mt-4 text-center">
                      <span
                        class="col-1 pe-1 pe-md-2 py-1"
                        :class="{ mes: abeja.meses.enero }"
                        >Ene</span
                      >
                      <span
                        class="col-1 pe-1 pe-md-2 py-1"
                        :class="{ mes: abeja.meses.febrero }"
                        >Feb</span
                      >
                      <span
                        class="col-1 pe-1 pe-md-2 py-1"
                        :class="{ mes: abeja.meses.marzo }"
                        >Mar</span
                      >
                      <span
                        class="col-1 pe-1 pe-md-2 py-1"
                        :class="{ mes: abeja.meses.abril }"
                        >Abr</span
                      >
                      <span
                        class="col-1 pe-1 pe-md-2 py-1"
                        :class="{ mes: abeja.meses.mayo }"
                        >May</span
                      >
                      <span
                        class="col-1 pe-1 pe-md-2 py-1"
                        :class="{ mes: abeja.meses.junio }"
                        >Jun</span
                      >
                      <span
                        class="col-1 pe-1 pe-md-2 py-1"
                        :class="{ mes: abeja.meses.julio }"
                        >Jul</span
                      >
                      <span
                        class="col-1 pe-1 pe-md-2 py-1"
                        :class="{ mes: abeja.meses.agosto }"
                        >Ago</span
                      >
                      <span
                        class="col-1 pe-1 pe-md-2 py-1"
                        :class="{ mes: abeja.meses.septiembre }"
                        >Sep</span
                      >
                      <span
                        class="col-1 pe-1 pe-md-2 py-1"
                        :class="{ mes: abeja.meses.octubre }"
                        >Oct</span
                      >
                      <span
                        class="col-1 pe-1 pe-md-2 py-1"
                        :class="{ mes: abeja.meses.noviembre }"
                        >Nov</span
                      >
                      <span
                        class="col-1 pe-1 pe-md-2 py-1"
                        :class="{ mes: abeja.meses.diciembre }"
                        >Dic</span
                      >
                    </div>
                  </b-row>
                </b-row>
              </b-tab>

              <b-tab title="Características" :title-link-class="linkClass(1)">
                <div class="text-start">
                  <h5 class="fw-bold">CARACTERISTICAS:</h5>
                  <p>{{ abeja.caracteristicas }}</p>
                  <h5 class="fw-bold">NIDO</h5>
                  <p>{{ abeja.habitat }}</p>
                  <h5 class="fw-bold">FLORES EN LAS QUE SE ALIMENTA</h5>
                  <p>{{ abeja.alimento }}</p>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </b-col>
      </b-row>
      <hr />
    </b-container>
    <h2 class="fw-bold">Galería de Registros</h2>
    <br />
    <div v-if="abejasFiltradas.length > 0">
      <b-container class="mb-4 d-flex">
        <b-carousel
          id="carousel-1"
          fade
          indicators
          style="text-shadow: 1px 1px 2px #333"
          class="col-5 px-3"
        >
          <!-- Text slides with image -->
          <b-col
            cols="12"
            v-for="(abejaRegistrada, i) in abejasFiltradas"
            :key="i"
          >
            <a @click="$bvModal.show(abejaRegistrada.id)">
              <b-carousel-slide
                class="px-2"
                :img-src="abejaRegistrada.linkImg"
                style="cursor: pointer"
                img-class=" img-fluid"
              >
              </b-carousel-slide
            ></a>
            <b-modal
              :id="abejaRegistrada.id"
              hide-footer
              hide-header
              body-class="bg-dark"
            >
              <b-col
                cols="12"
                class="m-auto border rounded-2 p-5 shadow bg-light bee"
              >
                <img :src="abejaRegistrada.linkImg" class="img-fluid" />
                <p>
                  {{ abejaRegistrada.ubicacion.ref }},
                  {{ abejaRegistrada.ubicacion.comuna }},
                  {{ abejaRegistrada.ubicacion.region }}
                </p>
                <b-button
                  @click="$bvModal.hide(abejaRegistrada.id)"
                  type="button"
                  variant="success"
                  class="mt-4 col-12"
                  >Cerrar</b-button
                >
                <b-button @click="borrarImg(abejaRegistrada)" type="button" variant="danger" class="mt-4 col-12">Eliminar imagen</b-button>
              </b-col>
            </b-modal>
          </b-col>
        </b-carousel>
        <b-col cols="7">
          <b-row>
            <b-col
              cols="3"
              v-for="(abejaRegistrada, i) in abejasFiltradas"
              :key="i"
              style="height: 150px"
            >
              <a @click="$bvModal.show(abejaRegistrada.id)">
                <img
                  :src="abejaRegistrada.linkImg"
                  class="d-block w-100 img-fluid"
                  style="object-fit: cover"
                />
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-container>
    </div>
    <div v-else class="mb-5">
      <h3 class="mb-4">
        Aún no se han registrado reportes de esta especie, sé el primero
      </h3>
      <b-button
        v-if="log"
        @click="
          registrarAbeja({
            id: abeja.id,
            img: abeja.img,
            nombre: abeja.nombre,
            nombrecien: abeja.nombrecien,
            orden: abeja.orden,
            familia: abeja.familia,
            caracteristicas: abeja.caracteristicas,
            habitat: abeja.habitat,
          })
        "
        class="mx-auto col-6 mt-3"
        variant="warning"
        >Agregar al Registro</b-button
      >
      <b-button v-else variant="warning"
        >Solo los usuarios registrados pueden añadir imágenes</b-button
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Abejas",
  data() {
    return {
      tabIndex: 0,
    };
  },

  computed: {
    // Tomar paginas dinamicas
    abeja() {
      let Store = this.$store.state.especies;
      const abeja = Store.filter(
        (filter) => filter.id === this.$route.params.id
      )[0];
      return abeja;
    },

    abejasFiltradas() {
      const abejasFiltradas = this.registroAbejas.filter(
        (abeja) => abeja.registroId === this.abeja.id
      );
      return !abejasFiltradas ? [] : abejasFiltradas;
    },

    ...mapState(["especies", "registroAbejas", "log"]),
  },

  methods: {
    ...mapMutations(["registrarAbeja"]),
    ...mapActions(["borrarRegistro", "getRegistro"]),

    borrarImg(registro){
      this.borrarRegistro(registro)
      this.registroAbejas = []
      this.getRegistro();
    },


    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["bg-light", "text-dark"];
      } else {
        return ["text-light"];
      }
    },
  },
};
</script>

<style scoped>
.bee {
  font-family: "Roboto Condensed", sans-serif;
}
span {
  font-family: "Roboto Condensed", sans-serif;
}
.tab_title {
  color: white;
}

.hide {
  display: none;
}
.show {
  display: block;
}
.mes {
  background-color: #fb422e46;
}
.bee {
  font-family: "Roboto Condensed", sans-serif;
  background-image: url("../assets/card.jpg");
}
</style>
