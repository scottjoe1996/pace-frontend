import React from "react";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';

function LogInDialog() {
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState({ username: "", password: "" });
    const [errors, setErrors] = React.useState<{ username?: string, password?: string }>();

    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
        setValues({ username: "", password: "" })
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setErrors({ ...errors, [name]: null})
        setValues({ ...values, [name]: value })
        if (name === "username") {
            validateUsername(value);
        }
    }

    function validateUsername(value: string) {
        if(!value.trim()) {
            setErrors({ ...errors, username: "Username cannot be empty"});
        }

        if(value.indexOf(" ") >= 0) {
            setErrors({ ...errors, username: "Username cannot have empty spaces"});
        }
    }

    // function validatePassword() {
    //     if(!values.password.trim()) {
    //         setErrors({ ...errors, username: "Password cannot be empty"});
    //     }

    //     if(values.password.indexOf(" ") >= 0) {
    //         setErrors({ ...errors, username: "Password cannot have empty spaces"});
    //     }
    // }

    function handleSubmit() {
        console.log(values);
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
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            error={Boolean(errors?.username)}
                            helperText={errors?.username}
                            label="Username"
                            placeholder="Username"
                            margin="normal"
                            variant="filled"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            label="Password"
                            placeholder="Password"
                            margin="normal"
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
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Log in
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default LogInDialog