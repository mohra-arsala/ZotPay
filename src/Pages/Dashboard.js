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

import SwipeableViews from 'react-swipeable-views';
import AirPay from './AirPay';

import NotificationsIcon from '@material-ui/icons/Notifications';
import { ArrowBackIos } from '@material-ui/icons';

export default function BottomNav() {
    const [title, setTitle] = React.useState('ZotPay');
    const [barLink, setBarLink] = React.useState('/notification')
    const [icon, setIcon] = React.useState(<NotificationsIcon/>);

    const onChangeIndex = (index, indexLatest, meta) => {
        if (index == 0) {
            setTitle('ZotPay');
            setBarLink('/notification');
            setIcon(<NotificationsIcon/>);
        } else if (index == 1) {
            setTitle('Airpay');
            setBarLink('/');
            setIcon(<ArrowBackIos/>);
        }
    } 
    return ( 
        <div>
            <Bar linkTo={barLink} icon={icon}>{title}</Bar>
            <SwipeableViews containerStyle={{height: '100vh'}} axis="y" onChangeIndex={onChangeIndex}>
                <div style={{height: '100vh', overflow: 'scroll'}}>
                    <Container>
                        <Balance></Balance>
                        <Activity></Activity>
                    </Container >
                    <ButtonBar></ButtonBar>
                </div>
                <div style={{height: '100vh'}}>
                    <AirPay></AirPay>
                </div>
            </SwipeableViews>
        </div>
    );
}