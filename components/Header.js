import { Avatar } from '@material-ui/core';
import React from 'react';
import styled from  'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


function Header() {
    const [user] = useAuthState(auth);
    const signOut = () => {
        auth.signOut();
    }
    console.log(user);
    return (
        <>      
            <HeaderContainer>
                
                <HeaderLeft>
                    <Avatar onClick={() => auth.signOut()} src={user?.photoURL} alt={user?.displayName} />
                </HeaderLeft>
                
                <AccessTimeIcon style={{ marginLeft: '100px '}} />

                <HeaderSearch>
                    <SearchIcon/>
                    <input placeholder='Search' type='text'/>  
                </HeaderSearch>
                
                <HeaderRight>
                    <HelpOutlineIcon style={{ marginLeft: '20px '}} />
                </HeaderRight>
                
            </HeaderContainer>
        </>
    )
}

export default Header;

    const HeaderContainer = styled.div`
        display: flex;
        position: fixed;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
        background-color: var(--slack-color);
        color: whitesmoke;
        min-width: 220px !important;
    `; 

    const HeaderLeft = styled.div`
        flex: 0.3;
        display: flex;
        align-items: center;
        margin-left: 20px;
        max-width: 260px;
        margin-right: 20px;

        > .MuiSvgIcon-root {
            margin-left: auto;
            margin-right: 30px;
            margin-left: 230px;
        }
    `;

    const HeaderAvatar = styled(Avatar)`
        cursor: pointer;
        object-fit: contain;
        :hover {
            opacity: 0.8;
        }
    `;

    const HeaderSearch = styled.div`
        flex: 0.4;
        display: flex;
        opacity: 1;
        border-radius: 6px;
        padding: 5px 50px;
        align-items: center;
        color: gray;
        border: 1px solid gray;
        margin-left: 20px;

        > input {
            background-color: transparent;
            border: none;
            margin-left: 20px;
            min-width: 30vw;
            outline: none;
            font-size: 14px;
            color: whitesmoke;
        }

            :hover {
                background-color: #360836;
            }
        
        > .MuiSvgIcon {
            margin-left: 20px;
            margin-right: 20px;
        }

        }
    `;

    const HeaderRight = styled.div`
            flex: 0.3;
            display: flex;
            align-items: flex-end;
            margin-left: 500px;
            
            .MuiSvgIcon-root {
              right: 0;
            }
    `;

