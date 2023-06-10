import React from 'react';
import { Welcome } from './Welcome';

export default class InteractiveWelcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
        };
    }

    handleInput = (ev) => {
        this.setState({
            name: ev.target.value
        });
    };

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={this.handleInput}/>
                <Welcome name={this.state.name}/>
            </div>
        )
    }
}