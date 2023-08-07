// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBKVyKQzrdTwYkhoUYgoNPw56exfEx9RHI",
  authDomain: "pontuamarvel.firebaseapp.com",
  projectId: "pontuamarvel",
  storageBucket: "pontuamarvel.appspot.com",
  messagingSenderId: "147004699234",
  appId: "1:147004699234:web:67f56cfd92ed5e439f173b",
  measurementId: "G-DZQVJ3G2WJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storageApp = getStorage(app);