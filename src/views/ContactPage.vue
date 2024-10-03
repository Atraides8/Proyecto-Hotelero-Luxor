<template>
  <div class="contact-page">
    <ion-content>
      <div class="contact-container">
        <h1>Contacto</h1>
        <form>
          <input type="text" placeholder="Escribe tus datos personales" />
          <textarea placeholder="Escribe reclamo/sugerencia/consulta"></textarea>
          <button type="submit">Enviar</button>
        </form>
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
.contact-page {
  background-color: black;
  color: white;
  height: 100vh;
  text-align: center;
}

.contact-container {
  margin: 0 auto;
  padding: 20px;
  max-width: 600px;
}

input, textarea {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #b59142;
  color: white;
  border: none;
}

button {
  background-color: #b59142;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>
