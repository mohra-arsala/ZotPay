import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { Link} from 'react-router-dom';

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
    fontSize: 24,
    fontFamily: 'Roboto',
    color: '#27649f',
    fontWeight: 'bold',
    letterSpacing: '2px',
    textAlign: 'center'
  },
});

export default function BackBar(props) {
  const {children, backTo} = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar}>
        <Toolbar>
          <Link to={backTo}>
            <IconButton>
              <ArrowBackIosIcon style={{ color: '#27649f' }} />
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
