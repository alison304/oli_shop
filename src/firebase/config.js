
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAFxUSW0fwvixHGs0aSYmsF0XJNDMgNpwo",
  authDomain: "coderhouse-ecommerce-35f73.firebaseapp.com",
  projectId: "coderhouse-ecommerce-35f73",
  storageBucket: "coderhouse-ecommerce-35f73.appspot.com",
  messagingSenderId: "476376934896",
  appId: "1:476376934896:web:139eb2fd6fcacd19c05535",
  measurementId: "G-952DZX4WC4"
};


const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app
}