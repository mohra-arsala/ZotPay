import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
const useStyles = makeStyles((theme) => ({
  icon:{
    color: '#27649f',
    position: 'absolute'
  },
  bar:{
    height: 60,
    width: '100%',
    minWidth: 290,
    backgroundColor: '#f9d247',
    position: 'fixed', 
    top: 0

  },
  title: {
    fontSize: 22,
    fontFamily: 'Roboto',
    color: '#27649f',
    fontWeight: 'bold',
    letterSpacing: '2px',
    margin: 'auto'
  },
}));

export default function Bar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <IconButton className={classes.icon} onClick={() => {}}>
          <NotificationsIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ZotPay
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
