import React from 'react';
import { Welcome } from './Welcome'
import { Counter } from './Counter'

export class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello</h1>
                <Welcome name="Stephano" age= {21}/>
                <Counter initialValue={5} incrementAmount={1} incrementInterval={1000} />
            </div>
        )
    }
}
