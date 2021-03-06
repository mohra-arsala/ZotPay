import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ZotBillTopBar from '../Components/BackBar';
import SummaryItem from '../Components/SummaryItem';
import Button from '@material-ui/core/Button';

import ConfirmDialog from '../Components/ConfirmDialog';
import ConfirmationDialog from '../Components/ConfirmationDialog';
import BottomNavigation from '../Components/BottomNavigation';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  mainButtonsDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    marginRight: '20%',
    marginLeft: '20%',
    marginTop: '10%',
  },
  overallDiv: {
    // width: '500px',
    margin: 'auto',
  },
  buttonDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
});
const ZotBillConfirmation = () => {
  const classes = useStyles();
  const history = useHistory();
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
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [confirmationOpen, setConfirmationOpen] = React.useState(false);
  const handleConfirmOpen = () => {
    setConfirmOpen(true);
  };

  const handleConfirmClose = () => {
    setConfirmOpen(false);
  };

  const handleConfirmationOpen = () => {
    setConfirmOpen(false);
    setConfirmationOpen(true);
  };

  const handleConfirmationClose = () => {
    setConfirmationOpen(false);
    history.push("/");
  };

  return (
    <div className={classes.container}>
      <div className={classes.overallDiv}>
        <div>
          <ZotBillTopBar backTo="/home/zotbill"></ZotBillTopBar>
        </div>
        <h3
          style={{
            marginTop: '90px',
            fontFamily: 'Roboto',
            letterSpacing: '1px',
            color: '#27649f',
            textAlign: 'center',
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
        <div className={classes.buttonDiv}>
          <Button variant="outlined" style={{ marginTop: '20px' }}>
            EDIT
          </Button>
        </div>

            <div className={classes.mainButtonsDiv}>
          <Button
            variant="contained"
            style={{ backgroundColor: '#909090', color: '#fff' }}
            component={Link}
            to="/home/zotbill"
          >
            CANCEL
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: '#0057B2', color: '#fff' }}
            onClick={handleConfirmOpen}
          >
            PAY
          </Button>
        </div>

        <ConfirmDialog
          onClose={handleConfirmClose}
          onConfirm={handleConfirmationOpen}
          open={confirmOpen}
          title="Confirm purchase"
        >
          Are you sure you want to make a payment from Zot Bill for $100.00?
        </ConfirmDialog>

        <ConfirmationDialog
          onClose={handleConfirmationClose}
          onConfirm={handleConfirmationClose}
          open={confirmationOpen}
          title="Thank you for your purchase"
        >
          Please check your email for more information.
        </ConfirmationDialog>
      </div>
    </div>
  );
};

export default ZotBillConfirmation;
