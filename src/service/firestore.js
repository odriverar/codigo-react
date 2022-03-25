// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyA6JGG9ZCtcmTX9sYLHcMYApQfOTrmS7zI",
  authDomain: "codigo13-98241.firebaseapp.com",
  projectId: "codigo13-98241",
  storageBucket: "codigo13-98241.appspot.com",
  messagingSenderId: "427655048060",
  appId: "1:427655048060:web:496050dc613a12e0b3d2f9",
  measurementId: "G-1CZBE6G48W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ! Iniciar FireStore

const db = getFirestore(app);

//! Hacer la peticion para poder traer los productos

export const getProductClothes = async () => {
  // Paso 1: Traer la coleccion de datos
  const collectionClothes = collection(db, "product_clothes");
  // Paso 2: Traer los documentos.
  const documentClothes = await getDocs(collectionClothes);
  //  Paso 3: Crear un arreglo que guarde los documentos que estamos obtenieno.
  const clothes = documentClothes.docs.map(doc => doc.data());

  return clothes;
}