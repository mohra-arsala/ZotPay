import { Component } from 'react';
import React from 'react';
import Modal from 'react-modal';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import SwipeableViews from 'react-swipeable-views';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';


export default class Notification extends Component{
    constructor () {
        super();
        this.state = {
          showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render(){
        return(
            <div id="main">
                <div className="topNav">
                    {/* <div className="statusBar"></div> */}
                    <div className="pageTitle">
                    <Link to="/">
                        <IconButton onClick={() => {}} className="backIcon">
                        <ArrowBackIosIcon />
                        </IconButton>
                    </Link>
                        <NotificationsIcon className="notifIcon"></NotificationsIcon> 
                    </div>
                </div>
                <div className="todayNotif">
                    <h1 className="todayTitle">Today</h1>

                    <div className="swipeArea">
                        <SwipeableViews>
                            <div className="notif">
                                <div className="notifTop">
                                    <h2 className="notifTitle">Zot Parking</h2>
                                </div>
                                <div>
                                    <p className="notifText">Your parking place [6] timing parking session is almost end. Please add more time if you need.</p>
                                    <button className="addTimeBtn" onClick={this.handleOpenModal}>ADD TIME</button>

                                    {/* Modal */}
                                    <Modal isOpen={this.state.showModal} className="modal">
                                        <div className="modalTop">
                                            <CloseIcon onClick={this.handleCloseModal} className="closeIcon"></CloseIcon>
                                        </div>
                                        <div className="modalBottom">
                                            <div className="centerDiv">
                                                <div className="timeLeft">
                                                    <p className="timeLeftTitle">Time Left:</p>
                                                    <div className="timeLeftWidget">7 min</div>
                                                </div>
                                            </div>
                                            <div className="durationDiv">
                                                <p className="setDurationTitle">Set Parking Duration</p>
                                                <div>
                                                    <div>
                                                        <ArrowDropUpIcon className="upIcon"></ArrowDropUpIcon>
                                                        <ArrowDropUpIcon className="upIcon"></ArrowDropUpIcon>
                                                    </div>
                                                    <div>
                                                        <p className="incrementTimeWidget">00:00</p>
                                                    </div>
                                                    <div>
                                                        <ArrowDropDownIcon className="downIcon"></ArrowDropDownIcon>
                                                        <ArrowDropDownIcon className="downIcon"></ArrowDropDownIcon>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button onClick={this.handleCloseModal} variant="contained" style={{backgroundColor: '#0057B2', color: '#FFFFFF'}}>CONFIRM</Button>
                                        </div>
                                    </Modal>
                                    {/* Modal */}

                                </div>
                            </div>
                            <div className="deleteNotif">
                                <p className="deleteText">Delete</p>
                            </div>
                        </SwipeableViews>
                    </div>

                </div>
                <div className="pastNotif">
                    <h1 className="pastTitle">2021/4/10</h1>
                    <div className="swipeArea">
                        <SwipeableViews>
                            <div className="notif">
                                <div className="notifTop">
                                    <h2 className="notifTitle">Zot Bill</h2>
                                </div>
                                <div className="notifBottom">
                                    <p className="notifText">Your zotBill is due September 15, 2021 for Fall 2021.</p>
                                </div>
                            </div>
                            <div className="deleteNotif">
                                <p className="deleteText">Delete</p>
                            </div>
                        </SwipeableViews>
                    </div>

                    <div className="swipeArea">
                        <SwipeableViews>
                            <div className="notif">
                                <div className="notifTop">
                                    <h2 className="notifTitle">Zot Bill</h2>
                                </div>
                                <div className="notifBottom">
                                    <p className="notifText">Your zotBill is due September 15, 2021 for Fall 2021.</p>
                                </div>
                            </div>
                            <div className="deleteNotif">
                                <p className="deleteText">Delete</p>
                            </div>
                        </SwipeableViews>
                    </div>
                </div>
            </div>
        );
    }
}