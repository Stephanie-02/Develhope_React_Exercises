import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render () {
        const { name, age } = this.props;
        const finalResult = age > 18 && age < 65 && name === 'John';

        return (
            <div>
                <p> Welcome, <strong>{name}</strong>! </p>
                <p> {finalResult && <Age age={age} />} </p>
            </div>
        )
    }
}