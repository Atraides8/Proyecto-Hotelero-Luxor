<template>
    <div>
      <Navbar />
      <ion-content>
        <ion-header>
          <ion-toolbar>
            <ion-title>Historial de Reservas</ion-title>
          </ion-toolbar>
        </ion-header>
        
        <ion-grid>
          <ion-row class="ion-justify-content-center">
            <ion-col size-md="8" size-sm="12">
              <!-- Lista del historial de reservas -->
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Mis Reservas</ion-card-title>
                </ion-card-header>
                
                <ion-card-content>
                  <ion-list>
                    <ion-item v-for="(reserva, index) in reservas" :key="index">
                      <ion-label>
                        <h2>{{ reserva.hotel }}</h2>
                        <p>Fecha: {{ reserva.fecha }}</p>
                        <p>Estado: {{ reserva.estado }}</p>
                      </ion-label>
                    </ion-item>
                  </ion-list>
  
                  <ion-text v-if="reservas.length === 0" color="medium" class="ion-text-center">
                    <p>No tienes reservas en tu historial.</p>
                  </ion-text>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  
  export default {
    components: {
      Navbar
    },
    data() {
      return {
        reservas: [
          {
            hotel: 'Hotel Luxor, Ciudad 1',
            fecha: '2024-08-15',
            estado: 'Confirmada'
          },
          {
            hotel: 'Hotel Luxor, Ciudad 2',
            fecha: '2024-09-10',
            estado: 'Cancelada'
          }
          // Aquí puedes agregar más reservas o conectarlo a un API para obtener los datos
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  ion-content {
    --background: #f8f9fa;
  }
  
  ion-card {
    margin-top: 50px;
  }
  </style>
  