import React, { useContext, useState } from 'react';
import './Login.css';
import GoogleIcon from '@mui/icons-material/Google';
import { handleGoogleSignIn, handleGoogleSignOut, handleUserSignIn, handleUserSignUp, intializeUserLogin } from './firebaseLoginManager';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


const Login = () => {

    intializeUserLogin();
    
    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    let { from } = location.state || { from: {pathname: '/'} };

    const [ newUser, setNewUser ] = useState(false);
    const [ user, setUser ] = useState({
        isSignedIn : false,
        name : '',
        email : '',
        password : '',
        error: ''
    })


    // redirect to previous page
    const handleRedirect = (res, redirect) =>{
        setUser(res)
        setLoggedInUser(res)
        if(redirect){
            navigate(from)
        }
    }
    
    // firebase google login
    const googleSignIn = () =>{
        handleGoogleSignIn()
        .then(res =>{
            handleRedirect(res, true)
        })
    }


    // google signout firebase
    const googleSignOut = () =>{
        handleGoogleSignOut()
        .then(res => {
            handleRedirect(res, false)
        })
    }


    // form validate
    const handleFormValidate = (e) =>{
        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const passLength = e.target.value.length > 5;
            const isPasswordValid = /\d{1}/.test(e.target.value);
            isFieldValid = passLength && isPasswordValid;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }

    // form submit firebase user
    const handleFormSubmit = (e) =>{
        if(newUser && user.email && user.password){
            handleUserSignUp(user.name, user.email, user.password)
            .then(res =>{
                handleRedirect(res, true)
            })
        }
        if(!newUser && user.email && user.password){
            handleUserSignIn(user.email, user.password)
            .then(res =>{
                handleRedirect(res, true)
            })
        }
        
        e.preventDefault();
    }
    

    return (
        <div className='login'>
            
            <div className="login-form">
                {
                    loggedInUser.isSignedIn ? <Button variant="contained" onClick={googleSignOut}>Sign Out</Button> : 
                    <div className='googleLogin' onClick={googleSignIn}> <GoogleIcon /><span>Login with Google</span></div>
                }
               
                <span>Did you registered already?
                    <Button className='toggleLogin' value="login" onClick= {() =>setNewUser(!newUser)}>{newUser ? 'Login' : 'Register'}</Button>
                </span>

                <form onSubmit={handleFormSubmit}>
                    {
                        newUser && <input type="text" placeholder='Enter your name' name='name' onChange={handleFormValidate} required />
                    }
                    <br />
                    <input type="email" placeholder='Enter your email' name='email' onChange={handleFormValidate} /><br />
                    <input type="password" placeholder='Enter password' name='password' onChange={handleFormValidate} /><br />
                    <label htmlFor="password" style={{color: 'red'}}>password must be at least 6 characters</label><br /><br />
                    <input type="submit" value='Submit' />
                </form>
            </div>
        </div>
    );
};

export default Login;