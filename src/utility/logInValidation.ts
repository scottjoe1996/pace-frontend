import FieldErrors from "../types/FieldErrors";

function getFieldError(field: string, value: string) {
    switch(field) {
        case "username" : {
            return getUsernameError(value);
        }
        case "password" : {
            return getPasswordError(value);
        }
        default : {
            return null
        }
    }
}

function getUsernameError(username: string) {
    if(!username.trim()) {
        return "Username cannot be empty";
    }

    if(username.indexOf(" ") >= 0) {
        return "Username cannot have empty spaces";
    }

    return null
}

function getPasswordError(password: string) {
    if(!password.trim()) {
        return "Password cannot be empty";
    }

    if(password.indexOf(" ") >= 0) {
        return "Password cannot have empty spaces";
    }

    return null;
}

function isFormValid(fieldErrors: FieldErrors) {
    let valid = true;

    Object.values(fieldErrors).forEach(fieldError => {
        fieldError !== null && (valid = false);
    });

    return valid
}

export { getFieldError, isFormValid };