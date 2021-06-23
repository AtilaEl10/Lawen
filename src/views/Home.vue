<template>
  <div class="home">
    <div class="header pt-5">
      <b-carousel id="carousel-fade" fade indicators>
        <b-carousel-slide
          img-src="https://firebasestorage.googleapis.com/v0/b/proyecto-abejas-9bc20.appspot.com/o/slide1%20copia.jpg?alt=media&token=a9e4b3ef-6c71-4b3e-8917-fdbc584332e2"
        >
          <div class="header_slide1 col-md-6 px-4 py-3">
            <h1 class="text-start fw-bold">ABEJAS NATIVAS</h1>
          </div>
        </b-carousel-slide>
        <b-carousel-slide
          img-src="https://firebasestorage.googleapis.com/v0/b/proyecto-abejas-9bc20.appspot.com/o/slide2%20copia.jpg?alt=media&token=0d85c367-ef35-48ca-8ac2-00f33f94cde9"
        >
          <div class="header_slide2 col-md-6 px-4 py-3">
            <h2 class="text-start fw-bold">CONOCE LAS DISTINTAS ESPECIES</h2>
          </div>
        </b-carousel-slide>
        <b-carousel-slide
          img-src="https://firebasestorage.googleapis.com/v0/b/proyecto-abejas-9bc20.appspot.com/o/slide3%20copia.jpg?alt=media&token=90a01f8c-c023-4638-8879-920cee86e2da"
        >
          <div class="header_slide3 col-md-6 px-4 py-3">
            <h2 class="text-start fw-bold">REGISTRATE PARA APORTAR IMÁGENES</h2>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <b-container>
      <b-row class="py-5">
        <b-col cols="12">
          <h2 class="fw-bold">¿POR QUÉ SON TAN IMPORTANTE LAS ABEJAS?</h2>
        </b-col>
        <b-col cols="6" class="p-5">
          <p class="text-start">
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
        <b-col cols="6" class="p-5">
          <img class="img-fluid" src="../assets/img3.jpg" alt="" />
        </b-col>
      </b-row>
    </b-container>
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
.header {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/proyecto-abejas-9bc20.appspot.com/o/slide1%20copia.jpg?alt=media&token=a9e4b3ef-6c71-4b3e-8917-fdbc584332e2");
  background-size: cover;
}
.header_slide1 {
  background-color: #f5d42e4b;
}
.header_slide2 {
  background-color: #fb422e46;
}
.header_slide3 {
  background-color: #0ab1124b;
}
</style>
