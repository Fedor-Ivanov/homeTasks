import {
    ACTION_DELETE, ACTION_TOGGLE, ACTION_OPEN_MODAL,
    ACTION_CLOSE_MODAL, ACTION_CHANGE_FORM_ITEM, ACTION_SAVE_FORM_ITEM
} from './actions';

const initialState = {
    tasks: [{ id: '1', title: 'lorem', isDone: false }, { id: '2', title: 'ipsum', isDone: true }],
    formItem: null
};

function getEmptyItem() {
    return { title: '', isDone: false };
}

function updateTask(tasks, task) {
    return tasks.map(item => (item.id === task.id ? task : item));
}

function createTask(tasks, task) {
    task.id = Date.now();
    return [...tasks, task];
}

export default function (state = initialState, { type, payload }) {
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
                    ? updateTask(state.tasks, payload)
                    : createTask(state.tasks, payload),
                formItem: null
            };

        default:
            return state;
    }
}
