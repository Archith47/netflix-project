import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBzYXaGD3K6Kz_JcXgx8q514ERHtGH8M7A",
  authDomain: "netflix-clone-38cbc.firebaseapp.com",
  projectId: "netflix-clone-38cbc",
  storageBucket: "netflix-clone-38cbc.appspot.com",
  messagingSenderId: "1041728377332",
  appId: "1:1041728377332:web:0101a69977be3aaefbe9a1"
};  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
