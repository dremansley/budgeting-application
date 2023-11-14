import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const TransactionImporter = ({open, setOpen}) => {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Dialog
                onClose={handleClose}
                aria-labelledby="transaction-importer-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2, fontWeight:600 }} id="transaction-importer-title">
                    Import Transactions
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        User import transactions here
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus variant="outlined" onClick={handleClose} color={"info"} sx={{fontWeight:600}}>
                        Import
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default TransactionImporter
