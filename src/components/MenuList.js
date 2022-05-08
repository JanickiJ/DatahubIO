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

export default function MenuList({ onFileUpload }) {
  const handleClick = onFileUpload;
  return (
    <List>
      <ListItem disablePadding>
        <IconButton sx={{ pr: "25px", pl: "25px" }} onClick={handleClick} component="label">
          <input type="file" hidden />
          <UploadFileIcon />
        </IconButton>
        <ListItemText primary="Upload config" />
      </ListItem>
      <ListItem disablePadding>
        <IconButton sx={{ pr: "25px", pl: "25px" }} component="label">
          <VisibilityOffIcon />
        </IconButton>
        <ListItemText primary="Toggle widget" />
      </ListItem>
    </List>
  );
}
