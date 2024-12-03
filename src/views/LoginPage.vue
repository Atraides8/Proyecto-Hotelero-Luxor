<template>
  <ion-content class="login-page">
    <div class="background-image"></div>

    <ion-grid class="center-content">
      <ion-row class="ion-justify-content-center">
        <ion-col size-md="4" size-sm="10" size-xs="12">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Iniciar Sesión</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <!-- Campo de correo electrónico -->
              <ion-item>
                <ion-label position="floating">Correo Electrónico</ion-label>
                <ion-input
                  type="email"
                  v-model="email"
                  @ionBlur="validateEmail"
                  required
                ></ion-input>
              </ion-item>
              <p v-if="emailError" class="error-text">{{ emailError }}</p>

              <!-- Campo de contraseña -->
              <ion-item>
                <ion-label position="floating">Contraseña</ion-label>
                <ion-input
                  type="password"
                  v-model="password"
                  @ionBlur="validatePassword"
                  required
                ></ion-input>
              </ion-item>
              <p v-if="passwordError" class="error-text">{{ passwordError }}</p>

              <!-- Botones de acción -->
              <ion-button
                expand="block"
                @click="login"
                :disabled="!isFormValid"
              >
                Iniciar Sesión
              </ion-button>

              <ion-button
                expand="block"
                color="medium"
                fill="outline"
                router-link="/RecoverAccountPage.vue"
              >
                ¿Olvidaste tu contraseña?
              </ion-button>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  },
  computed: {
    isFormValid() {
      return this.email && this.password && !this.emailError && !this.passwordError;
    },
  },
  methods: {
    validateEmail() {
      const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!this.email) {
        this.emailError = "El correo es obligatorio.";
      } else if (!emailPattern.test(this.email)) {
        this.emailError = "El correo no es válido.";
      } else {
        this.emailError = "";
      }
    },
    validatePassword() {
      if (!this.password) {
        this.passwordError = "La contraseña es obligatoria.";
      } else if (this.password.length < 6) {
        this.passwordError = "La contraseña debe tener al menos 6 caracteres.";
      } else {
        this.passwordError = "";
      }
    },
    login() {
      // Simular credenciales predefinidas
      const predefinedEmail = "usuario@ejemplo.com";
      const predefinedPassword = "123456";

      if (this.email === predefinedEmail && this.password === predefinedPassword) {
        alert("Inicio de sesión exitoso");
        console.log("Usuario autenticado:", { email: this.email });
      } else {
        alert("Correo o contraseña incorrectos");
        console.log("Intento fallido de inicio de sesión");
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url('/room.png'); /* Cambia esta ruta según tu imagen */
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.center-content {
  z-index: 1;
}

.error-text {
  color: red;
  font-size: 0.9em;
  margin: 0.2em 0;
}
</style>
