import React, { useState } from "react";

type RegisterInputprops = {
    username: string, setUsername: React.Dispatch<React.SetStateAction<string>>,
    password: string, setPassword: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: any
};

function RegisterInput({
    username, setUsername,
    password, setPassword,
    handleSubmit}: RegisterInputprops
) {
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={
                    (e: any) => setUsername(e.target.value)
                }></input>
            </label>
            <br/>
            <label>
                Password:
                <input type="password" value={password} onChange={
                    (e: any) => setPassword(e.target.value)
                }></input>
            </label>
            <br/>
            <button type="submit">Submit</button>
            <br/>
        </form>
    )
}

export default RegisterInput