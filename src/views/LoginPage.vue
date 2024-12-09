<template>
  <ion-page>
    <ion-content class="login-page">
      <ion-grid>
        <ion-row class="ion-justify-content-center ion-align-items-center" style="height: 100vh;">
          <ion-col size-md="4" size-sm="8" size-xs="12">
            <ion-card class="login-card">
              <ion-card-header>
                <ion-card-title class="login-title">Iniciar Sesión</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                <!-- Campo de correo electrónico -->
                <ion-item>
                  <ion-label position="floating">Correo</ion-label>
                  <ion-input type="email" placeholder="Tu correo"></ion-input>
                </ion-item>

                <!-- Campo de contraseña -->
                <ion-item>
                  <ion-label position="floating">Contraseña</ion-label>
                  <ion-input type="password" placeholder="Tu contraseña"></ion-input>
                </ion-item>

                <!-- Botones de acción -->
                <div class="button-container">
                  <ion-button expand="block" color="primary">Iniciar Sesión</ion-button>
                  <ion-button fill="clear" @click="$router.push('/recover-account')">
                    Olvidaste tu contraseña?
                  </ion-button>
                  <ion-button expand="block" color="light" @click="$router.push('/register')">
                    Registrarse
                  </ion-button>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: 'LoginPage',
};
</script>

<style scoped>
.login-page {
  --background: #000; /* Fondo oscuro */
  color: white;
}

ion-grid {
  height: 100%;
}

.login-card {
  --ion-card-background: rgba(255, 255, 255, 0.95); /* Fondo más opaco */
  border-radius: 12px;
  width: 100%;
}

.login-title {
  font-size: 1.8rem; /* Tamaño más grande */
  color: #000; /* Contraste fuerte */
  text-align: center;
  font-weight: bold;
}

ion-item {
  --background: #4f4f4f;
  --color: white;
  margin-bottom: 16px;
}

.button-container ion-button {
  margin-top: 10px;
}

ion-button[fill="clear"] {
  color: #007bff;
  text-decoration: underline;
}
</style>
