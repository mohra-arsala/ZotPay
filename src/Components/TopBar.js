import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  icon:{
    color: '#27649f',
  },
  bar:{
    height: 56,
    width: '100%',
    minWidth: 376,
    backgroundColor: '#f9d247',

  },
  title: {
    flexGrow: 1,
    fontSize: 24,
    fontFamily: 'Roboto',
    color: '#27649f',
    fontWeight: 'bold',
    left: 0, right: 0,
    position: 'absolute',
    textAlign: 'center'
  },
}));

export default function Bar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <IconButton onClick={() => {}}>
          <NotificationsIcon className={classes.icon}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ZotPay
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
