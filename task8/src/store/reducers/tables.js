import {
    ACTION_SET_TABLES,
    ACTION_DELETE_TABLE,
    ACTION_LOADING_TABLE,
    ACTION_CREATE_TABLE,
    ACTION_UPDATE_TABLE,
    ACTION_SEARCH_TABLE
} from '../actions/tables'


const initialState = {
    list: [],
    isLoading: false,
    search: ''
}


function updateTable(list, data) {

    console.log(list);
    console.log(data);

    return list.map(item => (item.id === data.id ? data : item));
}

function createTable(list, item) {
    return [...list, item]
}


export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_SET_TABLES:

            return {
                ...state,
                list: payload
            };

        case ACTION_DELETE_TABLE:

            return {
                ...state,
                list: state.list.filter(item => item.id !== payload)
            };

        case ACTION_SEARCH_TABLE:

            return {
                ...state,
                search: payload
            };

        case ACTION_UPDATE_TABLE:

            console.log(state.list);
            console.log(payload);

            return {
                ...state,
                list: updateTable(state.list, payload)
            };

        case ACTION_CREATE_TABLE:

            return {
                ...state,
                list: createTable(state.list, payload)
            };

        case ACTION_LOADING_TABLE:

            return {
                ...state,
                isLoading: payload
            };

        default:
            return state;
    }
}