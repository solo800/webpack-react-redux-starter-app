import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './stores/configureStore';
// import 'babel-polyfill'; necessary for async/await to work in browser
import ThingOne from './components/ThingOne';

class App extends React.Component {
    constructor(props) {
        super(props);

        console.log('here I am');
    }

    render() {
        return (
            <div>
                <h1> Hello world! </h1>
                <ThingOne />
            </div>
        );
    }
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
