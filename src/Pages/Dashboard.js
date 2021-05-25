import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ButtonBar from '../Components/ButtonBar';
import Bar from '../Components/TopBar';
import { findByLabelText } from '@testing-library/dom';
import Balance from '../Components/balance_card';
import Activity from '../Components/ActivityCard';
import HomeIcon from '@material-ui/icons/Home';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles({
    menu: {
        color: '#ffffff',
        backgroundColor: '#27649f',
        left: 0,right: 0,
        width: '100%',
        maxheight: 56,
    },
    bottom:{
        position: 'relative',
        left: 0, right: 0, 
    },
    tab: {
        width: '100%',
        color: '#fff',
        fontSize: 12,
    }
});

export default function BottomNav() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return ( 
    <div>
    <Bar></Bar>
    <Balance></Balance>
    <Activity></Activity>
    <div className={classes.bottom}>
    <ButtonBar></ButtonBar>
    {/* < BottomNavigation value = { value } className={classes.menu}
        onChange = {(event, newValue) => {setValue(newValue);}}
        showLabels>
        <BottomNavigationAction  className={classes.tab} icon={<LocalParkingIcon/>} label = "Zot Parking"/> 
        <BottomNavigationAction className={classes.tab} icon={<HomeIcon/>} label = "Home"/> 
        <BottomNavigationAction className={classes.tab} icon={<AttachMoneyIcon/>} label = "Zot Bill"/>   
    </BottomNavigation > */}
    </div>
    </div>
    );
}