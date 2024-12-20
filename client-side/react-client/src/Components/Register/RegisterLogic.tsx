import React, { FormEvent, useState } from "react";
import RegisterInput from '../Register/RegisterInput'
import axios from "axios";

function RegisterLogic() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        axios
            .post('http://localhost:8080/register', {
                username: username,
                password: password
            })
            .then((Response) => isVisible(Response.status + ""))
            .catch((Response) => isVisible(Response.status + ""));
    }

    function isVisible(status: string) {
        if (status === "200") setIsVisible1(true); else setIsVisible1(false);
        if (status === "400") setIsVisible2(true); else setIsVisible2(false);
        if (status === "409") setIsVisible3(true); else setIsVisible3(false);
    }

    return (
        <>
            <RegisterInput
                username={username} setUsername={setUsername}
                password={password} setPassword={setPassword}
                handleSubmit={handleSubmit}
            />
            {isVisible1 && <label>Your account has successfully been made.</label>}
            {isVisible2 && <label>Username is blank or your password has less than 8 characters.</label>}
            {isVisible3 && <label>This username already exists.</label>}
        </>
    )
}

export default RegisterLogic