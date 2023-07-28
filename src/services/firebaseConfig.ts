// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAv9YjHu5i4Vit7ERNb3XCYa_01qgBXKBw",
  authDomain: "learn-by-cases.firebaseapp.com",
  projectId: "learn-by-cases",
  storageBucket: "learn-by-cases.appspot.com",
  messagingSenderId: "232789714143",
  appId: "1:232789714143:web:fcaec6907b3a1e4c3bb56a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storageApp = getStorage(app);