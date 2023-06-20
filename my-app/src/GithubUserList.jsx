import React, { useState, useEffect} from 'react';
import GithubUser from './GithubUser';

export default function GithubUserList() {
    const[usernames, setUsernames] = useState([]);
    const[input, setInput] = useState('');

    const handleInput = (ev) => {
        setInput(ev.target.value)
    }

    const handleAddUser = () => {
        setUsernames([...usernames,input]);
        setInput('');
    }

    return (
        <div>
            {usernames.map((username) => (
                <GithubUser username={username} />
            ))}
            <input value={input} onChange={handleInput}></input>
            <button onClick={handleAddUser}>Add User</button>
        </div>
    )
}