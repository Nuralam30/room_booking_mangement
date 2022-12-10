import React from 'react';
import './Login.css';
import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import Navbar from '../Header/Navbar/Navbar';

const Login = () => {
    return (
        <div className='login'>
            <Navbar></Navbar>

            <div className="login-form">
            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            </div>
        </div>
    );
};

export default Login;