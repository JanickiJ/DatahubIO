import React, {useState, useEffect, useRef} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Start from './Start'

export default function DialogStart({defaultOpen, handleCloseCallback}) {
    console.log("meeee")
    console.log(defaultOpen)
    const [open, setOpen] = useState(defaultOpen);
    console.log(open)
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        handleCloseCallback()
    };
    const descriptionElementRef = useRef(null);
    useEffect(() => {
        setOpen(defaultOpen);
    }, [defaultOpen])
    useEffect(() => {
        if (open) {
            const {current: descriptionElement} = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);
    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <Start/>
            <DialogActions>
                <Button onClick={handleClose}>Zamknij</Button>
            </DialogActions>
        </Dialog>);
}