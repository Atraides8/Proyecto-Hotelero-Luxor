<template>
  <ion-page>
    <Navbar />
    <ion-content>
      <div v-if="!isRegistered" class="container">
        <!-- Área para la imagen de fondo -->
        <div class="background-image">
          Imagen de fondo
        </div>

        <!-- Formulario de registro alineado a la derecha -->
        <ion-card class="register-card">
          <ion-card-header>
            <ion-card-title>Registro de Usuario</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <ion-list>
              <!-- Campo para los nombres -->
              <ion-item>
                <ion-label position="floating">Nombres</ion-label>
                <ion-input @ionInput="e => userData.firstName = e.target.value" placeholder="Ingresa tus nombres"></ion-input>
              </ion-item>

              <!-- Campo para los apellidos -->
              <ion-item>
                <ion-label position="floating">Apellidos</ion-label>
                <ion-input @ionInput="e => userData.lastName = e.target.value" placeholder="Ingresa tus apellidos"></ion-input>
              </ion-item>

              <!-- Campo para el RUT -->
              <ion-item>
                <ion-label position="floating">RUT</ion-label>
                <ion-input @ionInput="e => userData.rut = e.target.value" placeholder="Ingresa tu RUT"></ion-input>
              </ion-item>

              <!-- Campo para el teléfono -->
              <ion-item>
                <ion-label position="floating">Teléfono</ion-label>
                <ion-input @ionInput="e => userData.phone = e.target.value" type="tel" placeholder="Ingresa tu teléfono"></ion-input>
              </ion-item>

              <!-- Campo para el correo electrónico -->
              <ion-item>
                <ion-label position="floating">Correo Electrónico</ion-label>
                <ion-input @ionInput="e => userData.email = e.target.value" type="email" placeholder="Ingresa tu correo"></ion-input>
              </ion-item>

              <!-- Campo para la contraseña -->
              <ion-item>
                <ion-label position="floating">Contraseña</ion-label>
                <ion-input @ionInput="e => userData.password = e.target.value" type="password" placeholder="Ingresa tu contraseña"></ion-input>
              </ion-item>

              <!-- Botón de registro -->
              <ion-button expand="block" color="primary" @click="registerUser">Registrarse</ion-button>
            </ion-list>
          </ion-card-content>
        </ion-card>
      </div>

      <!-- Contenido dinámico mostrado después de registrarse -->
      <div v-else class="success-message">
        <ion-card>
          <ion-card-header>
            <ion-card-title>¡Registro Exitoso!</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>Gracias por registrarte, {{ userData.firstName }}.</p>
          </ion-card-content>
        </ion-card>
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
      userData: {
        firstName: '',
        lastName: '',
        rut: '',
        phone: '',
        email: '',
        password: ''
      },
      isRegistered: false
    };
  },
  methods: {
  registerUser() {
    // Imprimir en la consola el estado de los campos
    console.log(this.userData);

    // Validación para asegurarse de que todos los campos están llenos
    if (
      !this.userData.firstName.trim() ||
      !this.userData.lastName.trim() ||
      !this.userData.rut.trim() ||
      !this.userData.phone.trim() ||
      !this.userData.email.trim() ||
      !this.userData.password.trim()
    ) {
      alert('Por favor, rellena todos los campos.');
      return;
    }
    
    // Cambia el estado a true
    this.isRegistered = true;
  }
}

}
</script>

<style scoped>

ion-content {
  --background: url('/registro.jpg') no-repeat center center / cover;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Ajuste para centrar verticalmente */
  height: 100%; /* Asegúrate de que el contenedor llene toda la altura disponible */
}



.register-card {
  width: 30%;
  margin-right: 50px; /* Ajusta según sea necesario */
  background-color: rgba(255, 255, 255, 0.8); /* Opcional: para mejorar la legibilidad sobre el fondo */
}
</style>
