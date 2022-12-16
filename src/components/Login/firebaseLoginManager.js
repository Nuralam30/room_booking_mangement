
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import firebaseConfig from "./firebaseConfig";


export const intializeUserLogin = () =>{
    const app = initializeApp(firebaseConfig);
}


// FIREBASE GOOGLE SIGNIN 
export const handleGoogleLogin = () =>{
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth, provider)
    .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const signedInUser = {
            userName: displayName,
            email: email,
            image: photoURL
        }
        return signedInUser;
    })
    .catch((error) => {
        console.log(error)
    });
}


// FIREBASE USER SIGNUP
export const handleUserSignUp = (email, password) =>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
        const newUserInfo = res.user;
        return newUserInfo;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
    });
}


// FIREBASE USER SIGN IN
export const handleUserSignIn = (email, password) =>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
        const newUserInfo = res.user;
        return newUserInfo;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
    });
}