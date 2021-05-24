import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import CameraAlt from '@material-ui/icons/CameraAlt';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import CameraIcon from '@material-ui/icons/Camera';

const useStyles = makeStyles({
    textFieldContainer: {
        margin: '20px'
    },
    textField: {
        width: '100%'
    },
    formControl: {
        width: '100%'
    },
    select: {
        margin: '20px'
    },
    payButtonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '20px'
    }
});

export default function ParkingHourly() {

    const classes = useStyles();
    const [scanOpen, setScanOpen] = React.useState(false);
    const [license, setValue] = React.useState("");
    const [confirmOpen, setConfirmOpen] = React.useState(false);
    const [confirmationOpen, setConfirmationOpen] = React.useState(false);

    const handleScanOpen = () => {
        setScanOpen(true);
    }

    const handleScanClose = () => {
        setScanOpen(false);
        setValue("7TYP290");
    }

    const handleConfirmOpen = () => {
        setConfirmOpen(true);
    }

    const handleConfirmClose = () => {
        setConfirmOpen(false);
    }

    const handleConfirmationOpen = () => {
        setConfirmOpen(false);
        setConfirmationOpen(true);
    }

    const handleConfirmationClose = () => {
        setConfirmationOpen(false);
    }

    return (
        <Container maxWidth="sm">

            {/* Tab Content */}

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
            <FormControl required variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple" className={classes.select}>Permit Type</InputLabel>
                <Select
                    native
                    label="Permit Type"
                    className={classes.select}
                >
                    <option>"S" Zone Commuter</option>
                    <option>"P" Preferred Zone Commuter</option>
                    <option>"R" Resident</option>
                    <option>"E" Evening</option>
                    <option>"MX" Motorcycle</option>
                    <option>"MBA" Permit</option>
                </Select>
            </FormControl>
            <FormControl required variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple" className={classes.select}>Zone</InputLabel>
                <Select
                    native
                    label="Zone"
                    className={classes.select}
                >
                    <option>Zone 1: Mesa Parking Structure, Lots 14, 14A, ARC, 36</option>
                    <option>Zone 3: Lots 16H, 70, ARC, 36</option>
                    <option>Zone 4: Anteater Parking Structure, Lots 36, ARC</option>
                    <option>Zone 5: Social Science Parking Structure, Lots 36, ARC</option>
                    <option>Zone 6: Student Center Parking Structure, Lots 5, 36, ARC</option>
                </Select>
            </FormControl>
            <div className={classes.textFieldContainer}>
                <TextField 
                    required
                    type="date"
                    label="Permit Start Date"
                    defaultValue="2021-09-23"
                    variant="outlined"
                    className={classes.textField}
                />
            </div>
            <div className={classes.textFieldContainer}>
                <TextField 
                    required
                    type="date"
                    label="Permit End Date"
                    defaultValue="2022-06-09"
                    variant="outlined"
                    className={classes.textField}
                />
            </div>
            <div className={classes.payButtonContainer}>
                <Button variant="contained" color="primary" onClick={handleConfirmOpen}>Pay</Button>
            </div>

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

            {/* Confirm Dialog */}
            <Dialog onClose={handleConfirmClose} open={confirmOpen}>
                <DialogTitle>
                    Confirm purchase
                </DialogTitle>
                <DialogContent>
                    Are you sure you want to purchase this S-type permit for Zone 1 from Sep 23, 2021 to June 9, 2022?
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleConfirmClose}>No</Button>
                    <Button color="primary" onClick={handleConfirmationOpen}>Yes</Button>
                </DialogActions>
            </Dialog>

            {/* Confirmation Dialog */}
            <Dialog onClose={handleConfirmationClose} open={confirmationOpen}>
                <DialogTitle>
                    Thank you for your purchase
                </DialogTitle>
                <DialogContent>
                   Please check your email for more information on retrieving your physical permit.
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleConfirmationClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}