import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { enterRoom } from '../features/appSlice';
import {db} from '../firebase'

function SidebarOption({ Icon, text, addChannelOption, id }) {
    const dispatch = useDispatch('');
    
    const addchannel = () => {
        const channelName = prompt('Please enter Channel Name');
        if (channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }
    const selectchannel = () => {
        if (id) {
            dispatch(enterRoom({
                roomId: id,
            }))
            
        }
    }
   
    return (
        <SidebarOptionContainer onClick={addChannelOption ? addchannel : selectchannel }>
            {Icon && <Icon fontSize='small' style={{ padding: '10px', marginLeft: '10px', marginRight: '10px' }}/>}
            {Icon ? (
                <h3>{text}</h3>
            ) : (
                <SidebarOptionChannel>
                    <span>#</span>{text}
                </SidebarOptionChannel>
            )}
        </SidebarOptionContainer>
    )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 12px;

    :hover {
        opacity: 0.8;
        background-color: #340e36;
    }

    > h3 {
        font-weight: 500;
    }

    > h3 > span {
        padding: 15px;
    }
`;

const SidebarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;
`;