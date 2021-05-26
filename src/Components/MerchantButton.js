import { Avatar, Button, makeStyles } from "@material-ui/core";
import React from "react";
import anteater from "../Resources/anteater.jpeg"

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.button,
        borderRadius: 20,
        margin: 10
        // background: 'blue'

    },
    avatar: {
        ...theme.avatar,
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    avatarGroup: {
        margin: 10
    }
}))


export default function MerchantButton(props) {
    const classes = useStyles();

    const [clicked, setClicked] = React.useState(false);

    // const borderColor = React.useState('green')

    
    const handleClick = () => {
        setClicked(!clicked);
        console.log(props);

    }

    return (
    <div className={classes.avatarGroup}>
        <Avatar alt={props.merchantName} src={anteater} className={classes.avatar} onClick={() => {props.onClick(); handleClick()}} style={props.showPayment ? {border: '5px solid green'} : {}}/>
        <p>{props.merchantName}</p>
    </div>
    )
}