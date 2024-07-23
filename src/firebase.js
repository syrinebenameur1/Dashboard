import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqFkzlmXrRQrQM4pS_S1nRVTB-nhpBjpU",
  authDomain: "dashboard-d92f2.firebaseapp.com",
  projectId: "dashboard-d92f2",
  storageBucket: "dashboard-d92f2.appspot.com",
  messagingSenderId: "438422041450",
  appId: "1:438422041450:web:e9b7f2261928032840ab13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);