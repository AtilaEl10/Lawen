<template>
  <div class="home">
    <header class="header">
      <b-carousel id="carousel-fade" fade indicators>
        <b-carousel-slide
          img-src="https://firebasestorage.googleapis.com/v0/b/proyecto-abejas-9bc20.appspot.com/o/slides-01.jpg?alt=media&token=c981b6a0-b425-491b-8fbe-7d52b00166a8"
        >
        <div class="text_title">
          <h1 class="fw-bold">ABEJAS NATIVAS</h1>
          <h4>Las grandes Polinizadoras de Chile</h4>
        </div>
          <div class="col-md-6 px-4 py-3">
          </div>
        </b-carousel-slide>
        <b-carousel-slide
          img-src="https://firebasestorage.googleapis.com/v0/b/proyecto-abejas-9bc20.appspot.com/o/slides-02.jpg?alt=media&token=60661cd4-0ee1-437f-acb5-9b62dd7ea06f"
        >
        <div class="text_title">
          <h1 class="fw-bold">ABEJAS NATIVAS</h1>
          <h4>Las grandes Polinizadoras de Chile</h4>
        </div>
          <div class="col-md-6 px-4 py-3">
          </div>
        </b-carousel-slide>
        <b-carousel-slide
          img-src="https://firebasestorage.googleapis.com/v0/b/proyecto-abejas-9bc20.appspot.com/o/slides-03.jpg?alt=media&token=5679a5fb-f52b-4228-bb58-acc89d77159f"
        >
        <div class="text_title">
          <h1 class="fw-bold">ABEJAS NATIVAS</h1>
          <h4>Las grandes Polinizadoras de Chile</h4>
        </div>
          <div class="col-md-6 px-4 py-3">
          </div>
        </b-carousel-slide>
      </b-carousel>
    </header>

    <section>
        <b-container>
          <b-row class="py-5 mb-4">
            <b-col cols="12">
              <h2 class="fw-bold mb-md-5">¿POR QUÉ SON TAN IMPORTANTE LAS ABEJAS?</h2>
            </b-col>
            <b-col cols="12" md="7" class="p-3">
              <p class="text-md-start text-center">
                Las abejas cumplen un rol fundamental en los ecosistemas: polinizan
                plantas con flores, es decir, trasladan el polen permitiendo que
                este fecunde a la flor, por lo que aseguran la reproducción de
                frutos y semillas, cuestión fundamental para la alimentación de
                miles de especies de todo el planeta, incluyéndonos. Es por esto
                que, tras la conmemoración del Día Mundial de las Abejas, te
                preguntamos: ¿sabes cómo son las especies de abejas que existen en
                Chile?
              </p>
            </b-col>
            <b-col cols="12" md="5" class="p-5 abejacol">
            </b-col>
          </b-row>
        </b-container>
    </section>

    <section class="section my-4">
      <b-container>
        <b-row>
          <b-col cols="12" md="7">
            <b-row class="p-3 p-md-5 ">
              <b-col cols="6">
                <h4 class="section_numero fw-bold">90%</h4>
                <h5 class="fw-bold">CULTIVOS</h5>
                <p class="bg-dark p-1">Que pueden llegar a polinizar</p>
              </b-col>
              <b-col cols="6">
                <h4 class="section_numero fw-bold">463</h4>
                <h5 class="fw-bold">ESPECIES</h5>
                <p class="bg-dark p-1">Se han registrado en Chile</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" md="5" style="background-color:#221D23">
            <p class="p-4 p-md-5 text-md-start text-center">Las abejas nativas viven en el suelo o en agujeros abandonados por otros insectos y no producen miel. Son solitarias -como la mayoría de las especies en el planeta- pero gregarias, en otras palabras, establecen zonas de nidificación. Son pacíficas y su picadura es leve principalmente porque no viven en torno a una reina que deban defender. Y por sobre todo, son las mejores polinizadoras.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <hr class="my-5">

    <section class="section_vs my-5">
      <b-container class="section_vs_bg">
        <b-col>.</b-col>
        <div class="my-3" style="background-color:#221d23d8">
          <h2 class="py-4 fw-bold">Abeja Nativa y Melífera</h2>
          <b-row>
            <b-col cols="12" md="6">
              <h5 class="fw-bold pt-3">ABEJA NATIVA</h5>
              <ul class="p-3">
                <li>Son muy variadas, tanto en tamaños, colores y formas</li>
                <li>Suelen ser solitarias</li>
                <li class="py-2"><img class="img-fluid" src="../assets/icon-01.png" alt="icono abeja sola"></li>
                <li>Habitan de Arica a Tierra del Fuego, en territorio continental e insular</li>
                <li>Nidifican en el suelo, troncos, tallos y otros</li>
                <li><img src="../assets/icon-04.png" alt="icono suelo"></li>
                <li>Cada vez están mas Amenazadas</li>
              </ul>
            <hr class="d-md-none">
            </b-col>
            <b-col cols="12" md="6">
              <h5 class="fw-bold pt-3">ABEJA DE LA MIEL</h5>
              <ul class="p-3">
                <li>Es de color naranja y marrón con líneas negras</li>
                <li>Forman grandes enjambres</li>
                <li class="py-2"><img class="img-fluid" src="../assets/icon-02.png" alt="icono abeja"></li>
                <li>Nativas de Asia, Europa y África, Introducidas en Chile</li>
                <li>Viven en colmenas y en grandes familias</li>
                <li><img src="../assets/icon-03.png" alt="icono panal"></li>
                <li>Son famosas por fabricar miel</li>
              </ul>
            </b-col>
            <b-col cols="12" md="8" class="mx-auto pb-4">
              <h5 class="fw-bold px-5">NO PRODUCEN MIEL PERO LA MAYORÍA DE LA FLORA NATIVA SIGUE EXISTIENDO GRACIAS A ELLAS, SON LAS POLINIZADORAS MÁS EFICIENTES DE LA AGRICULTURA</h5>
              <b-button class="mx-4 col-10 mt-3 btn_primary fw-bold text-dark" to="/especies">Conóce las distintas especies</b-button>
            </b-col>
          </b-row>
        </div>
        <b-col>.</b-col>
      </b-container>
    </section>

    <section class="section_help mt-3">
      <h2 class="fw-bold pt-5 display-5">LAS ABEJAS NATIVAS ESTÁN EN PELIGRO</h2>
      <h5 class="display-6 fw-bold">¿CÓMO AYUDARLAS?</h5>
      <b-button variant="dark" class="text-white my-3 px-3" style="border-radius:25px" to="/ayuda">Formas de ayudar</b-button>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    //
  },
};
</script>

<style scoped>
    h1 {
      font-size: 50px;
    }
    .header {
      padding-top: 0;
    }

    .abejacol {
      background-image: url('../assets/img1.jpg');
      background-size: cover;
      background-position: center;
    }
    .section {
      background-image: url('../assets/Fondos-03.png');
      background-size: contain;
      background-position: center;
    }
    .section_numero {
      font-family: "Roboto Condensed", sans-serif; 
      font-size:120px
    }
    h5 {
      font-family: "Roboto Condensed", sans-serif; 
    }
    .section_vs {
      background-image: url('../assets/Fondos-02.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .section_vs_bg {
      padding-top:260px
    }
    ul {
      list-style: none;
    }
    .btn_primary {
      background-color: #f58b13;
      border-radius: 25px;
    }
    .btn_primary:hover, .btn_primary:focus  {
      background-color: #cc6f05;
    }
    .section_help {
      background-color: #f58b13;
    }
  @media only screen and (max-width: 991px) {
      .section_numero {
      font-size:90px;
    }
  }
  @media only screen and (max-width: 767px) {
    .header {
      padding-top: 80px;
    }
    .text_title{
      display: none;
    }
    p {
      font-size: .8rem;
    }
    .abejacol {
      height: 250px;
      background-position: center;
    }
    .section_numero {
      font-size:70px
    }
    .section_vs {
      background-size: cover;
      background-position: center;
      background-repeat: repeat;
    }
    .section_vs_bg {
      padding-top:20px
    }
    li {
      font-size: 13px;
    }
  }
</style>
