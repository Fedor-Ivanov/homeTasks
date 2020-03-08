export const ACTION_STUDENT_SELECT = 'ACTION_STUDENT_SELECT';
export function selectStudent(value) {
    return {
        type: ACTION_STUDENT_SELECT,
        payload: value
    };
}

export const ACTION_STUDENT_SAVE = 'ACTION_STUDENT_SAVE';
export function saveStudent(value) {
    return {
        type: ACTION_STUDENT_SAVE,
        payload: value
    };
}

export const ACTION_STUDENT_DELETE = 'ACTION_STUDENT_DELETE';
export function deleteStudent(id) {
    return {
        type: ACTION_STUDENT_DELETE,
        payload: id
    };
}