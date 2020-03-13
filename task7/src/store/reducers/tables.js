import { ACTION_GET_TABLES, ACTION_SAVE_TABLE, ACTION_DELETE_TABLE, ACTION_LOADING_TABLE } from '../actions/tables'
import apiTables from '../../services/apiTables'


const initialState = {
    list: [],
    isLoading: false
}


function updateTable(list, table) {
    apiTables.put(table.id, table).then(resp => {
        return list.map(item => (item.id === resp.table.id ? resp.table : item))
    });
}

function createTable(list, table) {
    apiTables.post('', table).then(resp => {
        return [...list, resp.table]
    })
}

function deleteTable(list, id) {
    apiTables.delete(id).then(resp => {
        list.filter(item => item.id !== resp.data.id)
    })
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
                list: deleteTable(state.list, payload)
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