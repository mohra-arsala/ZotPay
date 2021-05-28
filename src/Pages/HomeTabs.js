import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ButtonBar from '../Components/ButtonBar';

import ParkingTabs from './ParkingTabs';
import Dashboard from './Dashboard';
import ActivityPage from './ActivityPage';
import ZotBill from './ZotBill';
import ZotBill2 from './ZotBill2';
import { BrowserRouter, Link } from 'react-router-dom';

import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Notification from './Notification'

const useStyles = makeStyles({
  navRoot: {
    width: '100%',
    position: 'fixed',
    bottom: '0',
    backgroundColor: '#27649f',
  },
  actionRoot: {
    color: '#fff',
    opacity: '74%',
    '&$selected': {
      color: '#f9d247',
      opacity: '100%',
    },
  },
  selected: {},
});

export default function HomeTabs(props) {
  const {children, tabValue} = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(tabValue);
  const handleBottomNavChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    // Tab label passed as children; value is index of current tab
    const { children, value, index } = props;

    return (
      // Only show tab panel of current tab
      <div>{value === index && <div>{children}</div>}</div>
    );
  }

  return (
    <div>
        <TabPanel value={value} index={0}>
          <ParkingTabs></ParkingTabs>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Dashboard></Dashboard>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ZotBill2></ZotBill2>
        </TabPanel>
        <BottomNavigation
          value={value}
          onChange={handleBottomNavChange}
          showLabels
          className={classes.navRoot}
        >
          <BottomNavigationAction
            icon={<LocalParkingIcon />}
            label="Zot Parking"
            classes={{ root: classes.actionRoot, selected: classes.selected }}
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            icon={<HomeIcon />}
            label="Home"
            classes={{ root: classes.actionRoot, selected: classes.selected }}
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            icon={<AttachMoneyIcon />}
            label="Zot Bill"
            classes={{ root: classes.actionRoot, selected: classes.selected }}
            component={Link}
            to="/"
          />
        </BottomNavigation>
    </div>
  );
}
