
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user, 'logged in successfuly')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode)
        console.log(errorMessage)
    });
}

export const handleUserSignIn = () =>{

}