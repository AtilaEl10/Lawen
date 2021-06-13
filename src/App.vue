<template>
  <div id="app">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: "App",
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #221D23;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
h1, h2, h3 {
  font-family: 'Maven Pro', sans-serif;
}
</style>
