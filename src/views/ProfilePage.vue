<template>
  <ion-page>
    <ion-content class="profile-content">
      <ion-grid class="ion-padding">
        <ion-row class="ion-justify-content-center">
          <ion-col size-md="8" size-sm="12">
            <!-- Sección de información del perfil -->
            <ion-card>
              <ion-card-header>
                <ion-card-title>Tu Información</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-item>
                  <ion-label position="floating">Nombre</ion-label>
                  <ion-input placeholder="Tu nombre"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="floating">Correo</ion-label>
                  <ion-input placeholder="Tu correo"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="floating">Dirección</ion-label>
                  <ion-input placeholder="Tu dirección"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="floating">Profesión</ion-label>
                  <ion-input placeholder="Tu profesión"></ion-input>
                </ion-item>
                <ion-button expand="block" color="success" class="ion-margin-top">
                  Guardar Cambios
                </ion-button>
              </ion-card-content>
            </ion-card>

            <!-- Opciones adicionales -->
            <ion-list>
              <ion-item button>
                <ion-icon slot="start" name="pencil-outline"></ion-icon>
                <ion-label>Editar Perfil</ion-label>
              </ion-item>
              <ion-item button>
                <ion-icon slot="start" name="lock-closed-outline"></ion-icon>
                <ion-label>Cambiar Contraseña</ion-label>
              </ion-item>
              <ion-item button>
                <ion-icon slot="start" name="notifications-outline"></ion-icon>
                <ion-label>Configurar Notificaciones</ion-label>
              </ion-item>
            </ion-list>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: 'ProfilePage',
};
</script>

<style scoped>
.profile-content {
  background: url('/img/hotel-presidente-4s.jpg') no-repeat center center fixed;
  background-size: cover;
}

ion-card {
  --ion-card-background: rgba(255, 255, 255, 0.9); /* Fondo semitransparente */
  --ion-card-border-radius: 12px;
  margin-top: 20px;
}
</style>
