import apiWaiters from '../../services/apiWaiters'


export const ACTION_SET_WAITERS = 'ACTION_SET_WAITERS';
export function setWaiters(data) {
    return {
        type: ACTION_SET_WAITERS,
        payload: data
    };
}

export const ACTION_DELETE_WAITER = 'ACTION_DELETE_WAITER';
export function deleteWaiter(id) {
    return {
        type: ACTION_DELETE_WAITER,
        payload: id
    };
}

export const ACTION_CREATE_WAITER = 'ACTION_CREATE_WAITER';
export function updateWaiter(waiter) {
    return {
        type: ACTION_CREATE_WAITER,
        payload: waiter
    };
}

export const ACTION_UPDATE_WAITER = 'ACTION_UPDATE_WAITER';
export function createWaiter(waiter) {
    return {
        type: ACTION_UPDATE_WAITER,
        payload: waiter
    };
}

export const ACTION_LOADING_WAITER = 'ACTION_LOADING_WAITER';
export function loadingWaiter(isLoading) {
    return {
        type: ACTION_LOADING_WAITER,
        payload: isLoading
    };
}

export const ACTION_SEARCH_WAITER = 'ACTION_SEARCH_WAITER';
export function searchWaiter(query) {
    return {
        type: ACTION_SEARCH_WAITER,
        payload: query
    };
}

export const THUNK_GET_WAITERS = 'THUNK_GET_WAITERS';
export function getWaiters() {
    return function (dispatch) {
        dispatch(loadingWaiter(true));
        apiWaiters.get('').then(resp => dispatch(setWaiters(resp.data)));
        dispatch(loadingWaiter(false));
    };
}

export const THUNK_DELETE_WAITER = 'THUNK_DELETE_WAITER';
export function delWaiter(id) {
    return function (dispatch) {
        apiWaiters.delete(id).then(resp => {
            dispatch(deleteWaiter(resp.data.id));
        })
    };
}

export const THUNK_SAVE_WAITER = 'THUNK_SAVE_WAITER';
export function saveWaiter(item) {
    return function (dispatch) {

        if (item.id) {
            apiWaiters.put(item.id, item).then(resp => {
                dispatch(createWaiter(resp.data));
            })
        } else {
            apiWaiters.post('', item).then(resp => {
                dispatch(updateWaiter(resp.data));
            })
        }
    };
}

export const THUNK_SEARCH_WAITER = 'THUNK_SEARCH_WAITER';
export function queryWaiter(query) {
    return function (dispatch) {
        apiWaiters.put(query, query).then(resp => {
            dispatch(searchWaiter(resp.data));
        })
    };
}