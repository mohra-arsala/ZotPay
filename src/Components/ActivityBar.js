import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const useStyles = makeStyles((theme) => ({
  icon:{
    color: '#27649f',
    position: 'absolute',
  },
  bar:{
    height: 56,
    width: '100%',
    backgroundColor: '#f9d247',

  },
  title: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: '#27649f',
    fontWeight: 'bold',
    margin: 'auto',
    textAlign: 'center'
  },
}));

export default function  ActivityBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar className={classes.bar} position='static'>
          <IconButton className={classes.icon} onClick={() => {}}>
          <ArrowBackIosIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Activity Record
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
