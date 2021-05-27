import { FormControl, InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.select,
        margin: 10,
        inlineSize: 20
        // background: 'blue'

    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        margintop: theme.spacing(2),
    }
}))
export default function PaymentOption() {
    const classes = useStyles();
    const [method, setMethod] = React.useState('');

    const handleChange = (event) => {
        setMethod(event.target.value);
    };

    return (
        <div className="form-group form-inline">
            <FormControl className={classes.formControl}>
                <InputLabel id="method-label" style={{display:'inline-block'}} labelPlacement="start">Payment Method</InputLabel>
                <Select
                labelId="method-label"
                id="standard-required"
                value={method}
                onChange={handleChange}
                >
                    <MenuItem value={"credit"}>Credit Card</MenuItem>
                    <MenuItem value={"studentId"}>Student ID</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}