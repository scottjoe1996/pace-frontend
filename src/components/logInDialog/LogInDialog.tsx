import React from "react";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

function LogInDialog() {
    const [open, setOpen] = React.useState(false);
    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    // function handleSubmit() {
    //     setOpen(false);
    // }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Log In
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Log in</DialogTitle>

            </Dialog>
        </div>
    )
}

export default LogInDialog