import { ACTION_GROUP_SELECT, ACTION_GROUP_SAVE } from '../actions/groups';


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

function updateGroup(groups, data) {
    return groups.map(item => (item.id == data.id ? data : item));
}

function createGroup() {
    console.log(123);
}

export default function(state = initialState, {type, payload}) {
    switch (type) {

        case ACTION_GROUP_SELECT:

            return {
                ...state,
                selectedGroup: payload
            };

        case ACTION_GROUP_SAVE:

            return {
                ...state,
                groups: payload.id ? updateGroup(state.groups, payload) : createGroup(state.groups, payload)
            }

        default:
            return state;
    }
}