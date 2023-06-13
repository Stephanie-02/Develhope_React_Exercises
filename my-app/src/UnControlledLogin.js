import React from 'react';

export default class UncontrolledLogin extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault() 

        const username = event.target.elements.username.value
        const password = event.target.elements.username.value
        console.log({username, password});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <label>Username:</label>
              <input name="username"/>
              <label>Password:</label>
              <input name='password' type='password'/>
              <button type="submit">Login</button>
              <button type='reset'>Reset</button>
            </form>
        )
    }
}