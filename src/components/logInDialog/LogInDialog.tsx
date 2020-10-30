import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";

import getFieldError from "../../utility/logInValidation";

function LogInDialog() {
    const [open, setOpen] = React.useState(false);
    const [fields, setFields] = React.useState({ username: "", password: "" });
    const [errors, setErrors] = React.useState<{ username?: string, password?: string }>();

    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
        setFields({ username: "", password: "" })
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setErrors({ ...errors, [name]: null});
        setFields({ ...fields, [name]: value });
        setErrors({ ...errors, [name]: getFieldError(name, value)});
    }

    function handleSubmit() {
        console.log(fields);
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
                            value={fields.username}
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
                            value={fields.password}
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