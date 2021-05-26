import { Component } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ActivityBar from '../Components/ActivityBar';
import { Typography } from '@material-ui/core';
import LongActivity from '../Components/LongActivityCard';

const useStyles = makeStyles((theme) => ({
    date: {
      fontSize: '15',
      color: '#27649f',
      fontWeight: 'bold',
      fontFamily: 'roboto',
      width: '30%',
      marginTop: 27,
      marginBottom: 8
  
    },
    
  }));
  
export default function ActivityPage(){
    const classes = useStyles();
    return(
            <div>
            <ActivityBar></ActivityBar>
            <LongActivity></LongActivity>
            </div>
        );
}
