import React from "react";
import CounterDisplay from "./CounterDisplay";


export class Counter extends React.Component {
    state = {
        count: this.props.initialValue ?? 0,
    };

    componentDidMount() {
        this._interval = setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + (this.props.incrementAmount),
                };
            });
        }, this.props.incrementInterval)
    }

    componentWillMount() {
        clearInterval(this._interval);
    }

    render() {
        return (
            <div>
                <CounterDisplay count={this.state.count} />
            </div>
        )
    }
}

// the constructor is no longer required in the Counter component since the state initialization and interval setup are handled within the lifecycle methods