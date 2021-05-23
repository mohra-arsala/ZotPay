import { Component } from 'react';
import React from 'react';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import CameraAlt from '@material-ui/icons/CameraAlt';
import Typography from '@material-ui/core/Typography';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import CameraIcon from '@material-ui/icons/Camera';

export default function ParkingHourly() {

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
            <div className="parkingTextField_container">
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
                    className="parkingTextField"
                />
            </div>

            <div className="modalBottom">
                <div className="durationDiv">
                <div className="parkingDurationHeader">
                    <Typography variant="h6" component="div">
                        Set Parking Duration
                    </Typography>
                </div>
                    <div>
                        <div>
                            <ArrowDropUpIcon className="upIcon"></ArrowDropUpIcon>
                            <ArrowDropUpIcon className="upIcon"></ArrowDropUpIcon>
                        </div>
                        <div>
                            <p className="incrementTimeWidget">00:00</p>
                        </div>
                        <div>
                            <ArrowDropDownIcon className="downIcon"></ArrowDropDownIcon>
                            <ArrowDropDownIcon className="downIcon"></ArrowDropDownIcon>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="parkingTextField_container">
                <TextField 
                    label="Number of Days"
                    type="number"
                    defaultValue="0"
                    variant="outlined"
                    className="parkingTextField"
                />
            </div>

            <div className="parkingTextField_container">
                <TextField 
                    label="Number of Hours"
                    type="number"
                    defaultValue="0"
                    variant="outlined"
                    className="parkingTextField"
                />
            </div> */}

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