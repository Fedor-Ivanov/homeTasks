import { ACTION_GROUP_SELECT } from '../actions/groups';


const initialState = {
    groups: [
        {
            id: 1,
            title: 'Gryffindor'
        },
        {
            id: 2,
            title: 'Slytherin'
        },
        {
            id: 3,
            title: 'Ravenclaw'
        },
        {
            id: 4,
            title: 'Hufflepuff'
        }
    ],
    selectedGroup: ''
};


export default function(state = initialState, {type, payload}) {
    switch (type) {

        case ACTION_GROUP_SELECT:

            return {
                ...state,
                selectedGroup: payload
            };

        default:
            return state;
    }
}