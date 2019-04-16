import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import debounce from '../middleware/debounce';

const defaultState = {test: 'test state'};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_TEST':
            console.log('in update test', action);
            return {
                ...state,
                test: action.test
            };
        default:
            return state;
    }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
