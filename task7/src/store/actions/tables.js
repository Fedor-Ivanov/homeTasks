export const ACTION_GET_TABLES = 'ACTION_GET_TABLES';
export function getTables(data) {
    return {
        type: ACTION_GET_TABLES,
        payload: data
    };
}