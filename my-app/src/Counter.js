import React from "react";
import CounterDisplay from "./CounterDisplay";

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
                <CounterDisplay count={this.state.count} />
            </div>
        )
    }
}