import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivetRoute = ({children , ...rest}) => {
    const {user, isLoading} = useAuth();
    if (isLoading) {
        return <Spinner className="item-center mt-5" animation="border" variant="danger" />
        
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect to={{ pathname: "/login", state: { from: location } }}>
            </Redirect>}>
        </Route>
    );
};

export default PrivetRoute;