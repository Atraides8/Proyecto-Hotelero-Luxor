<template>
    <div>
      <Navbar />
      <ion-content>
        <ion-header>
          <ion-toolbar>
            <ion-title>Recuperación de Cuenta</ion-title>
          </ion-toolbar>
        </ion-header>
        
        <ion-grid>
          <ion-row class="ion-justify-content-center">
            <ion-col size-md="6" size-sm="12">
              <!-- Card para recuperación de cuenta -->
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Recuperar tu Cuenta</ion-card-title>
                </ion-card-header>
  
                <ion-card-content>
                  <ion-item>
                    <ion-label position="floating">Correo Electrónico</ion-label>
                    <ion-input type="email" v-model="email" required></ion-input>
                  </ion-item>
  
                  <ion-button expand="block" @click="recuperarCuenta">Enviar Solicitud</ion-button>
  
                  <ion-text color="medium" class="ion-text-center">
                    <p>Recibirás un correo electrónico con instrucciones para recuperar tu cuenta.</p>
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
        email: ''
      }
    },
    methods: {
      recuperarCuenta() {
        if (this.email) {
          // Simulación de envío de recuperación de cuenta
          console.log('Solicitud enviada a: ' + this.email);
          // Puedes añadir aquí la lógica para enviar la solicitud a una API
          this.$router.push('/login'); // Redirige a la página de inicio de sesión
        } else {
          // Manejar el caso de email vacío
          console.error('Por favor, ingresa un correo electrónico.');
        }
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
  