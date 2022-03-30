// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore/lite";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification
} from "firebase/auth";

import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyA6JGG9ZCtcmTX9sYLHcMYApQfOTrmS7zI",
  authDomain: "codigo13-98241.firebaseapp.com",
  projectId: "codigo13-98241",
  storageBucket: "codigo13-98241.appspot.com",
  messagingSenderId: "427655048060",
  appId: "1:427655048060:web:496050dc613a12e0b3d2f9",
  measurementId: "G-1CZBE6G48W",
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
  const clothes = documentClothes.docs.map((doc) => doc.data());

  return clothes;
};

// Debemos crear una funcion que se encargue de poder crear elementos en nuestra base de datos.
//! Ojo vamos a recibir como parametro un objeto que contenga la informacion del producto que estamos creando.
export const storeProductClothe = async (product) => {
  const id = uuidv4().replaceAll("-", "");
  product.id = id;
  await setDoc(doc(db, "product_clothes", id), product);
};

export const updateProductClothe = async (id, product) => {
  const productRef = doc(db, "product_clothes", id);
  await updateDoc(productRef, product);
};

export const deleteProductClothe = async (id) => {
  await deleteDoc(doc(db, "product_clothes", id));
};

// Vamos a crear una funcion que reciba un email y un password y cree una cuenta en firebase.

export const auth = getAuth();

// Esta funcion va a enviar el correo de verificacion.
export const sendEmail = async () => {
  const send = await sendEmailVerification(auth.currentUser);
  return send;
}

// Podemos crear una funcion que no sretorne el usuario actual 
// export const getUserFromFirebase = () => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       return user;
//     } else {
//       return "error user not found";
//     }
//   })
  // const user = auth.currentUser;
  // if (user) {
  //   return user;
  // } else {
  //   return "error user not found";
  // }
// }

export const updateUserProfile = async (profile) => {
  try {
    const user = await updateProfile(auth.currentUser, profile);
    return {
      ok: true,
      data: user,
    }
  } catch (error) {
    return{
      ok: false,
      data: error.message,
    }
  }
}

export const storeUser = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return {
      ok: true,
      data: user,
    };
  } catch (error) {
    return {
      ok: false,
      data: error.message,
    };
  }
};

export const loginUser = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);

    return {
      ok: true,
      data: user,
    };
  } catch (error) {
    return {
      ok: false,
      data: error.message,
    };
  }
};