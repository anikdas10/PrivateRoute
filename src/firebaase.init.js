
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCsEOwtKYxDatteHvxmUp2WSllEmzwpJis",
  authDomain: "auth-moha-milon-483e7.firebaseapp.com",
  projectId: "auth-moha-milon-483e7",
  storageBucket: "auth-moha-milon-483e7.firebasestorage.app",
  messagingSenderId: "478435213870",
  appId: "1:478435213870:web:4cbefc5a03aad3930995bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
