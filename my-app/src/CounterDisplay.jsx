import React from "react";

export default class CounterDisplay extends React.Component {
    render() {
        return <h1>Count: {this.state.count}</h1>;
    }
}