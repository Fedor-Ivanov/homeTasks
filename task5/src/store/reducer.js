import {
    ACTION_DELETE,
    ACTION_TOGGLE,
    ACTION_OPEN_MODAL,
    ACTION_CLOSE_MODAL,
    ACTION_CHANGE_FORM_ITEM,
    ACTION_SAVE_FORM_ITEM
} from './actions';

const initialState = {
    tasks: [{ id: '1', title: 'lorem', isDone: false }, { id: '2', title: 'ipsum', isDone: true }],
    formItem: null
};

function getEmptyItem() {
    return { title: 'type some task', isDone: false };
}

function updateTodo(tasks, todo) {
    return tasks.map(item => (item.id === todo.id ? todo : item));
}

function createTodo(tasks, todo) {
    todo.id = Date.now();
    return [...tasks, todo];
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_DELETE:
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== payload)
            };
        case ACTION_TOGGLE:
            return {
                ...state,
                tasks: state.tasks.map(item =>
                    item.id !== payload
                        ? item
                        : { ...item, isDone: !item.isDone }
                )
            };

        case ACTION_OPEN_MODAL:
            return {
                ...state,
                formItem: payload
                    ? state.tasks.find(item => item.id === payload)
                    : getEmptyItem()
            };

        case ACTION_CLOSE_MODAL:
            return {
                ...state,
                formItem: null
            };

        case ACTION_CHANGE_FORM_ITEM:
            return {
                ...state,
                formItem: { ...state.formItem, ...payload }
            };

        case ACTION_SAVE_FORM_ITEM:
            return {
                ...state,
                tasks: payload.id
                    ? updateTodo(state.tasks, payload)
                    : createTodo(state.tasks, payload),
                formItem: null
            };

        default:
            return state;
    }
}
