import React from 'react';
import './Login.css';
import Navbar from '../Header/Navbar/Navbar';

const Login = () => {
    return (
        <div className='login'>
            <Navbar></Navbar>

            <div className="login-form">
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