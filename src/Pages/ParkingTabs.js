import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ParkingHourly from './ParkingHourly';
import ParkingPermit from './ParkingPermit';

import OnlyBar from '../Components/BarOnly';

const useStyles = makeStyles({
    tabs: {
        backgroundColor: '#27649f',
    }
});

export default function ParkingTabs() {
        const classes = useStyles();
        const [value, setValue] = React.useState(0);
        const handleTab = (e, value) => {
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

        return (
            <div>
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
        );
}