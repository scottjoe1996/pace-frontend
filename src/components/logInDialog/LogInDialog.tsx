import React from "react";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';

function LogInDialog() {
    const [open, setOpen] = React.useState(false);
    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }



    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Log in
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Log in</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="normal"
                        label="Username"
                        placeholder="Username"
                        variant="filled"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        margin="normal"
                        label="Password"
                        placeholder="Password"
                        variant="filled"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="primary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleClose}>
                        Log in
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default LogInDialog