const defaultState = {
    test: 'test state',
    asyncData: 'default async data',
};

const example = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_TEST':
            return {
                ...state,
                test: action.data,
            };
        case 'FETCH_ASYNC_DATA':
            return {
                ...state,
                asyncData: action.data,
            };
        default:
            return state;
    }
};

export default example;
