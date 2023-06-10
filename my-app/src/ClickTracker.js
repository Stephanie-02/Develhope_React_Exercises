import React from 'react';

export default class ClickTracker extends React.Component {
    state = {
        lastPressed: '',
    }

    handleButtonClick = (event) => {
        const lastPressed = event.target.textContent;
        this.setState({lastPressed});
    };

    render() {
        return (
            <div>
                <h1>Last Button Pressed: {this.state.lastPressed} </h1>
              <button name="myButton" onClick={this.handleButtonClick}>Click me!</button>
              <button onClick={this.handleButtonClick}>Click me!</button>
              <button onClick={this.handleButtonClick}>Click me!</button>
            </div>
        )
     }
}