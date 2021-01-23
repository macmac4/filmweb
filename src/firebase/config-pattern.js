import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "",
    authDomain: "filmweb-6478d.firebaseapp.com",
    projectId: "filmweb-6478d",
    storageBucket: "filmweb-6478d.appspot.com",
    messagingSenderId: "188905178487",
    appId: "1:188905178487:web:5392c7b64592f3da1f4d72",
    measurementId: "G-PTTQXV748V"
  };


  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()

  export { projectFirestore }