<!-- Navbar.vue -->
<template>
  <!-- Menú Desplegable -->
  <ion-menu side="start" menu-id="first" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menú</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item @click="reservar">Reservar</ion-item>
        <ion-item @click="iniciarSesion">Iniciar sesión</ion-item>
        <ion-item @click="registrar">Registrarse</ion-item>
        <ion-item @click="historialReservas">Historial de reservas</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <!-- Barra de navegación -->
  <ion-header id="main-content">
    <ion-toolbar>
      <!-- Botón desplegable (menú) a la izquierda -->
      <ion-buttons slot="start">
        <ion-menu-button menu="first"></ion-menu-button>
        <!-- Usar router-link para navegación -->
        <router-link to="/home" class="navbar-title">
          <ion-button fill="clear">
            <ion-title>Hotel Luxor</ion-title>
          </ion-button>
        </router-link>
      </ion-buttons>

      <!-- Botones centrados -->
      <ion-buttons slot="secondary" class="center-buttons">
        <ion-button @click="reservar">Reservar</ion-button>
        <ion-button @click="viajar">Viajar</ion-button>
      </ion-buttons>

      <!-- Botón de Iniciar sesión a la derecha -->
      <ion-buttons slot="end">
        <ion-button @click="iniciarSesion">Iniciar sesión</ion-button>
        <ion-button @click="registrar">Registrarse</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    reservar() {
      this.$router.push('/reserva');
    },
    viajar() {
      this.$router.push('/viajar');
    },
    iniciarSesion() {
      this.$router.push('/login');
    },
    recuperarCuenta() {
      this.$router.push('/recover-account');
    },
    historialReservas() {
      this.$router.push('/reservation-history');
    },
    registrar() {
      this.$router.push('/register');
    },
  },
};
</script>

<style scoped>
.navbar-title {
  text-decoration: none;
  color: inherit;
}
.center-buttons {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
