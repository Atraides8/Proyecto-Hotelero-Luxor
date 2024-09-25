import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import RegistrationPage from '../views/RegistrationPage.vue';
import ReservaPage from '@/views/ReservaPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },

  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },

  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },

  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage
  },

  {
    path: '/register', // Definir la nueva ruta para la página de registro
    name: 'Register',
    component: RegistrationPage // Asignar el componente de la página de registro
  },

  {
    path: '/reserva',
    name: 'Reserva',
    component: ReservaPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
