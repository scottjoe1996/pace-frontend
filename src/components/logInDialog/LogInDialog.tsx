import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";

import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

import FieldErrors from "../../types/FieldErrors";
import { getFieldError, isFormValid } from "../../utility/logInValidation";

// import styles from "./LogInDialog.module.css";
import { FormControl, InputLabel } from "@material-ui/core";

function LogInDialog() {
    const [open, setOpen] = React.useState(false);
    const [fields, setFields] = React.useState({ username: "", password: "" });
    const [fieldErrors, setFieldErrors] = React.useState<FieldErrors>({});

    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
        setFields({ username: "", password: "" })
    }

    function handleFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value });
        setFieldErrors({ ...fieldErrors, [name]: getFieldError(name, value) });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (isFormValid(fieldErrors)) {
            console.log(fields);
        }
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Log in
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={handleSubmit}>
                    <DialogTitle>Log in</DialogTitle>
                    <DialogContent>
                        {/* <TextField
                            autoComplete="off"
                            className={styles.text}
                            name="username"
                            value={fields.username}
                            onChange={handleFieldChange}
                            error={Boolean(fieldErrors?.username)}
                            helperText={fieldErrors?.username}
                            label="Username"
                            placeholder="Username"
                            margin="normal"
                            variant="filled"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        /> */}
                        <FormControl error={Boolean(fieldErrors?.username)} margin="normal" fullWidth>
                            <InputLabel shrink={true}>Username</InputLabel>
                            <Input name="username" value={fields.username} onChange={handleFieldChange} placeholder="Username"/>
                            <FormHelperText>{fieldErrors?.username}</FormHelperText>
                        </FormControl>
                        <TextField
                            name="password"
                            value={fields.password}
                            onChange={handleFieldChange}
                            error={Boolean(fieldErrors?.password)}
                            helperText={fieldErrors?.password}
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