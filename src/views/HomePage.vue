<template>
  <ion-page>
    <!-- Contenido principal -->
    <ion-content class="content-custom">
      <!-- Sección de imágenes -->
      <div class="image-slider">
        <img src="C:\Users\Hogar\Desktop\Nueva carpeta\Proyecto-Hotelero-Luxor\public\img\tipos-habitaciones-hotel.jpg" alt="Habitación de hotel" class="main-image" />
      </div>

      <!-- Sección de servicios -->
      <div class="services-section">
        <h2>Alojamientos</h2>
        <p class="subtitulo">De nuestra propia, vigilia y excelencia</p>
        <div class="services-grid">
          <div class="service-card">
            <img src="C:\Users\Hogar\Desktop\Nueva carpeta\Proyecto-Hotelero-Luxor\public\img\restaurant.jpg" alt="Servicio 1" />
            <p>Restaurante</p>
          </div>
          <div class="service-card">
            <img src="C:\Users\Hogar\Desktop\Nueva carpeta\Proyecto-Hotelero-Luxor\public\img\lujo.png" alt="Servicio 2" />
            <p>Suites exclusivas</p>
          </div>
          <div class="service-card">
            <img src="C:\Users\Hogar\Desktop\Nueva carpeta\Proyecto-Hotelero-Luxor\public\img\spa.jpg" alt="Servicio 3" />
            <p>Spa</p>
          </div>
        </div>
      </div>

      <!-- Sección de botones para SPA y Restaurant -->
      <div class="info-section">
        <div class="info-card">
          <h3>Spa</h3>
          <p>Relájate y recarga energías con nuestros tratamientos de spa exclusivos.</p>
        </div>
        <div class="info-card">
          <h3>Restaurant</h3>
          <p>Deléitate con una experiencia culinaria inigualable en nuestro restaurant gourmet.</p>
        </div>
      </div>

      <!-- Botón de reserva -->
      <ion-button expand="full" class="reserve-button" @click="goToReserva">Hacer Reserva</ion-button>

      <!-- Nueva Sección Inferior -->
      <div class="footer-section">
        <!-- Cambiamos el enlace por un router-link -->
        <router-link to="/contact" class="footer-link">Contacto</router-link>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goToReserva() {
      this.$router.push('/reserva'); // Redirigir a la página de reservas
    }
  }
};
</script>

<style scoped>

.title-custom {
  color: white; /* Texto blanco */
}

/* Estilos del contenido */
.content-custom {
  --background: black; /* Fondo negro */
  color: white; /* Texto en blanco */
  padding: 16px;
}

.image-slider {
  text-align: center;
  margin-bottom: 20px;
}

.main-image {
  width: 100%;
  border-radius: 8px;
}

.services-section h2 {
  color: white;
  text-align: center;
  margin-bottom: 5px;
}

.subtitulo {
  text-align: center;
  color: #b59d54; /* Subtítulo dorado */
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

.description-section {
  text-align: center;
  margin-bottom: 30px;
}

/* Ajustar el margen superior de la sección de info */
.info-section {
  display: flex;
  justify-content: space-between;
  margin-top: -20px; /* Subimos la sección de SPA y Restaurant */
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

.reserve-button {
  --background: #b59d54; /* Botón de reserva dorado */
  color: white;
  font-weight: bold;
  margin-top: -15px; /* Subimos el botón de reserva */
}

/* Ajustar el margen superior de la sección inferior */
.footer-section {
  margin-top: -10px; /* Subimos la sección inferior */
  padding: 20px;
  background-color: black;
  text-align: center;
}

.footer-link {
  color: #b59d54;
  margin: 0 10px;
  text-decoration: none;
  font-weight: bold;
}

.language-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.language-button {
  margin: 0 5px;
  --border-color: #b59d54; /* Borde dorado */
  --color: white; /* Texto blanco */
}
</style>
