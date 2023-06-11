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

    render() {
        return (
            <div>
                <button disabled={this.state.empty}>Login</button>
            </div>
        )
    }
}