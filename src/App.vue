<template>
  <ion-app>
    <Navbar v-if="showNavbar" />
    <ion-content class="page-content">
      <ion-router-outlet :key="$route.fullPath" />

    </ion-content>
  </ion-app>
</template>


<script setup lang="ts">
import { IonApp, IonRouterOutlet, IonContent } from '@ionic/vue';
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';

const route = useRoute();
const showNavbar = !['/login',].includes(route.path);
</script>

<style scoped>
.page-content {
  padding-top: 56px; /* Asegúrate de que este valor coincida con la altura del Navbar */
}
</style>
