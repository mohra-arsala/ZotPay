import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  outterDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    marginRight: '40px',
    marginLeft: '40px',
    color: '#363636',
  },
  infoAndExplain: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleHeading: {
    fontFamily: 'Roboto',
  },
  infoAndExplain: {
    marginTop: '15px',
    display: 'flex-column',
  },
  info: {
    fontSize: 20,
    textAlign: 'right',
  },
  explain: {
    textAlign: 'right',
  },
});
const SummaryItem = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.outterDiv}>
        <h3 className={classes.titleHeading}>{props.title}</h3>
        <div className={classes.infoAndExplain}>
          <div className={classes.info}>{props.info}</div>
          <div className={classes.explain}>{props.explanation}</div>
        </div>
      </div>
    </div>
  );
};

export default SummaryItem;
