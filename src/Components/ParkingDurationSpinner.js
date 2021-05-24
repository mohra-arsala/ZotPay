import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles({
    root: {
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        padding: '5%'
    },
    arrowIcon: {
        paddingLeft: '20px',
        paddingRight: '20px',
        fontSize: '48px'
    },
    arrowLabels: {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '0 30px'
    },
    arrowLabel: {
        fontSize: '16px',
        margin: '0'
    },
    timeText: {
        fontSize: '48px'
    }
});

export default function ParkingDurationSpinner() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h6">
                Set Parking Duration
            </Typography>
            <div>
                <div>
                    <ArrowDropUpIcon color='primary' className={classes.arrowIcon}></ArrowDropUpIcon>
                    <ArrowDropUpIcon color='primary' className={classes.arrowIcon}></ArrowDropUpIcon>
                </div>
                <Typography className={classes.timeText}>
                    00 : 01
                </Typography>
                <div>
                    <ArrowDropDownIcon color='primary' className={classes.arrowIcon}></ArrowDropDownIcon>
                    <ArrowDropDownIcon color='primary' className={classes.arrowIcon}></ArrowDropDownIcon>
                </div>
                <div className={classes.arrowLabels}>
                    <p className={classes.arrowLabel}>Days</p>
                    <p className={classes.arrowLabel}>Hours</p>
                </div>
            </div>
        </div>
    );
}