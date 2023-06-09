import React from 'react';

export default class ClickCounter extends React.Component {
    state = { count: 0 }

    handleClickCounter = () => {
        this.setState((state) => {
            return {
                count: state.count + 1,
            }
        })
    }

    render() {
        return (
            <div>
              <h1>Count: {this.state.count}</h1>
              <button onClick = {this.handleClickCounter}>
                  Counter
              </button>
            </div>
        )
    }
}