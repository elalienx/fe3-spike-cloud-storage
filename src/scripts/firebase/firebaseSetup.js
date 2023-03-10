import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Properties
const setup = {
  apiKey: "AIzaSyDveHYg89r_GInm6hDPbqUpbxHVtAmggBU",
  authDomain: "fe3-spike-firestore.firebaseapp.com",
  projectId: "fe3-spike-firestore",
  storageBucket: "fe3-spike-firestore.appspot.com",
  messagingSenderId: "175225435910",
  appId: "1:175225435910:web:750da1721d3ce9f3af5087",
};
const firebaseApp = initializeApp(setup);

// Exports
export const cloudStorage = getStorage(firebaseApp);
