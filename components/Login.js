import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import {auth} from '../firebase';
import {provider} from '../firebase';

function Login() {
    const SignIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider)
        .then((result) => console.log(result))
        .catch((error) => alert(error.message));
        <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase-app.js"></script>

    }
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src='data:image/jpeg;base64,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' alt='vijay' />
                <h1>Sign In</h1>
                <p>Vijay-slack</p>
                <Button onClick={SignIn}>Sign in with Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    display: grid;
    place-items: center;
    background-color: #f8f8f8;
    height: 100vh;
`;

const LoginInnerContainer = styled.div`
    padding: 100px !important;
    background-color: white;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    > img { 
    height: 100px;
    object-fit: contain;
    margin-bottom: 20px;
    }

    > Button {
        background-color: greenyellow;
        margin-top: 50px;
        color: black;
        font-weight: 300;
    }
`;