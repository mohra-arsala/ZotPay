import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ButtonBar from '../Components/Button';
import Bar from '../Components/TopBar';
import { findByLabelText } from '@testing-library/dom';


const useStyles = makeStyles({
    menu: {
        color: '#27649f',
        backgroundColor: '#27649f',
        position: 'absolute',
        left: 0,right: 0,bottom: 0,
        minWidth: 250,
        width: '100%',
        maxheight: 56,
    },
    tab: {
        fontSize: 12,
        lineHeight: 16,
        // color: "#ffffff",
    }
});

export default function BottomNav() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return ( 
    <div>
    <Bar></Bar>
    <ButtonBar></ButtonBar>
    < BottomNavigation value = { value } className={classes.menu}
        onChange = {(event, newValue) => {setValue(newValue);}}
        showLabels>
        <BottomNavigationAction  className={classes.tab} label = "Zot Parking"/> 
        <BottomNavigationAction className={classes.tab} label = "Home"/> 
        <BottomNavigationAction className={classes.tab} label = "Zot Bill"/>   
    </BottomNavigation >
    </div>
    );
}