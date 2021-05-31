import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export default function PayDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen} size="lg">Pay</Button>
            <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="pay-dialog-title">{"Confirm purchase"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="pay-dialog-description">
                        Are you sure you want to make a purchase from {props.merchantName} for ${props.total}?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">No</Button>
                    <Link to="/home/dashboard">
                        <Button onClick={() => {}} color="primary" autoFocus>Yes</Button>
                        
                    </Link>
                    
                </DialogActions>
            </Dialog>
        </div>
    )
}