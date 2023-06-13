import React, {createRef} from 'react';

export default class UncontrolledLogin extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault() 

        const username = event.target.elements.username.value
        const password = event.target.elements.username.value
        console.log({username, password});
    }

    usernameRef = createRef();

    componentDidMount() {
        this.usernameRef.current.focus();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <label>Username:</label>
              <input name="username" ref={this.usernameRef}/>
              <label>Password:</label>
              <input name='password' type='password'/>
              <button type="submit">Login</button>
              <button type='reset'>Reset</button>
            </form>
        )
    }
}