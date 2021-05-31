import { Component } from 'react';
import React from 'react';
import { Container, Typography } from '@material-ui/core';
import MerchantButton from '../Components/MerchantButton';
import PaymentOption from '../Components/PaymentDropdown';
import PayDialog from '../Components/PayDialog';

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
        
        return(
            <div>
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