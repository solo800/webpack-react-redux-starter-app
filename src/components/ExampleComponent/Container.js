import React from 'react';
import {connect} from 'react-redux';

import Presentation from './Presentation';
import * as actions from '../../actions/mainActions';

class Container extends React.Component {
    constructor (props) {
        super(props);

        this.updateTest = this.updateTest.bind(this);
    }

    componentDidMount () {
        // An async action
        this.props.dispatch(actions.fetchAsyncData());
    }

    updateTest (event) {
        // this.props.dispatch({type: 'UPDATE_TEST', test: event.target.value});
        this.props.dispatch(actions.updateTest(event.target.value));
    }

    render () {
        return (
            <div>
                <Presentation {...this.props} updateTest={this.updateTest} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        test: state.exampleReducer.test,
        asyncData: state.exampleReducer.asyncData,
    };
};

export default connect(mapStateToProps)(Container);
