import React, { useContext, useState } from 'react';
import './Login.css';
import Navbar from '../Header/Navbar/Navbar';
import GoogleIcon from '@mui/icons-material/Google';
import { handleGoogleLogin, intializeUserLogin } from './firebaseLoginManager';
import { UserContext } from '../../App';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const Login = () => {

    intializeUserLogin();
    
    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const [ newUser, setNewUser ] = useState(false);
    const [ alignment, setAlignment ] = useState('login')
    
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

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
      };

    return (
        <div className='login'>
            <Navbar></Navbar>

            <div className="login-form">
                <div className='googleLogin' onClick={googleSignIn}> <GoogleIcon /><span>Login with Google</span></div>

                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    onClick= {() =>setNewUser(!newUser)}
                    aria-label="Platform"
                    className='toggleLogin'
                    >
                    <ToggleButton value="login">Login</ToggleButton>
                    <ToggleButton value="register">Register</ToggleButton>
                </ToggleButtonGroup>

                <form action="signIn" method='post'>
                    {
                        newUser && <input type="text" placeholder='Enter your name' name='name' />
                    }
                    <br />
                    <input type="email" placeholder='Enter your email' name='email' /><br />
                    <input type="password" placeholder='Enter password' name='password' /><br />
                    <input type="submit" value='SignUp' />
                    <p>Already have an account? <span>SignIn</span></p>
                </form>
            </div>
        </div>
    );
};

export default Login;