import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import InboxIcon from "@mui/icons-material/Inbox";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import DraftsIcon from "@mui/icons-material/Drafts";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VpnLockIcon from '@mui/icons-material/VpnLock';

export default function MenuList({onFileUpload, checkVPN}) {
    const handleClick = onFileUpload;
    const onClickVpnLock = checkVPN;
    return (
        <List sx={{pl: "5px"}}>
            <ListItem disablePadding>
                <IconButton sx={{pl: 2.5, pr: 3}} component="label">
                    <input type="file" hidden onChange={handleClick}/>
                    <UploadFileIcon/>
                </IconButton>
                <ListItemText primary="Upload config"/>
            </ListItem>
            <ListItem disablePadding>
                <IconButton sx={{pl: 2.5, pr: 3}} component="label">
                    <VisibilityOffIcon/>
                </IconButton>
                <ListItemText primary="Toggle widget"/>
            </ListItem>
            <ListItem disablePadding>
                <IconButton onClick={onClickVpnLock} sx={{pl: 2.5, pr: 3}} component="label">
                    <VpnLockIcon/>
                </IconButton>
                <ListItemText primary="Sprawdź VPN"/>
            </ListItem>
        </List>
)
    ;
}
