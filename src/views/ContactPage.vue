<template>
  <ion-page>

    <ion-content class="content-custom">
      <!-- Título de Contacto -->
      <div class="contact-title">
        <h1>Contacto</h1>
      </div>

      <!-- Casilla única para escribir (más pequeña para dispositivos móviles) -->
      <div class="input-custom">
        <ion-textarea placeholder="Escribe tu mensaje aquí" v-model="mensaje" class="custom-textarea"></ion-textarea>
      </div>

      <!-- Botón Enviar -->
      <ion-button expand="full" class="submit-button" @click="enviarMensaje">Enviar</ion-button>

      <!-- Mensaje de éxito -->
      <div v-if="mensajeEnviado" class="success-message">
        Enviado con éxito
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      mensaje: '', // Almacena el contenido del mensaje
      mensajeEnviado: false // Controla la visibilidad del mensaje de éxito
    };
  },
  methods: {
    enviarMensaje() {
      if (this.mensaje.trim() !== '') {
        // Aquí puedes agregar cualquier lógica de envío del mensaje, si es necesario
        console.log('Mensaje enviado:', this.mensaje);

        // Mostrar el mensaje de éxito
        this.mensajeEnviado = true;

        // Limpiar el contenido del textarea
        this.mensaje = '';

        // Ocultar el mensaje de éxito después de 3 segundos
        setTimeout(() => {
          this.mensajeEnviado = false;
        }, 3000);
      } else {
        console.log('El campo está vacío.');
      }
    }
  }
};
</script>

<style scoped>
.title-custom {
  color: white; /* Texto blanco */
}

/* Estilos para el contenido */
.content-custom {
  --background: black; /* Fondo negro */
  color: white; /* Texto en blanco */
  padding: 16px;
}

.contact-title h1 {
  text-align: center;
  color: white;
  margin-bottom: 20px;
}

/* Estilos para la casilla de texto */
.input-custom {
  background-color: #b59d54; /* Fondo dorado */
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 0; /* Elimina el padding */
  border: none; /* Elimina cualquier borde */
}

/* Personalización del área de texto (tamaño más pequeño) */
.custom-textarea {
  --background: #b59d54; /* Fondo dorado */
  --color: white; /* Texto blanco */
  border-radius: 8px;
  height: 100px; /* Altura más pequeña para dispositivos móviles */
  --padding-start: 16px;
  --padding-end: 16px;
  --padding-top: 8px; /* Reduce el padding superior para ser más pequeño */
  --padding-bottom: 8px;
  border: none; /* Elimina los bordes */
  box-shadow: none; /* Elimina sombras internas */
}

/* Estilos para el botón Enviar */
.submit-button {
  --background: #b59d54; /* Botón dorado */
  color: white; /* Texto blanco */
  margin-top: 20px;
}

/* Estilos para el mensaje de éxito */
.success-message {
  text-align: center;
  color: #b59d54; /* Texto dorado */
  font-weight: bold;
  margin-top: 20px;
}
</style>
