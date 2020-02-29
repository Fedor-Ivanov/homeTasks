export const TOGGLE_MODAL_ACTION = 'TOGGLE_MODAL';
export function toggleModal() {
    return { type: TOGGLE_MODAL_ACTION };
}

export const UPDATE_TODOS_ACTION = 'UPDATE_TODOS';
export function updateTodos(data) {
    return { type: UPDATE_TODOS_ACTION, update: data };
}

export const CREATE_TODO_ACTION = 'CREATE_TODO';
export function createTodo(todo) {
    return { type: CREATE_TODO_ACTION, newTodo: todo }
}

export const CHANGE_VALUE_ACTION = 'CHANGE_VALUE';
export function onValueChange(value) {
    return { type: CHANGE_VALUE_ACTION, value }
}
