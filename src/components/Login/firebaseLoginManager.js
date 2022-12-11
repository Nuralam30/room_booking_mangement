
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseConfig from "./firebaseConfig";


export const intializeUserLogin = () =>{
    const app = initializeApp(firebaseConfig);
}


// FIREBASE GOOGLE SIGNIN 
export const handleGoogleLogin = () =>{
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then((result) => {
        console.log('user signed in')
    }).catch((error) => {
        console.log(error)
    });
}