import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeW-ZnfFSeloe47IQpM2wZoEfaV1brgVE",
    authDomain: "olx-clone-ca084.firebaseapp.com",
    projectId: "olx-clone-ca084",
    storageBucket: "olx-clone-ca084.appspot.com",
    messagingSenderId: "1075499501308",
    appId: "1:1075499501308:web:b533cf1d998aa6e1ee7979",
    measurementId: "G-8692G3Y10Q"
  };
 export default firebase.initializeApp(firebaseConfig)