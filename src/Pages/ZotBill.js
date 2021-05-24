import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import QuarterDropDownMenu from '../Components/QuarterDropDownMenu';
import AmountInput from '../Components/AmountInput';

import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import ZotBillTopBar from '../Components/ZotBillTopBar';
const useStyles = makeStyles({
  boxdiv: {
    marginTop: '100px',
  },
  profile: {
    marginTop: '-100px',
  },
  amountinput: {
    marginLeft: '30px',
    marginTop: '-60px',
    width: '500px',
  },
  labelStyle: {
    fontSize: 25,
    marginRight: 180,
    marginBottom: 20,
  },
  formControl: {
    width: 480,
    marginLeft: '45px',
  },
  paytoRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '55px',
  },
});
const ZotBill = () => {
  const classes = useStyles();
  const [payTo, setPayTo] = React.useState('');
  const handleChange = (event) => {
    setPayTo(event.target.value);
  };

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
      <div className={classes.overallDiv}>
        <ZotBillTopBar></ZotBillTopBar>
        <div className={classes.boxdiv}>
          <Box
            boxShadow={2}
            bgcolor="background.paper"
            m={10}
            p={14}
            style={{ width: '12rem', height: '5.5rem' }}
          >
            <div className={classes.profile}>
              <div className={classes.userPhoto}>
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: '9rem', height: '7rem' }}
                >
                  <rect width="63" height="63" rx="4" fill="#CFCFCF" />
                  <path
                    d="M31.5 13C21.288 13 13 21.288 13 31.5C13 41.712 21.288 50 31.5 50C41.712 50 50 41.712 50 31.5C50 21.288 41.712 13 31.5 13ZM31.5 18.55C34.571 18.55 37.05 21.029 37.05 24.1C37.05 27.171 34.571 29.65 31.5 29.65C28.429 29.65 25.95 27.171 25.95 24.1C25.95 21.029 28.429 18.55 31.5 18.55ZM31.5 44.82C26.875 44.82 22.7865 42.452 20.4 38.863C20.4555 35.1815 27.8 33.165 31.5 33.165C35.1815 33.165 42.5445 35.1815 42.6 38.863C40.2135 42.452 36.125 44.82 31.5 44.82Z"
                    fill="white"
                  />
                  <circle cx="61" cy="61" r="9" fill="#27649F" />
                  <path
                    d="M61 62.6278C61.899 62.6278 62.6278 61.899 62.6278 61C62.6278 60.1009 61.899 59.3721 61 59.3721C60.1009 59.3721 59.3721 60.1009 59.3721 61C59.3721 61.899 60.1009 62.6278 61 62.6278Z"
                    fill="white"
                  />
                  <path
                    d="M59.4739 55.913L58.543 56.9304H56.9304C56.3709 56.9304 55.913 57.3882 55.913 57.9478V64.0522C55.913 64.6117 56.3709 65.0695 56.9304 65.0695H65.0695C65.6291 65.0695 66.0869 64.6117 66.0869 64.0522V57.9478C66.0869 57.3882 65.6291 56.9304 65.0695 56.9304H63.457L62.5261 55.913H59.4739ZM61 63.5435C59.596 63.5435 58.4565 62.404 58.4565 61C58.4565 59.596 59.596 58.4565 61 58.4565C62.404 58.4565 63.5435 59.596 63.5435 61C63.5435 62.404 62.404 63.5435 61 63.5435Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="user-info">
                <h2>Peter Anteater</h2>
                <p>123456789</p>
              </div>
            </div>
            <QuarterDropDownMenu></QuarterDropDownMenu>
          </Box>
        </div>

        {/* Payment Details */}
        <div className={classes.amountinput}>
          <AmountInput></AmountInput>
        </div>

        <div className={classes.paytoRoot}>
          <InputLabel
            htmlFor="standard-adornment-amount"
            className={classes.labelStyle}
          >
            Pay to
          </InputLabel>
          <FormControl
            fullWidth
            className={classes.margin}
            style={{ marginBottom: '90px' }}
          >
            <InputLabel
              className={classes.labelStyle}
              style={{ fontSize: 20 }}
            ></InputLabel>
            <Select
              value={payTo}
              onChange={handleChange}
              style={{ width: '450px' }}
            >
              <MenuItem value={10}>
                Tuition Balance &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;due on
                04/10
              </MenuItem>
              <MenuItem value={20}>
                Housing Balance &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; due on 04/12
              </MenuItem>
              <MenuItem value={30}>
                UCI Health Balance &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; due on 07/10
              </MenuItem>
            </Select>
            <FormHelperText style={{ fontSize: 18 }}>
              Choose where to make a payment
            </FormHelperText>
          </FormControl>

          <Button
            variant="contained"
            style={{
              color: '#fff',
              backgroundColor: '#0057B2',
              marginLeft: 170,
            }}
          >
            PAY NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ZotBill;
