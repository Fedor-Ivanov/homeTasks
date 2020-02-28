export const TOGGLE_MODAL_ACTION = 'TOGGLE_MODAL';
export function toggleModal() {
    return { type: TOGGLE_MODAL_ACTION };
}

export const UPDATE_TODOS_ACTION = 'UPDATE_TODOS';
export function updateTodos(data) {
    return { type: UPDATE_TODOS_ACTION, update: data };
}

