import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import FieldErrors from "../../types/FieldErrors";
import { getFieldError, isFormValid, isFieldValid } from "../../utility/logInValidation";
import logInUser from "../../requests/security";

function LogInDialog() {
    const [open, setOpen] = React.useState(false);
    const [fields, setFields] = React.useState({ username: "", password: "" });
    const [fieldErrors, setFieldErrors] = React.useState<FieldErrors>({ username: " ", password: " " });

    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
        setFields({ username: "", password: "" });
        setFieldErrors({ username: " ", password: " " });
    }

    function handleFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value });
        setFieldErrors({ ...fieldErrors, [name]: getFieldError(name, value) });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const currentFieldErrors = { username: getFieldError("username", fields.username), password: getFieldError("password", fields.password)}
        setFieldErrors(currentFieldErrors)

        if (isFormValid(currentFieldErrors)) {
            logInUser(fields);
        }
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Log in
            </Button>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <form onSubmit={handleSubmit}>
                    <DialogTitle>Log in</DialogTitle>
                    <DialogContent>
                        <FormControl error={!isFieldValid(fieldErrors.username)} margin="normal" fullWidth variant="filled" >
                            <InputLabel htmlFor="username-field" shrink={true}>Username</InputLabel>
                            <FilledInput id="username-field" name="username" value={fields.username} onChange={handleFieldChange} placeholder="Username"/>
                            <FormHelperText>{fieldErrors.username}</FormHelperText>
                        </FormControl>
                        <FormControl error={!isFieldValid(fieldErrors.password)} margin="normal" fullWidth variant="filled">
                            <InputLabel htmlFor="password-field" shrink={true}>Password</InputLabel>
                            <FilledInput id="password-field" name="password" type="password" value={fields.password} onChange={handleFieldChange} placeholder="Password"/>
                            <FormHelperText >{fieldErrors.password}</FormHelperText>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" color="primary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="contained" color="primary" type="submit">
                            Log in
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}

export default LogInDialog