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

import Container from '@material-ui/core/Container';


export default function BottomNav() {
    const [value, setValue] = React.useState(0);
    return ( 
    <div>
        <Bar></Bar>
        <Container>
            <Balance></Balance>
            <Activity></Activity>
        </Container >
        <ButtonBar></ButtonBar>
    </div>
    );
}