<template>
  <ion-page class="history-page">
    <ion-content class="history-content">
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size-md="8" size-sm="12">
            <!-- Lista del historial de reservas -->
            <ion-card v-for="(reserva, index) in reservas" :key="`reserva-${index}`" class="reservation-card">
              <ion-card-header>
                <ion-card-title>{{ reserva.hotel }}</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                <p><strong>Fecha:</strong> {{ reserva.fecha }}</p>
                <p>
                  <strong>Estado:</strong>
                  <ion-badge :color="getBadgeColor(reserva.estado)">
                    {{ reserva.estado }}
                  </ion-badge>
                </p>
                <ion-button
                  expand="block"
                  fill="outline"
                  color="danger"
                  @click="cancelReservation(index)"
                  v-if="reserva.estado !== 'Cancelada'"
                >
                  Cancelar Reserva
                </ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ReservationHistoryPage',
  data() {
    return {
      reservas: [
        { hotel: "Hotel Luxor", fecha: "2024-11-10", estado: "Confirmada" },
        { hotel: "Hotel Luxor", fecha: "2024-12-01", estado: "Pendiente" },
        { hotel: "Hotel Luxor", fecha: "2024-10-15", estado: "Cancelada" },
      ],
      toastOpen: false,
      toastMessage: "",
    };
  },
  methods: {
    getBadgeColor(estado: string) {
      const colors: { [key: string]: string } = {
        Confirmada: "success",
        Pendiente: "warning",
        Cancelada: "danger",
      };
      return colors[estado] || "medium";
    },
    cancelReservation(index: number) {
      if (this.reservas[index].estado !== "Cancelada") {
        this.reservas[index].estado = "Cancelada";
        this.toastMessage = "Reserva cancelada con éxito";
        this.toastOpen = true;
      }
    },
    closeToast() {
      this.toastOpen = false;
    },
  },
});
</script>

<style scoped>
/* Configuración para que el fondo ocupe todo el espacio */
.history-page {
  --ion-background-color: transparent; /* Permite que el fondo sea controlado por el contenido */
  height: 100vh;
  width: 100vw;
}

/* Estilo del contenido para usar fondo de imagen */
.history-content {
  background: url('/exterior.jpg') no-repeat center center fixed;
  background-size: cover; /* La imagen ocupa todo el fondo */
  height: 100%; /* Altura completa */
  width: 100%; /* Ancho completo */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Alinea el contenido al inicio */
  color: white; /* Texto blanco */
}

/* Estilo de las tarjetas (cards) */
.reservation-card {
  background-color: white; /* Fondo blanco */
  color: black; /* Texto negro */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  margin-bottom: 1rem;
}

ion-badge {
  font-size: 0.9rem;
}

ion-card-title {
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
}

ion-card-content p {
  margin: 0.5rem 0; /* Separación entre párrafos */
}
</style>
