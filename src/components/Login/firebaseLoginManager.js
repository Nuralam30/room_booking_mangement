
import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";


export const intializeUserLogin = () =>{
    const app = initializeApp(firebaseConfig);
}


// FIREBASE GOOGLE SIGNIN 
export const handleGoogleSignIn = () =>{
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth, provider)
    .then((res) => {
        const { displayName, email } = res.user;
        const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email
        }
        return signedInUser;
    })
    .catch((error) => {
        console.log(error)
    });
}


// FIREBASE GOOGLE SIGN OUT
export const handleGoogleSignOut = () =>{
    const auth = getAuth()
    return signOut(auth)
    .then(res => {
        const signedOutUser = {
            isSignedIn : false,
            name : '',
            email : ''
        }
    return signedOutUser;
    })
    .catch( err => console.log(err))
}


// FIREBASE USER SIGNUP
export const handleUserSignUp = (name, email, password) =>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
        const newUserInfo = res.user;
        return newUserInfo;
    })
    .catch( err => {
        var errMessage = err.message;
        const newUserInfo = {};
        newUserInfo.error = errMessage;
        return newUserInfo;
    })
}


// FIREBASE USER SIGN IN
export const handleUserSignIn = (email, password) =>{
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
        const userSignIn = res.user;
        return userSignIn;
    })
    .catch(err =>{
        var errMessage = err.message;
        const userSignIn = {};
        userSignIn.error = errMessage;
        return userSignIn;
    })
}


// FIREBASE JWT TOKEN
export const storeAuthToken = () =>{ 
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    .then(function(idToken) {
        console.log(idToken)
      }).catch(function(error) {
        // Handle error
      });
}