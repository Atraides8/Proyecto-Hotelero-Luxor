import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import RegistrationPage from '../views/RegistrationPage.vue';
import ReservaPage from '@/views/ReservaPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import RecoverAccountPage from '@/views/RecoverAccountPage.vue';
import ReservationHistoryPage from '@/views/ReservationHistoryPage.vue';

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
  },

  {
    path: '/recover-account',
    name: 'RecoverAccount',
    component: () => import('@/views/RecoverAccountPage.vue')
  },
  {
    path: '/reservation-history',
    name: 'ReservationHistory',
    component: () => import('@/views/ReservationHistoryPage.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
