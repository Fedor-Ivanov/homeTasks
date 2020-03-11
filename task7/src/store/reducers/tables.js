import { ACTION_GET_TABLES, ACTION_SAVE_TABLE, ACTION_DELETE_TABLE } from '../actions/tables'
import apiTables from '../../services/apiTables'


const initialState = {
    list: []
}

function updateTable(list, data) {
    return list.map(item => (item.id == data.id ? data : item));
}

function createTable(list, table) {
    table.id = Date.now();
    return [...list, table]
}


export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_GET_TABLES:

            return {
                ...state,
                list: payload
            };

        case ACTION_SAVE_TABLE:

            return {
                ...state,
                list: payload.id ? updateTable(state.list, payload) : createTable(state.list, payload)
            };

        case ACTION_DELETE_TABLE:

            return {
                ...state,
                list: state.list.filter(item => item.id !== payload)
            };

        default:
            return state;
    }
}