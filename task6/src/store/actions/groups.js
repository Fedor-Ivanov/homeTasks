export const ACTION_GROUP_SELECT = 'ACTION_GROUP_SELECT';
export function selectGroup(value) {
    return {
        type: ACTION_GROUP_SELECT,
        payload: value
    };
}