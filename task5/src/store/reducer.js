import { TOGGLE_MODAL_ACTION, UPDATE_TODOS_ACTION, CREATE_TODO_ACTION } from './actions';


const initialState = {
    modal: false,
    todoList: [
        {id: 1, text: 'hello', isDone: false},
        {id: 2, text: 'ky', isDone: false},
    ],
    todo: {
        id: '',
        text: '',
        isDone: false
    }
};



export default function(state = initialState, action) {
    switch (action.type) {
        
        case TOGGLE_MODAL_ACTION:
            return { ...state, modal: !state.modal};

        case UPDATE_TODOS_ACTION:
            return { ...state, todoList: state.todoList };

        case CREATE_TODO_ACTION:
            return { ...state, todoList: action.newTodo }

        default:
            return state;

    }
}