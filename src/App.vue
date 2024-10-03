<template>
  <ion-app>
    <!-- Incluye la barra de navegación aquí, para que se muestre en todas las vistas -->
    <Navbar v-if="showNavbar" />
    <ion-router-outlet :key="$route.fullPath" />

  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';

// Determina si la barra de navegación debe mostrarse
const route = useRoute();
const showNavbar = !['/login', '/register'].includes(route.path);
</script>
