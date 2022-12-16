import React, { useContext, useState } from 'react';
import './Login.css';
import Navbar from '../Header/Navbar/Navbar';
import GoogleIcon from '@mui/icons-material/Google';
import { handleGoogleLogin, intializeUserLogin } from './firebaseLoginManager';
import { UserContext } from '../../App';
import ToggleButton from '@mui/material/ToggleButton';


const Login = () => {

    intializeUserLogin();
    
    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const [ newUser, setNewUser ] = useState(false);
    const [ currentUser, setCurrentUser ] = useState({
        name: '',
        email: '',
        password: ''
    })

    
    const googleSignIn = () =>{
        handleGoogleLogin()
        .then(res =>{
            const user = {
                name: res.userName,
                email: res.email,
                userImage: res.image,
                isSignedIn: true
            }
            setLoggedInUser(user);
        })
    }

    const handleFormValidate = (e) =>{
        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const passLength = e.target.value.length > 4;
            const isPasswordValid = /\d{1}/.test(e.target.value);
            isFieldValid = passLength && isPasswordValid;
        }
        if(isFieldValid){
            const newUserInfo = {...currentUser};
            newUserInfo[e.target.name] = e.target.value;
            setCurrentUser(newUserInfo)
        }
    }

    // form submit firebase user
    const handleFormSubmit = (e) =>{
        console.log(currentUser)
        e.preventDefault();
    }

    return (
        <div className='login'>
            <Navbar></Navbar>

            <div className="login-form">
                <div className='googleLogin' onClick={googleSignIn}> <GoogleIcon /><span>Login with Google</span></div>
               
                <span>Did you registered already?
                    <ToggleButton className='toggleLogin' value="login" onClick= {() =>setNewUser(!newUser)}>{newUser ? 'Login' : 'Register'}</ToggleButton>
                </span>

                <form onSubmit={handleFormSubmit}>
                    {
                        newUser && <input type="text" placeholder='Enter your name' name='name' onChange={handleFormValidate} required />
                    }
                    <br />
                    <input type="email" placeholder='Enter your email' name='email' onChange={handleFormValidate} /><br />
                    <input type="password" placeholder='Enter password' name='password' onChange={handleFormValidate} /><br />
                    <label htmlFor="password" style={{color: 'red'}}>password must be at least 4 characters</label><br /><br />
                    <input type="submit" value='Submit' />
                </form>
            </div>
        </div>
    );
};

export default Login;