import firebase from "firebase";
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "#",
    authDomain: "#",
    databaseURL: "#",
    projectId: "#",
    storageBucket: "#",
    messagingSenderId: "#",
    appId: "#",
    measurementId: "#"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

export {
    projectStorage, projectFirestore
}
