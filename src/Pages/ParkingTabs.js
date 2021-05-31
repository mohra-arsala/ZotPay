import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ParkingHourly from './ParkingHourly';
import ParkingPermit from './ParkingPermit';

import OnlyBar from '../Components/BarOnly';

import Bar from '../Components/TopBar';

import SwipeableViews from 'react-swipeable-views';
import ParkingAirPay from './ParkingAirPay';

import { ArrowBackIos } from '@material-ui/icons';

const useStyles = makeStyles({
    tabs: {
        backgroundColor: '#27649f',
    }
});

export default function ParkingTabs() {
        const classes = useStyles();
        const [value, setValue] = React.useState(0);
        const [disablePay, setDisablePay] = React.useState(false);
        const [enableMouse, setEnableMouse] = React.useState(true); 
        const handleTab = (e, value) => {
            if (value == 0) {
                setDisablePay(false);
                setEnableMouse(true);
            } else if (value == 1) {
                setDisablePay(true);
                setEnableMouse(false);
            }
            setValue(value);
        }

        function TabPanel(props) {

            // Tab label passed as children; value is index of current tab
            const {children, value, index} = props;

            return(
                // Only show tab panel of current tab
                <div>
                    {value === index && <div>{children}</div>}
                </div>
            );
        }

        const [title, setTitle] = React.useState('Zot Parking');
        const [icon, setIcon] = React.useState(null);
        //const [barLink, setBarLink] = React.useState('/notification')

        const onChangeIndex = (index, indexLatest, meta) => {
            if (index == 0) {
                setTitle('Zot Parking');
                // setBarLink('/notification');
                setIcon(null);
            } else if (index == 1) {
                setTitle('AirPay Parking');
                // setBarLink('/');
                setIcon(<ArrowBackIos/>);
            }
        } 

        return (
            <div>
                <Bar icon={icon}>{title}</Bar>
                <SwipeableViews containerStyle={{height: '100vh'}} 
                    axis="y" 
                    onChangeIndex={onChangeIndex} 
                    disabled={disablePay} 
                    enableMouseEvents={enableMouse}
                >
                    <div style={{height: '100vh'}}>
                        <AppBar position="static">
                            <ToolBar>
                                <OnlyBar>Zot Parking</OnlyBar>
                            </ToolBar>
                            <Tabs variant="fullWidth" value={value} onChange={handleTab} className={classes.tabs}>
                                <Tab label="Pay By Time"/>
                                <Tab label="Pay Permit"/>
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}><ParkingHourly></ParkingHourly></TabPanel>
                        <TabPanel value={value} index={1}><ParkingPermit></ParkingPermit></TabPanel>
                    </div>
                    <div style={{height: '100vh'}}>
                        <ParkingAirPay></ParkingAirPay>
                    </div>
                </SwipeableViews>
            </div>
        );
}