<template>
  <ion-content class="recover-page">
    <div class="background-image"></div>
    <ion-header>
      <ion-toolbar>
        <ion-title>Recuperar Cuenta</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-grid class="center-content">
      <ion-row class="ion-justify-content-center">
        <ion-col size-md="4" size-sm="10" size-xs="12">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Ingresa tu correo</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <!-- Campo de correo electrónico -->
              <ion-item>
                <ion-label position="floating">Correo Electrónico</ion-label>
                <ion-input
                  type="email"
                  v-model="email"
                  placeholder="ejemplo@correo.com"
                  required
                ></ion-input>
              </ion-item>
              <p v-if="emailError" class="error-text">{{ emailError }}</p>

              <!-- Botones -->
              <ion-button expand="block" @click="sendRecoveryLink">
                Enviar enlace de recuperación
              </ion-button>

              <ion-button expand="block" color="medium" fill="outline" router-link="/login">
                Volver al inicio de sesión
              </ion-button>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>

