import React, { useState } from "react";
import ListItemText from "@mui/material/ListItemText";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DialogStart from "./DialogStart";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default function MenuList({
  onFileUpload,
  checkVPN,
  datesToggled,
  toggleDate, resetApp
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = onFileUpload;
  const onClickVpnLock = checkVPN;
  const onToggleDate = () => {
    toggleDate(datesToggled);
  };
  const onClickMenuBook = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const onReset = () =>{
    resetApp()
    window.location.reload(true);
  }
  return (
    <React.Fragment>
      <DialogStart handleCloseCallback={handleClose} defaultOpen={isOpen} />
      <List sx={{ pl: "5px" }}>
        <ListItem sx={{ mt: 2, mb: 2 }} disablePadding>
          <IconButton sx={{ pl: 2.5, pr: 3 }} component="label">
            <input type="file" hidden onChange={handleClick} />
            <UploadFileIcon />
          </IconButton>
          <ListItemText primary="Załaduj konfig" />
        </ListItem>
        <ListItem sx={{ mt: 2, mb: 2 }} disablePadding>
          <IconButton
            sx={{ pl: 2.5, pr: 3 }}
            onClick={onToggleDate}
            component="label"
          >
            <VisibilityOffIcon />
          </IconButton>
          <ListItemText primary={datesToggled ? "Pokaż legendę" : "Ukryj legendę"} />
        </ListItem>
        <ListItem sx={{ mt: 2, mb: 2 }} disablePadding>
          <IconButton
            onClick={onClickMenuBook}
            sx={{ pl: 2.5, pr: 3 }}
            component="label"
          >
            <MenuBookIcon />
          </IconButton>
          <ListItemText primary="Przewodnik" />
        </ListItem>
        <ListItem disablePadding>
          <IconButton
            onClick={onClickVpnLock}
            sx={{ pl: 2.5, pr: 3 }}
            component="label"
          >
            <VpnLockIcon />
          </IconButton>
          <ListItemText primary="Sprawdź VPN" />
        </ListItem>
          <ListItem sx={{ mt: 2, mb: 2 }} disablePadding>
              <IconButton
                  sx={{ pl: 2.5, pr: 3 }}
                  onClick={onReset}
                  component="label"
              >
                  <RestartAltIcon />
              </IconButton>
              <ListItemText primary="Zrestartuj aplikacje" />
          </ListItem>
      </List>
    </React.Fragment>
  );
}
