<template>
  <b-modal
    id="bv-modal-example3"
    size="xl"
    hide-footer
    hide-header
    body-class="bg-dark"
  >
    <b-col
      cols="12"
      class="text-white text-start mx-auto mt-5 bg-dark p-4 rounded-3 shadow"
    >
      <h2 class="text-white fw-bold">Reportar Registro</h2>
      <p>
        En caso de que hayas presenciado el avistamiento de esta abeja, te
        pedimos que puedas reportarlo, agregando la ubicación del encuentro(lo
        mas exacta posible) y el link de alguna imagen que hayas podido tomar de
        la abeja
      </p>
      <p>
        Esto es para poder hacer un seguimiento de las especies y donde estas se
        ubican, para tomar futuras medidas para su conservación y protección
      </p>
      <b-row>
        <b-col cols="12" md="6">
          <label class="mt-3 mb-2">Punto de Referencia</label>
          <b-form-input
            v-model="registro.ubicacion.ref"
            placeholder="Ej. Cerro San Cristobal, parque Manquehue"
          ></b-form-input>
        </b-col>
        <b-col cols="12" md="6">
          <label class="mt-3 mb-2">Comuna</label>
          <b-form-input
            v-model="registro.ubicacion.comuna"
            placeholder="Ej. Santiago, Peñalolen"
          ></b-form-input>
        </b-col>
        <b-col cols="12" md="6">
          <label class="mt-3 col-12">Región</label>
          <b-form-select
            v-model="registro.ubicacion.region"
            :options="options"
            class="col-12 h-50"
          ></b-form-select>
        </b-col>
        <b-col cols="12" md="6">
          <label class="mt-3">URL Imagen</label>
          <b-form-input v-model="registro.linkImg"></b-form-input>
        </b-col>
        <b-col cols="8">
          <b-button
            @click="agregar(), $bvModal.hide('bv-modal-example3')"
            class="mt-4 col-12"
            variant="success"
            >Aceptar</b-button
          >
        </b-col>
        <b-col cols="4">
          <b-button
            @click="$bvModal.hide('bv-modal-example3')"
            class="mt-4"
            variant="danger col-12"
            >Cancelar</b-button
          >
        </b-col>
      </b-row>
    </b-col>
  </b-modal>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "EditForm",

  data() {
    return {
      options: [
        { value: null, text: "Selecciona una Región" },
        {
          value: "Región de Arica y Parinacota",
          text: "Región de Arica y Parinacota",
        },
        { value: "Región de Tarapacá", text: "Región de Tarapacá" },
        { value: "Región de Antofagasta", text: "Región de Antofagasta" },
        { value: "Región de Atacama", text: "Región de Atacama" },
        { value: "Región de Coquimbo", text: "Región de Coquimbo" },
        { value: "Región de Valparaíso", text: "Región de Valparaíso" },
        {
          value: "Región Metropolitana de Santiago",
          text: "Región Metropolitana de Santiago",
        },
        {
          value: "Región del Libertador General Bernardo O’Higgins",
          text: "Región del Libertador General Bernardo O’Higgins",
        },
        { value: "Región del Maule", text: "Región del Maule" },
        { value: "Región del Ñuble", text: "Región del Ñuble" },
        { value: "Región del Biobío", text: "Región del Biobío" },
        { value: "Región de La Araucanía", text: "Región de La Araucanía" },
        { value: "Región de Los Ríos", text: "Región de Los Ríos" },
        { value: "Región de Los Lagos", text: "Región de Los Lagos" },
        {
          value: "Región de Aysén del General Carlos Ibáñez del Campo",
          text: "Región de Aysén del General Carlos Ibáñez del Campo",
        },
        {
          value: "Región de Magallanes y la Antártica Chilena",
          text: "Región de Magallanes y la Antártica Chilena",
        },
      ],
    };
  },

  methods: {
    ...mapActions(["agregarRegistro", "getRegistro"]),
    agregar() {
      if(!this.registro.ubicacion.ref || !this.registro.ubicacion.comuna || !this.registro.ubicacion.region || !this.registro.linkImg){
        alert("Debes llenar todos los campos para poder registrarla")
      }else {
        const result = confirm("¿Seguro que quieres aregar esta imagen al Registro de la Abeja?")
        if (result === true) {
          const registro = this.registro;
          this.agregarRegistro(registro);
          this.registro.ubicacion.ref = ""
          this.registro.ubicacion.comuna = ""
          this.registro.ubicacion.region = ""
          this.registro.linkImg = ""
          this.getRegistro();
        }
      }

    },
  },
  computed: {
    ...mapState(["registro"]),
  },
};
</script>

<style scoped>
p {
  font-family: "Roboto Condensed", sans-serif;
}
</style>
