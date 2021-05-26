import { Component } from 'react';
import React from 'react';
import Button1 from '../Components/Button';
import { AppBar, Button, FormControl, Grid, IconButton, InputLabel, makeStyles, MenuItem, Select, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import MerchantButton from '../Components/MerchantButton';
import PaymentOption from '../Components/PaymentDropdown';
import PayDialog from '../Components/PayDialog';
// import classes from '*.module.css';

const useStyles = makeStyles({
    merchats: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
// const classes = makeStyles();

// function togglePaymentInfo(infoVisible) {
//     if (!infoVisible) {
//         return <div id="paymentInfo">
//         <p>Selected Merchant: The Hill - 3</p>
//         <Typography variant="h1">$ 7.53</Typography>
//         <PaymentOption></PaymentOption>
//         <PayDialog merchantName="The Hill - 3" total="7.73"></PayDialog>
//     </div>;
//     }
// }

export default class AirPay extends Component{

    state = {
        name: "",
        showPayment: false
    };

    handleChange = (event) => {
        console.log('handle');
        this.setState({
            name: event.target.value
        })
    }

    togglePaymentInfo = () => {
        console.log('toggle');
        this.setState({
            showPayment: !this.state.showPayment
        })
    }
    render(){
        const {showPayment} = this.state;
        // const classes = useStyles();
        
        return(
            <div onChange={this.handleChange}>
                <h1>AirPay Merchant</h1>
                <p>Tap Merchant to Confirm & Pay</p>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <MerchantButton merchantName="The Hill - 1"></MerchantButton>
                    <MerchantButton merchantName="The Hill - 2"></MerchantButton>
                    <MerchantButton merchantName="The Hill - 3" onClick={this.togglePaymentInfo} showPayment={this.state.showPayment}></MerchantButton>
                </div>
                <div style={{display:(this.state.showPayment ? 'block':'none')}}>
                    <p>Selected Merchant: <strong>The Hill - 3</strong></p>
                    <Typography variant="h1">$ 7.53</Typography>
                    <PaymentOption></PaymentOption>
                    <PayDialog merchantName="The Hill - 3" total="7.73"></PayDialog>
                </div>
            </div>
        );
    }
}