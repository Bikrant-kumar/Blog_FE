import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';

function Login() {
    const {loginWithRedirect,isAuthenticated} = useAuth0();
    return (
        !isAuthenticated && ( 
        <Button onClick={()=>loginWithRedirect()} color="inherit">
            Log In
        </Button>
    ))
}

export default Login

