import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CameraIcon from '@material-ui/icons/Camera';

const useStyles = makeStyles({
    title: {
        backgroundColor: '#ffd200'
    },
    picture: {
        width: '100%'
    },
    dialogActions: {
        justifyContent: 'center',
        backgroundColor: '#0064a4'
    },
    confirmButton: {
        color: '#ffffff'
    }
});

export default function ScanDialog(props) {
    const {children, open, onClose, onConfirm} = props;
    const classes = useStyles();

    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle className={classes.title}>
                <IconButton onClick={onClose} color="primary">
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <img src="./license_plate.jpg" alt="License Plate" className={classes.picture}/>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
                <IconButton onClick={onConfirm} className={classes.confirmButton}>
                    <CameraIcon/>
                </IconButton>
            </DialogActions>
        </Dialog>
    );
}