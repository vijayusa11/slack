import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Message from './Message';

function Chat() {
    const chatRef = useRef(null);
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(roomId && db.collection('rooms').doc(roomId))
    const [roomMessages, loading] = useCollection(roomId && db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc'))
    console.log(roomDetails?.data());
    console.log(roomMessages);

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: 'smooth',
        });
    }, [roomId, loading]);

    return (
        <ChatContainer>
            {roomDetails && roomMessages && (
                <>
                <Header>
                    <HeaderLeft>
                        <h4>
                            <strong>#{roomDetails?.data().name}</strong>
                            <StarBorderIcon />
                        </h4>
                    </HeaderLeft>
                    <HeaderRight>
                            <p><InfoIcon /> Details</p>
                    </HeaderRight>
                </Header>
                <ChatMessage>
                    {roomMessages?.docs.map(doc => {
                        const { message, timestamp, user, userImage } = doc.data();
                        return (
                            <Message 
                                key={doc.id}
                                message={message}
                                timestamp={timestamp}
                                user={user}
                                userImage={userImage}
                            />
                        )
                    })}
                    <ChatBottom ref={chatRef} />
                </ChatMessage>
                
                    <ChatInput chatRef={chatRef} channelName={roomId && roomDetails?.data().name} channelId={roomId} />
                </>
            )}
            
        </ChatContainer>
    )
}

export default Chat


const ChatBottom = styled.div`
    margin-bottom: 200px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h4 {
       display: flex;
       text-transform: lowercase;
       align-items: center;
    }

    > h4 > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 18px;
    }
`;

const HeaderRight = styled.div`
> p {
    display: flex;
    align-items: center;
    font-size: 14px;
}
> p > .MuiSvgIcon-root {
    margin-right: 7px;
    font-size: 16px;
}
`;

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`;

const ChatMessage = styled.div``;
