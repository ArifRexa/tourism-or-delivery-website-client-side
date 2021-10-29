import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const {user, googleSignIn} = useAuth();

    const history = useHistory()
    const location = useLocation()
    const redirectUri = location.state?.from || "/home"


    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            history.push(redirectUri)
        })
    }
    return (
        <div>
            <h1>Please Log in</h1>
            <Button onClick = {handleGoogleSignIn}>Google Sign in</Button>
            
        </div>
    );
};

export default Login;