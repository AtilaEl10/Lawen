<template>
    <div>
        <b-navbar class="navbar-dark px-5 fixed-top" toggleable="sm">

            <b-navbar-brand>
                <router-link class="fw-bold nav-link nav_text" to="/">Lawen</router-link>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
            <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav class="ms-auto">
                <b-nav-text>
                    <router-link class="nav-link text-warning nav_text mx-1" to="/">Inicio</router-link>
                </b-nav-text>
                <b-nav-text>
                    <router-link class="nav-link text-warning nav_text mx-1" to="/especies">Especies</router-link>
                </b-nav-text>
                <b-nav-text>
                    <router-link class="nav-link text-warning nav_text mx-1" to="/ayuda">¿Cómo ayudar?</router-link>
                </b-nav-text>
                <!--Agregar un v-if para esta opcion-->
                <b-nav-text>
                    <router-link class="nav-link text-warning nav_text mx-1" to="/registro">Mi registro</router-link>
                </b-nav-text>
                <b-nav-text>
                    <!--Agregar un v-if para esta opcion-->
                    <b-button @click="logout()" v-if="logueado" class="btn_log px-3 ms-3 text-dark fw-bold">Cerrar Sesión</b-button>
                    <!--Agregar un v-else para esta opcion-->
                    <b-button @click="login()" v-else class="btn_log px-3 ms-3 text-dark fw-bold">Iniciar Sesión</b-button>
                </b-nav-text>
            </b-navbar-nav>
            </b-collapse>
            
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "Nav"
}
</script>

<style scoped>
    nav {
        opacity: 0.85;
        background-color: #121013;
    }
    .nav_text {
        color: #FEBA0C;
    }
    .btn_log {
        background-color: #FEBA0C;
        border-radius: 25px;
    }
    .btn_log:hover {
        background-color: #F5D52E;
    }

</style>
