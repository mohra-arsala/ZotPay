import { Component } from 'react';
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles({
    buttonbar: {
        height: 36,
        width: '100%',
        minWidth: 250,
        left: 0,right: 0, bottom: 0,
        backgroundColor: "#f9d44e",
        color: '#27649f',
        fontWeight: 'bold',
    },
    fab:{
        backgroundColor: "#f9d44e",
        height: 56, width: 56,
        alignSelf: 'center',
    },
    root2:{
        position: 'absolute',
        alignItems: 'center',
        left: 0, right:0, 
        marginTop: 530,
    }
});


export default function ButtonBar() {
    const classes = useStyles();

    return ( 
        <div className={classes.root}>
        <div className={classes.root2}>
        <Fab className={classes.fab} aria-label="add">
        </Fab>
        <Button variant="contained" className={classes.buttonbar}>
        Swipe to pay for merchants</Button>
        </div>
        </div>
    );
}

