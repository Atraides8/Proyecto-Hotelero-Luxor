<template>
    <ion-app>
      <ion-menu content-id="main-content">
        <ion-header>
          <ion-toolbar>
            <ion-title>Menú</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item router-link="/home">Inicio</ion-item>
            <ion-item router-link="/profile">Perfil</ion-item>
            <ion-item router-link="/settings">Configuración</ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>
  
      <div id="main-content">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-menu-button></ion-menu-button>
            </ion-buttons>
            <ion-title>Navbar en todas las páginas</ion-title>
          </ion-toolbar>
        </ion-header>
  
        <router-view></router-view>
      </div>
    </ion-app>
  </template>
  
  <script>
  export default {
    name: "App",
  };
  </script>
  