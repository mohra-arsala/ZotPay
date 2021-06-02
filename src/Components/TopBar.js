import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  linkIconDiv: {
    position: 'absolute'
  },
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
    flexGrow: 1,
    fontSize: 20,
    fontFamily: 'Roboto',
    color: '#27649f',
    fontWeight: 'bold',
    letterSpacing: '1px',
    // position: 'absolute',
    // marginLeft: '34%'
    textAlign: 'center'
  },
}));

export default function Bar(props) {
  const {children, icon, linkTo} = props;
  const classes = useStyles();

  const LinkIcon = () => {
    return(
      <Link to={linkTo}>
        <IconButton className={classes.icon} onClick={() => {}}>
          {icon}
        </IconButton>
      </Link>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <div className={classes.linkIconDiv}>
            {icon != null ? <LinkIcon/> : null}
          </div>
          <Typography variant="h6" className={classes.title}>
            {children}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
