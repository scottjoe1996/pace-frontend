function getFieldError(field: string, value: string) {
    if(field === "username") {
        return getUsernameError(value);
    }
    if(field === "password") {
        return getPasswordError(value);
    }

    return null;
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

    return null
}

export default getFieldError;