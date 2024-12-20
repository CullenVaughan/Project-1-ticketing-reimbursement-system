import React, { FormEvent, ReactNode, useContext, useState } from "react";
import LoginInput from "./LoginInput";
import {useAuth, UserContext} from '../Context/UserContext';
import { AuthContext } from '../Context/ReducerUserContext';
import axios from "axios";

function LoginLogic() {
    const [name, setUsername] = useState("");
    const [pass, setPassword] = useState("");
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const context = useContext(UserContext);
    const {login} = useAuth();

    if (!context) {
        throw new Error("Login must be used within an AuthProvider");
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        axios
            .post('http://localhost:8080/login', {
                username: name,
                password: pass
            })
            .then((Response) => userLogin(
                Response.data.accountId,
                Response.data.username,
                Response.data.password,
                Response.data.role,
                Response.status
            ))
            .catch((Response) => isVisible(Response.status + ""));
    }

    function userLogin(
        id: number,
        username: string,
        password: string,
        role: string,
        status: number
    ) {
        console.log({id, username, password, role});
        if (context) {
            context.login(id, username, password, role)
            login();
            isVisible(status + "");
        }
    }

    function isVisible(status: string) {
        if (status === "200") setIsVisible1(true); else setIsVisible1(false);
        if (status === "401") setIsVisible2(true); else setIsVisible2(false);
    }

    return (
        <>
            <LoginInput
                username={name} setUsername={setUsername}
                password={pass} setPassword={setPassword}
                handleSubmit={handleSubmit}
            />
            {isVisible1 && <label>Welcome {context.user?.username}.</label>}
            {isVisible2 && <label>This account does not exist.</label>}
        </>
    )
}

export default LoginLogic