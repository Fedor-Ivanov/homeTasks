import apiTables from '../../services/apiTables'


export const ACTION_SET_TABLES = 'ACTION_SET_TABLES';
export function setTables(data) {
    return {
        type: ACTION_SET_TABLES,
        payload: data
    };
}

// export const ACTION_SAVE_TABLE = 'ACTION_SAVE_TABLE';
// export function saveTables(table) {
//     return {
//         type: ACTION_SAVE_TABLE,
//         payload: table
//     };
// }

export const ACTION_DELETE_TABLE = 'ACTION_DELETE_TABLE';
export function deleteTable(id) {
    return {
        type: ACTION_DELETE_TABLE,
        payload: id
    };
}

export const ACTION_CREATE_TABLE = 'ACTION_CREATE_TABLE';
export function updateTable(table) {
    return {
        type: ACTION_CREATE_TABLE,
        payload: table
    };
}

export const ACTION_UPDATE_TABLE = 'ACTION_UPDATE_TABLE';
export function createTable(table) {
    return {
        type: ACTION_UPDATE_TABLE,
        payload: table
    };
}

export const ACTION_LOADING_TABLE = 'ACTION_LOADING_TABLE';
export function loadingTable(isLoading) {
    return {
        type: ACTION_LOADING_TABLE,
        payload: isLoading
    };
}

export const ACTION_SEARCH_TABLE = 'ACTION_SEARCH_TABLE';
export function searchTable(query) {
    return {
        type: ACTION_SEARCH_TABLE,
        payload: query
    };
}

export const THUNK_GET_TABLES = 'THUNK_GET_TABLES';
export function getTables() {
    return function (dispatch) {
        dispatch(loadingTable(true));
        apiTables.get('').then(resp => dispatch(setTables(resp.data)));
        dispatch(loadingTable(false));
    };
}

export const THUNK_DELETE_TABLE = 'THUNK_DELETE_TABLE';
export function delTable(id) {
    return function (dispatch) {
        apiTables.delete(id).then(resp => {
            dispatch(deleteTable(resp.data.id));
        })
    };
}

export const THUNK_SAVE_TABLE = 'THUNK_SAVE_TABLE';
export function saveTable(item) {
    return function (dispatch) {

        if (item.id) {
            apiTables.put(item.id, item).then(resp => {
                dispatch(createTable(resp.data));
            })
        } else {
            apiTables.post('', item).then(resp => {
                dispatch(updateTable(resp.data));
            })
        }
    };
}

export const THUNK_SEARCH_TABLE = 'THUNK_SEARCH_TABLE';
export function queryTable(query) {
    return function (dispatch) {

        console.log(query);
        apiTables.put(query, query).then(resp => {
            dispatch(searchTable(resp.data));
        })
    };
}