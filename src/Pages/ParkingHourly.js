import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import CameraAlt from '@material-ui/icons/CameraAlt';

import ParkingDurationSpinner from '../Components/ParkingDurationSpinner';
import ScanDialog from '../Components/ScanDialog';

import ParkingButtonBar from '../Components/ParkingButtonBar';

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
    const [license, setLicense] = React.useState("");
    const [showPayBar, setShowPayBar] = React.useState(false);

    const handleScanOpen = () => {
        setScanOpen(true);
    }

    const handleScanClose = () => {
        setScanOpen(false);
    }

    const handleScanConfirm = () => {
        setScanOpen(false);
        setLicense("7TYP290");
        setShowPayBar(true);
    }

    return(
        <div>
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

                <ScanDialog onClose={handleScanClose} onConfirm={handleScanConfirm} open={scanOpen}></ScanDialog>

            </Container>

            <div>
                {showPayBar? <ParkingButtonBar></ParkingButtonBar> : null}
            </div>
        </div>
    );
}