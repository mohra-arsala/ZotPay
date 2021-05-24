import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import CameraAlt from '@material-ui/icons/CameraAlt';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import CameraIcon from '@material-ui/icons/Camera';

import ParkingDurationSpinner from '../Components/ParkingDurationSpinner';

const useStyles = makeStyles({
    textFieldContainer: {
        margin: '20px'
    },
    textField: {
        width: '100%'
    }
});

export default function ParkingHourly() {

    const classes = useStyles();
    const [scanOpen, setScanOpen] = React.useState(false);
    const [license, setValue] = React.useState("");

    const handleScanOpen = () => {
        setScanOpen(true);
    }

    const handleScanClose = () => {
        setScanOpen(false);
        setValue("7TYP290");
    }

    return(
        <Container maxWidth="sm">
            <div className={classes.textFieldContainer}>
                <TextField 
                    required
                    label="License Plate"
                    value={license}
                    variant="outlined"
                    InputProps={{
                        endAdornment: 
                        <InputAdornment position="end">
                            <IconButton onClick={handleScanOpen}>
                                <CameraAlt/>
                            </IconButton>
                        </InputAdornment>,
                    }}
                    className={classes.textField}
                />
            </div>

            <ParkingDurationSpinner></ParkingDurationSpinner>

            {/* Scan Dialog */}
            <Dialog onClose={handleScanClose} open={scanOpen}>
                <DialogTitle style={{backgroundColor: '#ffd200'}}>
                    <IconButton onClick={handleScanClose} color="primary">
                        <CloseIcon/>
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <img src="./license_plate.jpg" alt="License Plate" style={{width: '100%'}}/>
                </DialogContent>
                <DialogActions style={{justifyContent: 'center', backgroundColor: '#0064a4'}}>
                    <IconButton onClick={handleScanClose} style={{color: '#ffffff'}}>
                        <CameraIcon/>
                    </IconButton>
                </DialogActions>
            </Dialog>

        </Container>
        
        
    );
}