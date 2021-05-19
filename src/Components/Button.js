import { Component } from 'react';
import React from 'react';
import Button from '@material-ui/core/Button';

export default class Button1 extends Component{
    render(){
        return(
            <Button variant="contained" color="primary">
            Hello World
          </Button>
        );
    }
}