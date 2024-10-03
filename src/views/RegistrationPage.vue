<template>
  <ion-page>
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
                <ion-input v-model="userData.firstName" placeholder="Ingresa tus nombres"></ion-input>
              </ion-item>

              <!-- Campo para los apellidos -->
              <ion-item>
                <ion-label position="floating">Apellidos</ion-label>
                <ion-input v-model="userData.lastName" placeholder="Ingresa tus apellidos"></ion-input>
              </ion-item>

              <!-- Campo para el RUT -->
              <ion-item>
                <ion-label position="floating">RUT</ion-label>
                <ion-input v-model="userData.rut" placeholder="Ingresa tu RUT"></ion-input>
              </ion-item>

              <!-- Campo para el teléfono -->
              <ion-item>
                <ion-label position="floating">Teléfono</ion-label>
                <ion-input v-model="userData.phone" type="tel" placeholder="Ingresa tu teléfono"></ion-input>
              </ion-item>

              <!-- Campo para el correo electrónico -->
              <ion-item>
                <ion-label position="floating">Correo Electrónico</ion-label>
                <ion-input v-model="userData.email" type="email" placeholder="Ingresa tu correo"></ion-input>
              </ion-item>

              <!-- Campo para la contraseña -->
              <ion-item>
                <ion-label position="floating">Contraseña</ion-label>
                <ion-input v-model="userData.password" type="password" placeholder="Ingresa tu contraseña"></ion-input>
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
export default {
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
      // Validación simple para asegurarse de que todos los campos estén llenos
      if (
        !this.userData.firstName ||
        !this.userData.lastName ||
        !this.userData.rut ||
        !this.userData.phone ||
        !this.userData.email ||
        !this.userData.password
      ) {
        alert('Por favor, rellena todos los campos.');
        return;
      }

      // Cambia el estado a registrado
      this.isRegistered = true;
    }
  }
}
</script>

<style scoped>
/* Configuración de fondo del contenido */
ion-content {
  --background: url('/registro.jpg') no-repeat center center / cover;
}

/* Contenedor del formulario */
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Asegura que ocupe toda la pantalla */
  padding: 20px;
}

/* Estilo de la tarjeta de registro */
.register-card {
  width: 100%;
  max-width: 400px; /* Ancho máximo en pantallas grandes */
  background-color: rgba(255, 255, 255, 0.8); /* Fondo semitransparente */
}

/* Ocultar la imagen de fondo en pantallas pequeñas */
.background-image {
  display: none;
}

/* Media query para pantallas grandes */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
    justify-content: space-between;
  }

  .background-image {
    display: block;
    width: 50%; /* Ocupa la mitad de la pantalla en pantallas grandes */
  }

  .register-card {
    width: 40%;
    margin-right: 50px;
  }
}

@media (min-width: 375px) and (min-height: 667px) {
  ion-input {
    --padding-top: 33px;
  }
}




</style>
