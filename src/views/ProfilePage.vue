<template>
  <div>

    <ion-content>
      <ion-header>
        <ion-toolbar>
          <ion-title>Perfil del Usuario</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size-md="6" size-sm="12">
            <!-- Card del perfil -->
            <ion-card>
              <ion-card-header>
                <ion-card-title>Información del Usuario</ion-card-title>
              </ion-card-header>
              
              <ion-card-content>
                <ion-item>
                  <ion-label>Nombre</ion-label>
                  <ion-text>{{ user.name }}</ion-text>
                </ion-item>

                <ion-item>
                  <ion-label>Correo Electrónico</ion-label>
                  <ion-text>{{ user.email }}</ion-text>
                </ion-item>

                <ion-button expand="block" @click="editarPerfil">Editar Perfil</ion-button>
                <ion-button expand="block" color="danger" @click="cerrarSesion">Cerrar Sesión</ion-button>
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
      user: {
        name: 'Juan Pérez',
        email: 'juan.perez@example.com'
      }
    }
  },
  methods: {
    editarPerfil() {
      // Lógica para redirigir a la página de edición del perfil
      this.$router.push('/editar-perfil');
    },
    cerrarSesion() {
      // Lógica para cerrar sesión
      console.log('Cerrando sesión...');
      this.$router.push('/login');
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
