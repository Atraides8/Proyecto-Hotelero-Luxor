<template>
    <ion-page>
      <ion-content>
        <div class="container">
          <!-- Barra de botones para búsqueda -->
          <div class="search-buttons">
            <ion-button expand="block" @click="toggleOption('destino')">Ingresar destino</ion-button>
            <ion-button expand="block" @click="toggleOption('fechaLlegada')">Fecha llegada</ion-button>
            <ion-button expand="block" @click="toggleOption('fechaSalida')">Fecha salida</ion-button>
            <ion-button expand="block" @click="toggleOption('personas')">Nº de personas</ion-button>
          </div>
  
          <!-- Opciones que se despliegan al hacer clic en los botones -->
          <div class="search-options">
            <!-- Ingresar destino -->
            <div v-if="isDestinoVisible">
              <ion-item>
                <ion-label>Ingresar destino</ion-label>
                <ion-input placeholder="Ingresa destino"></ion-input>
              </ion-item>
            </div>
  
            <!-- Fecha llegada -->
            <div v-if="isFechaLlegadaVisible">
              <ion-item>
                <ion-label>Fecha llegada</ion-label>
                <ion-datetime display-format="MM/DD/YYYY" placeholder="Selecciona fecha de llegada"></ion-datetime>
              </ion-item>
            </div>
  
            <!-- Fecha salida -->
            <div v-if="isFechaSalidaVisible">
              <ion-item>
                <ion-label>Fecha salida</ion-label>
                <ion-datetime display-format="MM/DD/YYYY" placeholder="Selecciona fecha de salida"></ion-datetime>
              </ion-item>
            </div>
  
            <!-- Nº de personas -->
            <div v-if="isPersonasVisible">
              <ion-item>
                <ion-label>Nº de personas</ion-label>
                <ion-input type="number" placeholder="Nº de personas"></ion-input>
              </ion-item>
            </div>
          </div>
  
          <!-- Sección de recomendados -->
          <div class="recommended-section">
            <h2>Recomendados</h2>
  
            <div class="recommendation">
              <!-- Fotos del lugar -->
              <ion-card class="photo-card">
                <ion-img src="/assets/foto_lugar.jpg" alt="Fotos del lugar"></ion-img>
              </ion-card>
              <!-- Descripción del lugar -->
              <ion-card class="description-card">
                <ion-card-content>
                  <h3>DESCRIPCIÓN DEL LUGAR</h3>
                  <p>Aquí va una breve descripción del lugar recomendado.</p>
                </ion-card-content>
              </ion-card>
            </div>
  
            <div class="recommendation">
              <!-- Fotos del lugar -->
              <ion-card class="photo-card">
                <ion-img src="/assets/foto_lugar.jpg" alt="Fotos del lugar"></ion-img>
              </ion-card>
              <!-- Descripción del lugar -->
              <ion-card class="description-card">
                <ion-card-content>
                  <h3>DESCRIPCIÓN DEL LUGAR</h3>
                  <p>Aquí va una breve descripción del lugar recomendado.</p>
                </ion-card-content>
              </ion-card>
            </div>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  
  export default {
    components: {
      Navbar
    },
    data() {
      return {
        isDestinoVisible: false,
        isFechaLlegadaVisible: false,
        isFechaSalidaVisible: false,
        isPersonasVisible: false
      };
    },
    methods: {
      toggleOption(option) {
        // Resetear todas las opciones visibles
        this.isDestinoVisible = false;
        this.isFechaLlegadaVisible = false;
        this.isFechaSalidaVisible = false;
        this.isPersonasVisible = false;
  
        // Mostrar la opción correspondiente
        if (option === 'destino') this.isDestinoVisible = true;
        if (option === 'fechaLlegada') this.isFechaLlegadaVisible = true;
        if (option === 'fechaSalida') this.isFechaSalidaVisible = true;
        if (option === 'personas') this.isPersonasVisible = true;
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    padding: 16px;
  }
  
  .search-buttons {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  
  .search-options {
    margin-bottom: 20px;
  }
  
  .recommended-section {
    text-align: center;
  }
  
  .recommendation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .photo-card {
    width: 45%;
  }
  
  .description-card {
    width: 45%;
  }
  </style>
  