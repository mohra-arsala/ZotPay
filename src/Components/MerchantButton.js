import { Button, makeStyles } from "@material-ui/core";
import { Component } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.button,
        borderRadius: 20,
        margin: 10
        // background: 'blue'

    }
}))
export default function MerchantButton(props) {
    const classes = useStyles();
    return <Button color="primary" variant="contained" className={classes.root} onClick={props.onClick}>{props.merchantName}</Button>;
}