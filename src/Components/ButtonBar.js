import { Component } from 'react';
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';

const useStyles = makeStyles({
    buttonbar: {
        height: 36,
        width: '100%',
        minWidth: 100,
        maxWidth: 2000,
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
        zIndex: 10
    },
    root:{
        marginTop: '8%'
    }
});


export default function ButtonBar() {
    const classes = useStyles();

    return ( 
        <div className={classes.root} onDrag={() => {}}>
        {/* <Fab aria-label="add">
        <WifiTetheringIcon className={classes.icon}/>
        </Fab> */}
        {/* <Button variant="contained" className={classes.buttonbar}>
        Swipe to pay for merchants</Button> */}
        </div>
    );
}

