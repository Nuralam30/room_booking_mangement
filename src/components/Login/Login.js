import React, { useContext } from 'react';
import './Login.css';
import Navbar from '../Header/Navbar/Navbar';
import GoogleIcon from '@mui/icons-material/Google';
import { handleGoogleLogin, intializeUserLogin } from './firebaseLoginManager';
import { UserContext } from '../../App';


const Login = () => {

    intializeUserLogin();
    
    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);
    
    const googleSignIn = () =>{
        handleGoogleLogin()
        .then(res =>{
            const user = {
                name: res.userName,
                email: res.email,
                userImage: res.image
            }
            setLoggedInUser(user);
            console.log(user)
        })
    }

    return (
        <div className='login'>
            <Navbar></Navbar>

            <div className="login-form">
                <div className='googleLogin' onClick={googleSignIn}> <GoogleIcon /><span>Login with Google</span></div>

                <form action="signIn" method='post'>
                    <input type="text" placeholder='Enter your name' name='name' /><br />
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