import { TOGGLE_MODAL_ACTION } from './actions';


const initialState = {
    modal: false,
    todoList: 17
};



export default function(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MODAL_ACTION:
            return { ...state, modal: !state.modal};
        default:
            return state;

    }
}