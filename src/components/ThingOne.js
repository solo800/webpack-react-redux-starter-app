import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const ThingStyle = styled.div`
    background-color: blue;
`;

const ThingOne = props => {
    function updateTest(event) {
        const test = event.target.value;

        props.dispatch(dispatch => {
            // const timeoutLength = Math.random() * 1000;
            const timeoutLength = 200;

            setTimeout(() => {
                dispatch({type: 'UPDATE_TEST', test});
            }, timeoutLength);
        });
    }

    return (
        <ThingStyle>
            <h1>I'm thing one. Test: {props.test}</h1>
            <input type='text' value={props.test} onChange={updateTest} />
        </ThingStyle>
    );
};

const mapStateToProps = (state, props) => ({test: state.test});

// export default ThingOne;
export default connect(mapStateToProps)(ThingOne);
