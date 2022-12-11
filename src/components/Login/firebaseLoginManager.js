
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./firebaseConfig";


export const intializeUserLogin = () =>{
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
}


// FIREBASE GOOGLE SIGNIN 
export const handleGoogleLogin = () =>{
    console.log('signed in')
}