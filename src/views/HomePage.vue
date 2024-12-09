<template>
  <ion-page>
    <ion-content class="content-custom">
      <!-- Sección de imágenes -->
      <div class="image-slider">
        <img src="\img\tipos-habitaciones-hotel.jpg" alt="Habitación de hotel" class="main-image" />
      </div>

      <!-- Sección de servicios -->
      <div class="services-section">
        <h2>Alojamientos</h2>
        <p class="subtitulo">De nuestra propia, vigilia y excelencia</p>
        <div class="services-grid">
          <div class="service-card">
            <img src="\img\restaurant.jpg" alt="Restaurante" />
            <p>Restaurante</p>
          </div>
          <div class="service-card">
            <img src="\img\lujo.png" alt="Suites exclusivas" />
            <p>Suites exclusivas</p>
          </div>
          <div class="service-card">
            <img src="\img\spa.jpg" alt="Spa" />
            <p>Spa</p>
          </div>
        </div>
      </div>

      <!-- Sección de información -->
      <div class="info-section">
        <div class="info-card">
          <h3>Spa</h3>
          <p>Relájate y recarga energías con nuestros tratamientos exclusivos.</p>
        </div>
        <div class="info-card">
          <h3>Restaurante</h3>
          <p>Disfruta de una experiencia culinaria inigualable en nuestro restaurante gourmet.</p>
        </div>
      </div>

      <!-- Botones de acciones -->
      <ion-button expand="full" class="reserve-button" @click="goToReserva">
        Hacer Reserva
      </ion-button>
      <ion-button expand="full" class="history-button" @click="goToReservationHistory">
        Historial de Reservas
      </ion-button>
      <!-- Botón de contacto -->
      <div class="footer-section">
        <router-link to="/contact" class="footer-link">
          <ion-button expand="full" class="contact-button">Contacto</ion-button>
        </router-link>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  methods: {
    async goToReserva() {
      this.$router.push("/reserve");
    },
    async goToReservationHistory() {
      const menu = document.querySelector("ion-menu");
      if (menu && (await menu.isOpen())) {
        await menu.close();
      }
      this.$router.push("/reservation-history");
    },
  },
});
</script>

<style scoped>
/* Fondo oscuro y texto claro */
.content-custom {
  --background: black; /* Fondo negro */
  color: white; /* Texto blanco */
  padding: 16px;
}

/* Estilos del slider de imágenes */
.image-slider {
  text-align: center;
  margin-bottom: 20px;
}

.main-image {
  width: 100%;
  border-radius: 8px;
}

/* Sección de servicios */
.services-section h2 {
  color: white;
  text-align: center;
  margin-bottom: 5px;
}

.subtitulo {
  text-align: center;
  color: #b59d54; /* Dorado */
  margin-bottom: 20px;
}

.services-grid {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.service-card {
  flex: 1;
  margin: 0 10px;
  text-align: center;
}

.service-card img {
  width: 100%;
  border-radius: 8px;
}

/* Sección de información */
.info-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.info-card {
  flex: 1;
  margin: 0 10px;
  padding: 20px;
  background-color: #b59d54;
  color: white;
  border-radius: 8px;
  text-align: center;
}

/* Estilo de botones */
.reserve-button,
.history-button,
.contact-button {
  --background: #b59d54; /* Botones dorados */
  color: white;
  font-weight: bold;
  margin-top: 10px;
}

/* Botón de contacto */
.footer-link {
  text-decoration: none;
}
</style>
