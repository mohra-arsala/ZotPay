import React from 'react';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

// import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 500,
    height: 80,
    backgroundColor: '#27649F',
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    text: {
      secondary: '#B8B8B8',
    },
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Parking" icon={<LocalParkingIcon />} />
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Zot Bill"
          icon={<MonetizationOnIcon />}
        />
      </BottomNavigation>
    </ThemeProvider>
  );
}
