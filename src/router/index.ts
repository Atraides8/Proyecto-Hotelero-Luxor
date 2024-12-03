import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import RegistrationPage from '../views/RegistrationPage.vue';
import ReservePage from '@/views/ReservePage.vue'; // Ruta a la pagina de reserva 
import LoginPage from '@/views/LoginPage.vue';
import ReservationHistoryPage from '@/views/ReservationHistoryPage.vue';
import Navbar from '@/components/Navbar.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home' // Redirigir a la página de inicio
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: Navbar,
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
    path: '/register', // Ruta para la página de registro
    name: 'Register',
    component: RegistrationPage
  },
  {
    path: '/Reserve', // Ruta para la página de reservas
    name: 'Reserve',
    component: ReservePage // Componente de la página de reservas
  },
  {
    path: '/recover-account',
    name: 'RecoverAccount',
    component: () => import('@/views/RecoverAccountPage.vue'),
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
