import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";

export default function PaymentOption() {
    // const classes = useStyles();
    const [method, setMethod] = React.useState('');

    const handleChange = (event) => {
        setMethod(event.target.value);
    };

    return (
        <div>
            <FormControl>
                <InputLabel id="method-label">Payment Method</InputLabel>
                <Select
                labelId="method-label"
                id="method"
                value={method}
                onChange={handleChange}>
                    <MenuItem value={"credit"}>Credit Card</MenuItem>
                    <MenuItem value={"studentId"}>Student ID</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}