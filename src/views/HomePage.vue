<template>
  <div class="home-page">
    <Navbar />
    <ion-content>
      <div class="inicio-container">
        <h1>Hotel Luxor</h1>
        <p>Alójate en la comodidad y el lujo que mereces.</p>
        <div class="sections">
          <div class="section">
            <h2>Alquileres</h2>
            <p>De nuestras suites, habitaciones y más.</p>
          </div>
          <div class="section">
            <h2>Spa</h2>
            <p>Relájate en nuestras instalaciones premium.</p>
          </div>
          <div class="section">
            <h2>Restaurante</h2>
            <p>Disfruta de nuestra oferta gastronómica exclusiva.</p>
          </div>
        </div>
        <button>Hacer reserva</button>
      </div>
    </ion-content>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>

<style scoped>
.home-page {
  background-color: black;
  color: white;
  text-align: center;
}

.inicio-container {
  padding: 20px;
}

.sections {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.section {
  background-color: #b59142;
  color: white;
  padding: 10px;
  width: 30%;
}

button {
  background-color: #b59142;
  color: white;
  padding: 10px 20px;
  border: none;
  margin-top: 20px;
  cursor: pointer;
}
</style>
