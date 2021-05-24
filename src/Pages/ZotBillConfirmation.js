import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ZotBillTopBar from '../Components/BackBar';
import SummaryItem from '../Components/SummaryItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  summaryItemsDiv: {
    // paddingTop: '80px',
  },
  mainButtonsDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    marginRight: '20%',
    marginLeft: '20%',
    marginTop: '10%',
  },
});
const ZotBillConfirmation = () => {
  const classes = useStyles();
  const summaryItems = [
    {
      title: 'From',
      info: 'ZotPay Balance',
      explanation: 'available balance $100.00',
    },
    {
      title: 'To',
      info: 'UCI Health Balance',
      explanation: 'current balance $350.00',
    },
    {
      title: 'Pay Amount',
      info: '$100.00',
      explanation: 'after payment $250.00',
    },
    {
      title: 'Date',
      info: 'May 9, 2021',
      explanation: 'on time',
    },
  ];

  return (
    <div>
      <div>
        <ZotBillTopBar>Zot Bill</ZotBillTopBar>
      </div>
      <h3
        style={{
          marginTop: '90px',
          fontFamily: 'Roboto',
          letterSpacing: '1px',
          color: '#27649f',
        }}
      >
        Review Your Payments
      </h3>
      <div className={classes.summaryItemsDiv}>
        <SummaryItem
          title={summaryItems[0].title}
          info={summaryItems[0].info}
          explanation={summaryItems[0].explanation}
        ></SummaryItem>
        <SummaryItem
          title={summaryItems[1].title}
          info={summaryItems[1].info}
          explanation={summaryItems[1].explanation}
        ></SummaryItem>
        <hr width="90%" color="#D1D1D1"></hr>
        <SummaryItem
          title={summaryItems[2].title}
          info={summaryItems[2].info}
          explanation={summaryItems[2].explanation}
        ></SummaryItem>
        <SummaryItem
          title={summaryItems[3].title}
          info={summaryItems[3].info}
          explanation={summaryItems[3].explanation}
        ></SummaryItem>
      </div>

      <Button variant="outlined" style={{ marginTop: '20px' }}>
        EDIT
      </Button>

      <div className={classes.mainButtonsDiv}>
        <Button
          variant="contained"
          style={{ backgroundColor: '#909090', color: '#fff' }}
        >
          CANCEL
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: '#0057B2', color: '#fff' }}
        >
          PAY
        </Button>
      </div>
    </div>
  );
};

export default ZotBillConfirmation;
