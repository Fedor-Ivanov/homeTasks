export const ACTION_HOUSE_SELECT = 'ACTION_HOUSE_SELECT';
export function selectHouse(value) {
    return {
        type: ACTION_HOUSE_SELECT,
        payload: value
    };
}

export const ACTION_HOUSE_SAVE = 'ACTION_HOUSE_SAVE';
export function saveHouse(value) {
    return {
        type: ACTION_HOUSE_SAVE,
        payload: value
    };
}

export const ACTION_HOUSE_DELETE = 'ACTION_HOUSE_DELETE';
export function deleteHouse(id) {
    return {
        type: ACTION_HOUSE_DELETE,
        payload: id
    };
}