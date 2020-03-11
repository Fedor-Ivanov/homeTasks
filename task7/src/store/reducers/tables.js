import { ACTION_GET_TABLES } from '../actions/tables';

const initialState = {
    list: []
}

export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_GET_TABLES:

            return {
                ...state,
                list: payload
            };


        default:
            return state;
    }
}