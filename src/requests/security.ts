import axios from "axios";
import User from "../types/User";

function logInUser(user: User) {
    axios.post("localhost:1020/security/login", user)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })
}

export default logInUser;