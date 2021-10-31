import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const { user, googleSignIn } = useAuth();

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
        <div className="pagesize">
            <Container>

                <h1 className="text-center mt-5 ">Please Log in</h1>
                <Button className="my-5" style={{display:"block", margin:"auto"}} onClick={handleGoogleSignIn}>Google Sign in</Button>

            </Container>

        </div>
    );
};

export default Login;