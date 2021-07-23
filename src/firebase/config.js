import firebase from "firebase";
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBVg2rD7U_4qNnSD3oimn3mZQxraABuNoA",
    authDomain: "react-store-aa82e.firebaseapp.com",
    databaseURL: "https://react-store-aa82e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-store-aa82e",
    storageBucket: "react-store-aa82e.appspot.com",
    messagingSenderId: "501442395006",
    appId: "1:501442395006:web:0f37eed77d89427f37512f",
    measurementId: "G-MNB8Z3Y47Q"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

export {
    projectStorage, projectFirestore
}