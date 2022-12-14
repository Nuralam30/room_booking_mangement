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
    const [ user, setUser ] = useState({
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
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }

    // form submit firebase user
    const handleFormSubmit = (e) =>{
        console.log(user)
        e.preventDefault();
    }

    return (
        <div className='login'>
            <Navbar></Navbar>

            <div className="login-form">
                <div className='googleLogin' onClick={googleSignIn}> <GoogleIcon /><span>Login with Google</span></div>
               
                <ToggleButton className='toggleLogin' value="login" onClick= {() =>setNewUser(!newUser)}>{newUser ? 'Login' : 'Register'}</ToggleButton>

                <form onSubmit={handleFormSubmit}>
                    {
                        newUser && <input type="text" placeholder='Enter your name' name='name' />
                    }
                    <br />
                    <input type="email" placeholder='Enter your email' name='email' onChange={handleFormValidate} /><br />
                    <input type="password" placeholder='Enter password' name='password' onChange={handleFormValidate} /><br />
                    <input type="submit" value='Submit' />
                </form>
            </div>
        </div>
    );
};

export default Login;