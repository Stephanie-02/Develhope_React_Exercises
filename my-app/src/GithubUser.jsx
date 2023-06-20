import React, {useState, useEffect } from 'react';

const API = 'https://api.github.com/users/${username}';

export default function GithubUser({username}) {
    const[userdata, setUserdata] = useState('');

    useEffect(() => {
        fetch(API).then((result) => {
            return result.json();
        }).then((data) => {
            console.log(data);
            setUserdata(data);
        })
    }, [])

    return (
        <div>
            <h1>Github User</h1>
            <p>Username: {username}</p>
        </div>
    )
}