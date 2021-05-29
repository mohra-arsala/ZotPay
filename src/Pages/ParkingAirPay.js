import { Component } from 'react';
import React from 'react';
import { AppBar, Button, Container, FormControl, Grid, IconButton, InputLabel, makeStyles, MenuItem, Select, Typography } from '@material-ui/core';
import { ArrowBack, ArrowBackIos } from '@material-ui/icons';
import MerchantButton from '../Components/MerchantButton';
import PaymentOption from '../Components/PaymentDropdown';
import PayDialog from '../Components/PayDialog';
import Bar from '../Components/TopBar';
import { Link } from 'react-router-dom';
import OnlyBar from '../Components/BarOnly';
// import classes from '*.module.css';


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

export default class ParkingAirPay extends Component{
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
            <div>
                {/* <OnlyBar>
                    <div className="statusBar"></div>
                    <div>
                    <Link to="/">
                        <IconButton onClick={() => {}}>
                        <ArrowBackIos />
                        </IconButton>
                    </Link>
                        AirPay 
                    </div>
                </OnlyBar> */}
                <Container maxWidth="sm" style={{marginTop:'75px'}}>
                    
                    <div onChange={this.handleChange} style={{backgroundImage:'../Resources/lines.jpg'}}>
                        
                        <strong><p style={{textAlign: 'center'}}>Tap Parking Area to Confirm & Pay</p></strong>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <MerchantButton merchantName="UCI LOT 8" onClick={this.togglePaymentInfo} showPayment={this.state.showPayment}></MerchantButton>
                        </div>
                        <Container maxWidth="sm">
                            <div style={{display:(this.state.showPayment ? 'block':'none'), marginLeft: 'auto',
                                marginRight: 'auto',
                                textAlign: 'center',
                                padding: '5%'}}>
                                <p>Selected Parking Area: <strong>UCI LOT 8</strong></p>
                                <Typography variant="h1">$ 2.53</Typography>
                                <PaymentOption></PaymentOption>
                                <PayDialog merchantName="UCI LOT 8" total="2.53"></PayDialog>
                            </div>
                        </Container>
                    </div>
                </Container>
            </div>
        );
    }
}