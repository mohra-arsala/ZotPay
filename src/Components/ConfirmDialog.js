import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

export default function ConfirmDialog(props) {
    const {children, open, onClose, onConfirm, title} = props;

    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={onClose}>No</Button>
                <Button color="primary" onClick={onConfirm}>Yes</Button>
            </DialogActions>
        </Dialog>
    );
}