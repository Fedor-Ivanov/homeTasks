export const ACTION_GET_TABLES = 'ACTION_GET_TABLES';
export function getTables(data) {
    return {
        type: ACTION_GET_TABLES,
        payload: data
    };
}

export const ACTION_SAVE_TABLE = 'ACTION_SAVE_TABLE';
export function saveTables(table) {
    return {
        type: ACTION_SAVE_TABLE,
        payload: table
    };
}

export const ACTION_DELETE_TABLE = 'ACTION_DELETE_TABLE';
export function deleteTable(id) {
    return {
        type: ACTION_DELETE_TABLE,
        payload: id
    };
}
