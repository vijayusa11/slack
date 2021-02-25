import React from 'react'
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import channels from './SidebarOption';
import {db} from '../firebase'
import {useCollection} from 'react-firebase-hooks/firestore';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function SideBar() {
    const [channels] = useCollection(db.collection('rooms'));
    const [user] = useAuthState(auth);
    return (
        
            <SideBarContainer>
                <SideBarHeader>
                    <SideBarInfo>
                        <h2>SARITA</h2>
                        <h3>
                            <FiberManualRecordIcon />
                            {user.displayName}
                        </h3>
                    </SideBarInfo>
                    <CreateIcon />
                </SideBarHeader>
                <SidebarOption Icon={MoreVertIcon} text={'Browse Slack'}/>
                <SidebarOption Icon={InsertCommentIcon} text={'Threads'}/>
                <SidebarOption Icon={InboxIcon} text={'Mentions & Reactions'}/>
                <SidebarOption Icon={DraftsIcon} text={'Saved Items'}/>
                <SidebarOption Icon={BookmarkBorderIcon} text={'Channel Browser'}/>
                <SidebarOption Icon={PeopleAltIcon} text={'People & User Groups'}/>
                <SidebarOption Icon={AppsIcon} text={'Apps'}/>
                <SidebarOption Icon={FileCopyIcon} text={'File Browser'}/>
                <SidebarOption Icon={ExpandLessIcon} text={'Show Less'}/>
                <hr/>
                <SidebarOption Icon={ExpandMoreIcon} text={'Channels'}/>
                <hr />
                <SidebarOption Icon={AddIcon} addChannelOption text={'Add Channel'}/>
                {channels?.docs.map((doc) => (
                    <SidebarOption key={doc.id} id={doc.id} text={doc.data().name}/>
                ))}
                
            </SideBarContainer>
        
    )
}

export default SideBar

const SideBarContainer = styled.div`
    color: whitesmoke;
    background-color: var(--slack-color);
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    min-width: 220px;
    margin-top: 60px;
    overflow-y: scroll;

    > hr {
        margin-top: 5px;
        margin-bottom: 5px;
        border: 1px solid #49274b;
    }
`;
const SideBarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 12px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        background-color: whitesmoke;
        font-size: 18px;
        border-radius: 999px;
    }
`;
const SideBarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 800;
        margin-bottom: 5px;
    }
    > h3 {
        display: flex;
        font-size: 12px;
        font-weight: 500;
        align-items: center;
    }
    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin: 1px 2px;
        color: green;
    }
`;