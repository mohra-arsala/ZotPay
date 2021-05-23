import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  bar: {
    height: 56,
    width: '100%',
    backgroundColor: '#f9d247',
  },
  title: {
    flexGrow: 1,
    fontSize: 24,
    fontFamily: 'Roboto',
    color: '#27649f',
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
});

export default function Bar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ZotBill
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
