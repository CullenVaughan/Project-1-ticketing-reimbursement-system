import React, { useState } from "react";

type LoginInputProps = {
    username: string, setUsername: React.Dispatch<React.SetStateAction<string>>,
    password: string, setPassword: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: any
};

function LoginInput({
    username, setUsername,
    password, setPassword,
    handleSubmit}: LoginInputProps
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
            <button type="submit">Login</button>
            <br/>
        </form>
    )
}

export default LoginInput