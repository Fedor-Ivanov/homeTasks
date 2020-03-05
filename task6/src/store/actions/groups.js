export const ACTION_GROUP_SELECT = 'ACTION_GROUP_SELECT';
export function selectGroup(value) {
    return {
        type: ACTION_GROUP_SELECT,
        payload: value
    };
}

export const ACTION_GROUP_SAVE = 'ACTION_GROUP_SAVE';
export function saveGroup(value) {
    return {
        type: ACTION_GROUP_SAVE,
        payload: value
    };
}