<template>
  <ion-page>
    <ion-content class="content-custom">
      <div class="container">
        <!-- Barra de botones para búsqueda -->
        <div class="search-buttons">
          <ion-button expand="block" class="custom-button" @click="toggleOption('destino')">Ingresar destino</ion-button>
          <ion-button expand="block" class="custom-button" @click="toggleOption('fechaLlegada')">Fecha llegada</ion-button>
          <ion-button expand="block" class="custom-button" @click="toggleOption('fechaSalida')">Fecha salida</ion-button>
          <ion-button expand="block" class="custom-button" @click="toggleOption('personas')">Nº de personas</ion-button>
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
              <ion-img src="\img\brasil.webp" alt="Fotos del lugar"></ion-img>
            </ion-card>
            <!-- Descripción del lugar -->
            <ion-card class="description-card card-golden"> <!-- Añadimos la clase card-golden -->
              <ion-card-content>
                <h3>DESCRIPCIÓN DEL LUGAR</h3>
                <p>Brasil es famoso por su Carnaval, playas paradisíacas y la selva amazónica, ofreciendo una rica cultura y deliciosa comida.</p>
              </ion-card-content>
            </ion-card>
          </div>

          <div class="recommendation">
            <!-- Fotos del lugar -->
            <ion-card class="photo-card">
              <ion-img src="\img\ny.jpg" alt="Fotos del lugar"></ion-img>
            </ion-card>
            <!-- Descripción del lugar -->
            <ion-card class="description-card card-golden"> <!-- Añadimos la clase card-golden -->
              <ion-card-content>
                <h3>DESCRIPCIÓN DEL LUGAR</h3>
                <p>Estados Unidos destaca por su diversidad cultural, atracciones icónicas y vastos parques nacionales, combinando grandes ciudades y naturaleza impresionante.</p>
              </ion-card-content>
            </ion-card>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
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
/* Estilos para el contenido */
.content-custom {
  --background: black; /* Fondo negro */
  color: white; /* Texto blanco */
}

.container {
  padding: 16px;
}

.search-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  margin-bottom: 20px;
}

.search-buttons ion-button {
  flex: 1 1 45%;
}

.search-options {
  margin-bottom: 20px;
}

.recommended-section {
  text-align: center;
}

.recommendation {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.photo-card {
  width: 100%;
  margin-bottom: 10px;
}

.description-card {
  width: 100%;
  margin-bottom: 10px;
}

/* Nueva clase para el fondo dorado de las descripciones */
.card-golden {
  --background: #b59d54; /* Color dorado */
  color: white; /* Texto blanco */
}

@media (min-width: 600px) {
  .recommendation {
    flex-wrap: nowrap;
  }

  .photo-card,
  .description-card {
    width: 45%;
    margin-bottom: 0;
  }
}

/* Estilo para el botón dorado */
.custom-button {
  --background: #b59d54; /* Color dorado */
  --color: white; /* Texto blanco */
}
</style>
