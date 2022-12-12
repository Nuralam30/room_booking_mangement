
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