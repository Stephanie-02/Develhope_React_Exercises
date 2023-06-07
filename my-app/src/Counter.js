import React from "react";

export class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: props.initialValue ?? 0,
        };

        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + (props.incrementAmount),
                }
            })
        }, props.incrementInterval)
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
            </div>
        )
    }
}