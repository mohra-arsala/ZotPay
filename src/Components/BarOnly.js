import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  bar: {
    height: 60,
    width: '100%',
    backgroundColor: '#f9d247',
  },
  title: {
    flexGrow: 1,
    fontSize: 20,
    fontFamily: 'Roboto',
    color: '#27649f',
    fontWeight: 'bold',
    letterSpacing: '1px',
    textAlign: 'center',
    // marginLeft: '-10%'
  },
});

export default function OnlyBar(props) {
  const {children} = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {children}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
