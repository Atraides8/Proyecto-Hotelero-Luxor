<template>
  <div>
    <Navbar />
    <ion-content>
      <ion-header>
        <ion-toolbar>
          <ion-title>Iniciar Sesión</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size-md="6" size-sm="12">
            <!-- Formulario de inicio de sesión -->
            <ion-card>
              <ion-card-header>
                <ion-card-title>Acceder a tu cuenta</ion-card-title>
              </ion-card-header>
              
              <ion-card-content>
                <ion-item>
                  <ion-label position="floating">Correo Electrónico</ion-label>
                  <ion-input type="email" v-model="email" required></ion-input>
                </ion-item>

                <ion-item>
                  <ion-label position="floating">Contraseña</ion-label>
                  <ion-input type="password" v-model="password" required></ion-input>
                </ion-item>

                <ion-button expand="block" @click="iniciarSesion">Iniciar Sesión</ion-button>
                
                <ion-text color="medium" class="ion-text-center">
                  <p>¿Olvidaste tu contraseña? 
                    <ion-router-link :to="'/recover-account'">Recupérala aquí</ion-router-link>
                  </p>
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
      email: '',
      password: ''
    }
  },
  methods: {
    iniciarSesion() {
      // Aquí puedes agregar la lógica para la autenticación del usuario
      if (this.email && this.password) {
        // Simulación de inicio de sesión
        this.$router.push('/profile');
      } else {
        // Manejar errores, como campos vacíos
        console.error('Por favor, ingresa tu correo y contraseña');
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
