import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import styled from 'styled-components';
import { db } from '../firebase';
import firebase from 'firebase';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({ channelId, channelName, chatRef }) {
    const [input, setInput] = useState('');
    const [user] = useAuthState(auth);
    const sendMessage = (e) => {
        e.preventDefault();
        console.log(channelId);
        if (!channelId) {
            return false;
        }
        else {
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL,
            });
            setInput('');
            chatRef?.current?.scrollIntoView({
                behavior: 'smooth',
            });
        };
        
    }
    return (
        <ChatInputContainer>
            <form>
                <input value={input} placeholder= {`Message #${channelName}`} onChange={(e) => setInput(e.target.value)} />
                <Button hidden type='submit' onClick={sendMessage}></Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
    
    > form > input 
    { 
    position: fixed;
    bottom: 30px;
    padding: 15px;
    width: 60%;
    border-radius: 3px;
    outline: none;
    border: 1px dotted gray;
    font-size: 16px;
    }

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }
`;