import React from 'react';
import {Provider} from 'react-redux';
import store from '../stores/configureStore';
// import 'babel-polyfill'; necessary for async/await to work in browser

import Container from './ExampleComponent/Container';

const App = () => {
    return (
        <Provider store={store}>
            <Container />
        </Provider>
    );
};

export default App;
