import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDv-Z8bNmLVpy7lWoxHmXWtIgJ0DtZ-Fgc",
  authDomain: "hotelero-d8330.firebaseapp.com",
  projectId: "hotelero-d8330",
  storageBucket: "hotelero-d8330.appspot.com",
  messagingSenderId: "58416889448",
  appId: "1:58416889448:web:cbfb58cf7b0ce0234205dd",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore
export const db = getFirestore(app);
