import React, { useState } from 'react';

export default function Login() {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[remember, setRemember] = useState(false)
    const[empty, setEmpty] = useState(false)
    
    const handleUsername = (ev) => {
        const username = ev.target.value;
        const password = password;

        setUsername(username);
        setEmpty(password==='');
    };

    const handlePassword = (ev) => {
        const password = ev.target.value;
        const username = username;

        setPassword(password);
        setEmpty(username==='');
    }

    const handleResetState = () => {
        setUsername('');
        setPassword('');
        setRemember(false);
        setEmpty(false);
    };

    const handleRemember = () => {
        setRemember(!remember);
    };
    
    return (
            <div>
                <label>Username:</label>
                <input name="username" value={username} onChange={handleUsername}/>
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={handlePassword}/>
                <br/>
                <label>Remember</label>
                <input type="checkbox" checked={remember} onChange={handleRemember} />
                <br />
                <button disabled={empty}>Login</button>
                <button onClick={handleResetState}>Reset</button>
            </div>
    )
}