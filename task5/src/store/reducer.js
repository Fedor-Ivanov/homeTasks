import { TOGGLE_MODAL_ACTION, UPDATE_TODOS_ACTION } from './actions';


const initialState = {
    modal: false,
    todoList: []
};



export default function(state = initialState, action) {
    switch (action.type) {
        
        case TOGGLE_MODAL_ACTION:
            return { ...state, modal: !state.modal};

        case UPDATE_TODOS_ACTION:
            return { ...state, todoList: state.todoList };

        default:
            return state;

    }
}