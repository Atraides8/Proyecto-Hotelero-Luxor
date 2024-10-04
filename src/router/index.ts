import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import RegistrationPage from '../views/RegistrationPage.vue';
import ReservaPage from '@/views/ReservaPage.vue'; // Página de reserva
import ContactPage from '@/views/ContactPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import RecoverAccountPage from '@/views/RecoverAccountPage.vue';
import ReservationHistoryPage from '@/views/ReservationHistoryPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home' // Redirigir a la página de inicio
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactPage.vue') // Ruta a la página de contacto
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
    path: '/register', // Ruta para la página de registro
    name: 'Register',
    component: RegistrationPage
  },
  {
    path: '/reserva', // Ruta para la página de reservas
    name: 'Reserva',
    component: ReservaPage // Componente de la página de reservas
  },
  {
    path: '/recover-account',
    name: 'RecoverAccount',
    component: RecoverAccountPage
  },
  {
    path: '/reservation-history',
    name: 'ReservationHistory',
    component: ReservationHistoryPage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
