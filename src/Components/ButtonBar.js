import { Component } from 'react';
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    buttonbar: {
        height: 36,
        width: '100vw',
        // marginLeft: '-4%',
        minWidth: 200,
        backgroundColor: "#f9d44e",
        color: '#27649f',
        fontWeight: 'bold',
    },
    icon:{
        color: '#ffffff',
    },
    fab:{
        backgroundColor: "#f9d44e",
        height: 56, width: 56,
        textAlign: 'center',
        // left: '40%',
        // marginBottom: '-4%',
        position: 'fixed',
        bottom: 85,
        // https://stackoverflow.com/questions/2005954/center-a-positionfixed-element
        left: '50%',
        marginLeft: -28
    },
    root:{
        position:'fixed',
        margin: 0,
        padding: 0,
        bottom: 56
    }
});


export default function ButtonBar() {
    const classes = useStyles();

    return (
        <Link to="/airpay">
            {/* <IconButton className={classes.icon} onClick={() => {}}>
            <NotificationsIcon />
            </IconButton> */}
          
            <Container className={classes.root} onClick={() => {}}>
            <Fab className={classes.fab} aria-label="add">
            <WifiTetheringIcon className={classes.icon}/>
            </Fab>
            <Button variant="contained" className={classes.buttonbar}>
            Swipe to pay for merchants</Button>
            </Container>
        </Link> 
    );
}

