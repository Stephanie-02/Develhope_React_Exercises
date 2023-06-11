import React from 'react';

export default class Login extends React.Component {
    state = {
        username: '',
        password: '',
        empty: false
    }

    handleUsername = (ev) => {
        const username = ev.target.value;
        const password = this.state.password;

        this.setState({
            username: username,
            empty: password===''
        }) 
    }

    handlePassword = (ev) => {
        const password = ev.target.value;
        const username = this.state.username;

        this.setState({
            password: password,
            empty: username===''
        }) 
    }

    handleResetState = () => {
        this.setState({
            username:'',
            password:''
        })
    }

    render() {
        return (
            <div>
                <label>Username:</label>
                <input name="username" value={this.state.username} onChange={this.handleUsername}/>
                <label>Password:</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handlePassword}/>
                <br/>
                <button disabled={this.state.empty}>Login</button>
                <button onClick={this.handleResetState}>Reset</button>
            </div>
        )
    }
}