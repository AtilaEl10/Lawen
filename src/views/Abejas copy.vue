<template>
    <div>
        <b-container class="my-5">
            <b-row class="pt-5 bee">
                <b-col cols="12" md="5">
                    <div>
                        <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/proyecto-abejas-9bc20.appspot.com/o/bee001.jpg?alt=media&token=1979ca96-d254-4afa-933b-3c57ec0e15c2" alt="">
                    </div>
                </b-col>
                <b-col cols="12" md="7">
                    <div class="text-start mt-3">
                        <h2 class="fw-bold">ABEJA MINERA</h2>  
                        <h3 class="fst-italic">Acamptopoeum submetallicum (Spinola, 1851)</h3>
                        <hr>
                    </div>
                    <b-row class="text-start">
                        <b-col cols="6">
                            <h5 class="fw-bold">Orden <span class="fst-italic fw-normal">Hymenoptera</span> </h5>
                        </b-col>
                        <b-col cols="6">
                            <h5 class="fw-bold">Familia <span class="fst-italic fw-normal">Andrenidae</span> </h5>
                        </b-col>
                    </b-row>
                        <hr>
                    <div class="text-start">
                        <h5 class="fw-bold">CARACTERISTICAS: </h5>
                        <p>"Presenta pilosidad amarilla en todo el tórax y en pequeñas franjas en el abdomen, las que se alternan con franjas sin pilosidad con destellos azulosos. ",</p>
                        <h5 class="fw-bold">NIDO: </h5>
                        <p>"Hace sus nidos al borde de caminos o en tierra arcillosa. Su nido presenta una galería principal que tiene celdillas de manera alternada.",</p>
                        <h5 class="fw-bold">FLORES EN LAS QUE SE ALIMENTA</h5>
                        <p>"Especie poliléctica, es decir, que colecta polen de muchas especies de plantas. Entre la flora en que se le ha visto polinizando, puede mencionarse: manzanilla (Chamomilla recutita), manzanillón (Chrysanthemum coronarium), huingán (Schinus polygamus), diente de león (Taraxacum officinale), yuyo (Brassica campestris), cardoncillo (Eryngium paniculatum), cardo penquero (Cynara cardunculus), estrella azul de cordillera (Malesherbia linearifolia), Centaurea melitensis, Gnaphalium philippi, Adesmia spp., Baccharis spp., y Haplopappus spp. "</p>
                    </div>
                </b-col>
            </b-row>
            <hr>
            <b-row class="mt-4">
                <b-col cols="6" md="2" class="mx-auto mt-2">
                    <img src="../assets/sm.png" alt="sm" style="max-width: 60%" class="img-fluid mx-auto mb-2" >
                    <img src="../assets/md.png" alt="md" style="max-width: 60%" class="img-fluid mx-auto mb-2" v-if="(tamano === 'Mediano')">
                    <img src="../assets/lg.png" alt="lg" style="max-width: 60%" class="img-fluid mx-auto mb-2" v-if="(tamano === 'Grande')">
                    <h6>Tamaño: <strong>Pequeño</strong></h6> 
                </b-col>
                <b-col cols="6" md="2" class=" mx-auto mt-2" :class="{show: peligro}">
                    <img src="../assets/danger.png" alt="danger" style="max-width: 60%" class="img-fluid mx-auto mb-2">
                    <h6><strong>EN PELIGRO</strong> </h6> 
                </b-col>
                <b-col cols="12" md="8" class="mt-5">
                    <h6 class="text-start"><strong>Meses en los que esta activa</strong> </h6> 
                    <div class="mt-4 meses text-start">
                        <span class="pe-1 p-sm-2" >Ene</span>
                        <span class="pe-1 p-sm-2" >Feb</span>
                        <span class="pe-1 p-sm-2" >Mar</span>
                        <span class="pe-1 p-sm-2" >Abr</span>
                        <span class="pe-1 p-sm-2" >May</span>
                        <span class="pe-1 p-sm-2" >Jun</span>
                        <span class="pe-1 p-sm-2" >Jul</span>
                        <span class="pe-1 p-sm-2" >Ago</span>
                        <span class="pe-1 p-sm-2" >Sep</span>
                        <span class="pe-1 p-sm-2" >Oct</span>
                        <span class="pe-1 p-sm-2" >Nov</span>
                        <span class="pe-1 p-sm-2" >Dic</span>

                        <!--
                        <span class="p-2 me-1" :class="{active: meses.enero}">Ene</span>
                        <span class="p-2 me-1" :class="{active: meses.febrero}">Feb</span>
                        <span class="p-2 me-1" :class="{active: meses.marzo}">Mar</span>
                        <span class="p-2 me-1" :class="{active: meses.abril}">Abr</span>
                        <span class="p-2 me-1" :class="{active: meses.mayo}">May</span>
                        <span class="p-2 me-1" :class="{active: meses.junio}">Jun</span>
                        <span class="p-2 me-1" :class="{active: meses.julio}">Jul</span>
                        <span class="p-2 me-1" :class="{active: meses.agosto}">Ago</span>
                        <span class="p-2 me-1" :class="{active: meses.septiembre}">Sep</span>
                        <span class="p-2 me-1" :class="{active: meses.octubre}">Oct</span>
                        <span class="p-2 me-1" :class="{active: meses.noviembre}">Nov</span>
                        <span class="p-2 me-1" :class="{active: meses.diciembre}">Dic</span>   
                        -->
                    </div>
                </b-col>
                    <b-button 
                        @click="registrarAbeja({id:id, img:img, nombre:nombre, nombrecien:nombrecien, orden:orden, familia:familia, caracteristicas:caracteristicas, habitat:habitat})" 
                        class="mx-auto col-6 mt-5" href="#" variant="warning"
                    >Agregar al Registro</b-button>
            </b-row>
        </b-container>
        <br>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    name: "Abejas",

    computed: {
        ...mapState(["especies"])
    },
}
</script>


<style scoped>
.bee {
        font-family: 'Roboto Condensed', sans-serif;

}
span {
        font-family: 'Roboto Condensed', sans-serif;

}
    p {
        font-size: 13px;
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
</style>