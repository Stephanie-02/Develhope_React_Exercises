import React from 'react';
import { Welcome } from './Welcome'
import { Counter } from './Counter'
import ClickCounter from './ClickCounter'
import ClickTracker from './ClickTracker';
import InteractiveWelcome from './InteractiveWelcome';

export class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello</h1>
                <Welcome name="Stephano" age= {21}/>
                <Counter initialValue={5} incrementAmount={1} incrementInterval={1000} />
                <ClickCounter />
                <ClickTracker />
                <InteractiveWelcome />
            </div>
        )
    }
}
