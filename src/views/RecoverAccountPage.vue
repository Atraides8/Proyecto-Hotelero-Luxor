<template>
  <ion-page>
    <ion-content class="recover-account-page">
      <ion-grid>
        <ion-row class="ion-justify-content-center ion-align-items-center" style="height: 100vh;">
          <ion-col size-md="4" size-sm="8" size-xs="12">
            <ion-card class="recover-card">
              <ion-card-header>
                <ion-card-title class="recover-title">Recuperar Cuenta</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                <p class="recover-subtitle">Por favor ingresa tu correo para recuperar tu cuenta</p>
                <ion-item>
                  <ion-label position="floating">Correo</ion-label>
                  <ion-input type="email" placeholder="Tu correo"></ion-input>
                </ion-item>
                <ion-button expand="block" class="recover-button">Recuperar cuenta</ion-button>
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
  name: 'RecoverAccountPage',
};
</script>

<style scoped>
/* Fondo oscuro con mejor contraste */
.recover-account-page {
  --background: #121212;
  color: white;
}

/* Tarjeta elegante con sombras */
.recover-card {
  --ion-card-background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  padding: 20px;
}

/* Título más atractivo */
.recover-title {
  font-size: 1.8rem;
  color: #333;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Subtítulo descriptivo */
.recover-subtitle {
  font-size: 1rem;
  color: #555;
  text-align: center;
  margin-bottom: 20px;
}

/* Elementos del formulario */
ion-item {
  --background: #f4f4f4;
  --color: #333;
  margin-bottom: 16px;
  border-radius: 8px;
}

/* Botón personalizado */
.recover-button {
  margin-top: 16px;
  background: linear-gradient(45deg, #6c63ff, #007bff);
  --color: white;
  border: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

.recover-button:hover {
  transform: scale(1.05);
}

/* Ajustes responsivos */
@media (max-width: 768px) {
  .recover-title {
    font-size: 1.5rem;
  }

  .recover-subtitle {
    font-size: 0.9rem;
  }
}
</style>
