<template>
  <b-col cols md="6" lg="4" sm="8" class="text-dark mx-auto my-5">
    <b-card
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2 bee"
      style="height: 100%"
    >
    <div class="img_container">
      <img class="img-fluid" :src="img" />
    </div>
      <h4 class="fw-bold pt-4">{{ nombre }}</h4>
      <p class="fst-italic">{{ nombrecien }}</p>
      <b-row>
        <b-col cols="6">
          <h5 class="fw-bold">
            Orden <span class="fst-italic fw-normal">{{ orden }}</span>
          </h5>
        </b-col>
        <b-col cols="6">
          <h5 class="fw-bold">
            Familia <span class="fst-italic fw-normal">{{ familia }}</span>
          </h5>
        </b-col>
        <b-col cols="6" class="mx-auto mt-2">
          <img
            src="../assets/sm.png"
            alt="sm"
            style="max-width: 40%"
            class="img-fluid mx-auto mb-2"
            v-if="tamano === 'Pequeño'"
          />
          <img
            src="../assets/md.png"
            alt="md"
            style="max-width: 40%"
            class="img-fluid mx-auto mb-2"
            v-if="tamano === 'Mediano'"
          />
          <img
            src="../assets/lg.png"
            alt="lg"
            style="max-width: 40%"
            class="img-fluid mx-auto mb-2"
            v-if="tamano === 'Grande'"
          />
          <h5>
            Tamaño: <strong>{{ tamano }}</strong>
          </h5>
        </b-col>
        <b-col cols="6" class="hide mx-auto mt-2" :class="{ show: peligro }">
          <img
            src="../assets/danger.png"
            alt="danger"
            style="max-width: 46%"
            class="img-fluid mx-auto mb-2"
          />
          <h5><strong>EN PELIGRO</strong></h5>
        </b-col>
      </b-row>
      <div class="mt-3 align-self-end">
        <router-link
          class="mx-4 text-success"
          :to="{ name: 'Abejas', params: { id: id } }"
          variant="primary"
          >Mas información</router-link
        >
        <b-button
          v-if="log"
          @click="
            registrarAbeja({
              id: id,
              img: img,
              nombre: nombre,
              nombrecien: nombrecien,
              orden: orden,
              familia: familia,
              caracteristicas: caracteristicas,
              habitat: habitat,
            }), 
            getAbejaFirebase()
          "
          v-b-tooltip.hover
          title="Haz click para agregar al registro"
          class="btn_primary mx-4 col-10 mt-3 text-white fw-bold"
          variant="warning"
          >Agregar al Registro</b-button
        >
      </div>
    </b-card>
  </b-col>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "Card",
  props: {
    id: {
      type: String,
    },
    img: {
      type: String,
    },
    nombre: {
      type: String,
    },
    nombrecien: {
      type: String,
    },
    orden: {
      type: String,
    },
    familia: {
      type: String,
    },
    peligro: {
      type: Boolean,
    },
    tamano: {
      type: String,
    },
    caracteristicas: {
      type: String,
    },
    habitat: {
      type: String,
    },
    log: {
      type: Boolean,
    },
  },
  methods: {
    ...mapMutations(["registrarAbeja"]),
    ...mapActions(["getAbejaFirebase"]),

  },
};
</script>

<style scoped>
/* cards */
.bee {
  font-family: "Roboto Condensed", sans-serif;
  background-image: url("../assets/card.jpg");
}
span {
  letter-spacing: -1px;
}
.hide {
  display: none;
}
.show {
  display: block;
}
.img_container img {
  height: 300px;
  width: 100%;
  object-fit: cover;
}
    .btn_primary {
      background-color: #f58b13;
      border-radius: 25px;
      border: 0;
    }
    .btn_primary:hover, .btn_primary:focus  {
      background-color: #cc6f05;
    }
  @media only screen and (max-width: 770px) {
.img_container img {
  height: auto;
  object-fit: fill;
}
  
}

</style>
