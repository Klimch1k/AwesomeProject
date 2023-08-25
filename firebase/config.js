// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6ePL0ovZjissXjXOUY2aCRfn2-YX0kGo",
  authDomain: "awesomeproject-c7a53.firebaseapp.com",
  databaseURL:
    "https://awesomeproject-c7a53-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "awesomeproject-c7a53",
  storageBucket: "awesomeproject-c7a53.appspot.com",
  messagingSenderId: "775911000639",
  appId: "1:775911000639:web:0a3b6acb3b5ab2b480468a",
  measurementId: "G-TKML3NT119",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
