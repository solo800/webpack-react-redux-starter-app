export function updateTest (data) {
    return {
        type: 'UPDATE_TEST',
        data,
    };
}

export function fetchAsyncData () {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: 'FETCH_ASYNC_DATA',
                data: 'Some async data',
            });
        }, 1000);
    };
}
