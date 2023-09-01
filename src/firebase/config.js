import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsT1cf78GfWLAl6JGZCeSsOdgBCNyctRY",
  authDomain: "awesomeproject-a1e9d.firebaseapp.com",
  databaseURL:
    "https://awesomeproject-a1e9d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "awesomeproject-a1e9d",
  storageBucket: "awesomeproject-a1e9d.appspot.com",
  messagingSenderId: "762622440939",
  appId: "1:762622440939:web:f07abe7ae9e245f8af95ae",
  measurementId: "G-ZRXJC3GHVN",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
export const storage = getStorage(app);
