import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ZotBillTopBar from '../Components/ZotBillTopBar';

const ZotBillConfirmation = () => {
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
  return <div></div>;
};

export default ZotBillConfirmation;
