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

export const ACTION_HOUSE_CHANGE = 'ACTION_HOUSE_CHANGE';
export function changeHouse(value) {
    return {
        type: ACTION_HOUSE_CHANGE,
        payload: value
    };
}