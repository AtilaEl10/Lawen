<template>
    <div>
        <b-container>
            <h2 class="mt-5 pt-5 display-2 fw-bold">UPS!</h2>
            <img src="https://static.wixstatic.com/media/95a9c0_a6b24b295997469980874ee6aa059636~mv2.gif" alt="abeja gif">
            <h2 class="pt-5 display-3 fw-bold">Parece que la página que buscas no se existe :(</h2>

            <h4 class="mt-5">Pero puedes seguir navegando:</h4>
            <b-row class="my-5 pt-5">
                <b-col cols="12" md="4">
                    <b-button class="btn_primary col-9 p-2" to="/">Volver al Inicio</b-button>
                </b-col>
                <b-col cols="12" md="4">
                    <b-button class="btn_secundary col-9 p-2" to="/especies">Cónoce las distintas especies</b-button>
                </b-col>
                <b-col cols="12" md="4">
                    <b-button class="btn_third col-9 p-2" variant="success" to="/registro">Ver mi Registro</b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>
    .btn_primary {
      background-color: #f58b13;
      border-radius: 25px;
    }
    .btn_primary:hover, .btn_primary:focus  {
      background-color: #cc6f05;
    }
        .btn_secundary {
      background-color: #e04a1c;
      border-radius: 25px;
      border: 0;
    }
    .btn_third {
      border-radius: 25px;
      border: 0;

    }
</style>