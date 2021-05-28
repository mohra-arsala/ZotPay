import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  icon:{
    color: '#27649f',
    // position: 'absolute'
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
    position: 'absolute',
    marginLeft: '34%'
  },
}));

export default function Bar(props) {
  const {children, icon, linkTo} = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Link to={linkTo}>
            <IconButton className={classes.icon} onClick={() => {}}>
              {/* <NotificationsIcon /> */}
              {icon}
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            {children}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
