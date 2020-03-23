import {
    ACTION_SET_WAITERS,
    ACTION_DELETE_WAITER,
    ACTION_LOADING_WAITER,
    ACTION_CREATE_WAITER,
    ACTION_UPDATE_WAITER,
    ACTION_SEARCH_WAITER
} from '../actions/waiters'


const initialState = {
    list: [],
    isLoading: false,
    search: ''
}


function updateWaiters(list, data) {

    console.log(list);
    console.log(data);

    return list.map(item => (item.id === data.id ? data : item));
}

function createWaiters(list, item) {
    return [...list, item]
}


export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_SET_WAITERS:

            return {
                ...state,
                list: payload
            };

        case ACTION_DELETE_WAITER:

            return {
                ...state,
                list: state.list.filter(item => item.id !== payload)
            };

        case ACTION_SEARCH_WAITER:

            return {
                ...state,
                search: payload
            };

        case ACTION_UPDATE_WAITER:

            console.log(state.list);
            console.log(payload);

            return {
                ...state,
                list: updateWaiters(state.list, payload)
            };

        case ACTION_CREATE_WAITER:

            return {
                ...state,
                list: createWaiters(state.list, payload)
            };

        case ACTION_LOADING_WAITER:

            return {
                ...state,
                isLoading: payload
            };

        default:
            return state;
    }
}