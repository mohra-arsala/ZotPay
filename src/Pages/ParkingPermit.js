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

import ScanDialog from '../Components/ScanDialog';
import ConfirmDialog from '../Components/ConfirmDialog';
import ConfirmationDialog from '../Components/ConfirmationDialog';

import { useHistory } from 'react-router-dom';

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
    },
    payButton: {
        backgroundColor: '#0057B2',
        color: '#fff'
    }
});

export default function ParkingHourly() {

    const classes = useStyles();
    const history = useHistory();
    const [scanOpen, setScanOpen] = React.useState(false);
    const [license, setLicense] = React.useState("");
    const [isDisabled, disable] = React.useState(true);
    const [confirmOpen, setConfirmOpen] = React.useState(false);
    const [confirmationOpen, setConfirmationOpen] = React.useState(false);

    const handleScanOpen = () => {
        setScanOpen(true);
    }

    const handleScanClose = () => {
        setScanOpen(false);
    }

    const handleScanConfirm = () => {
        setScanOpen(false);
        setLicense("7TYP290");
        disable(false);
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
        history.push("/home/dashboard");
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
                <Button disabled={isDisabled} variant="contained" className={classes.payButton} onClick={handleConfirmOpen}>Pay</Button>
            </div>

            {/* Dialogs */}
            <ScanDialog onClose={handleScanClose} onConfirm={handleScanConfirm} open={scanOpen}></ScanDialog>

            <ConfirmDialog 
                onClose={handleConfirmClose} 
                onConfirm={handleConfirmationOpen} 
                open={confirmOpen} 
                title='Confirm purchase'>
                    Are you sure you want to purchase this S-type permit for Zone 1 from Sep 23, 2021 to June 9, 2022?
            </ConfirmDialog>

            <ConfirmationDialog 
                onClose={handleConfirmationClose} 
                onConfirm={handleConfirmationClose} 
                open={confirmationOpen} 
                title="Thank you for your purchase">
                    Please check your email for more information on retrieving your physical permit.
            </ConfirmationDialog>
        </Container>
    );
}