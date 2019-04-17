import React from 'react';
import Style from './Style';

const Presentation = (props) => {
    return (
        <Style>
            <h1>Test: {props.test}</h1>
            <input type='text' value={props.test} onChange={props.updateTest} />
            <h2>Async Data: {props.asyncData}</h2>
        </Style>
    );
};

export default Presentation;
