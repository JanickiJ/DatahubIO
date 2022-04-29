import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import InboxIcon from '@mui/icons-material/Inbox';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import DraftsIcon from '@mui/icons-material/Drafts';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

export default function MenuList({onFileUpload}) {
    const handleClick = onFileUpload;
    return (
        <List sx={{pl:'5px'}}>
            <ListItem disablePadding>
                <ListItemButton onClick={handleClick}>
                    <input
                        type="file"
                        hidden
                    />
                    <ListItemIcon>
                        <UploadFileIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Upload config"/>
                </ListItemButton>
            </ListItem>
        </List>
    );
}