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
          <ion-item @click="viajar">Viajar</ion-item>
          <ion-item @click="iniciarSesion">Iniciar sesión</ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
  
    <!-- Barra de navegación -->
    <ion-header id="main-content">
      <ion-toolbar>
        <!-- Botón desplegable (menú) a la izquierda -->
        <ion-buttons slot="start">
          <ion-menu-button menu="first"></ion-menu-button>
          <ion-title>Hotel Luxor</ion-title>
        </ion-buttons>
  
        <!-- Botones centrados -->
        <ion-buttons slot="secondary" class="center-buttons">
          <ion-button @click="reservar">Reservar</ion-button>
          <ion-button @click="viajar">Viajar</ion-button>
        </ion-buttons>
  
        <!-- Botón de Iniciar sesión a la derecha -->
        <ion-buttons slot="end">
          <ion-button @click="iniciarSesion">Iniciar sesión</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    methods: {
      reservar() {
        this.$router.push('/reservar');
      },
      viajar() {
        this.$router.push('/viajar');
      },
      iniciarSesion() {
        this.$router.push('/iniciar-sesion');
      }
    }
  }
  </script>
  
  <style scoped>
  .center-buttons {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  </style>
  