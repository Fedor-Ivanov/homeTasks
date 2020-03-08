import { ACTION_HOUSE_SELECT, ACTION_HOUSE_SAVE, ACTION_HOUSE_DELETE } from '../actions/houses';


const initialState = {
    houses: [
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
    selectedHouse: ''
};

function updateHouse(houses, data) {
    return houses.map(item => (item.id == data.id ? data : item));
}

function createHouse() {
    console.log(123);
}

export default function(state = initialState, {type, payload}) {
    switch (type) {

        case ACTION_HOUSE_SELECT:

            return {
                ...state,
                selectedHouse: payload
            };

        case ACTION_HOUSE_SAVE:

            return {
                ...state,
                houses: payload.id ? updateHouse(state.houses, payload) : createHouse(state.houses, payload)
            };

        case ACTION_HOUSE_DELETE:

            return {
                ...state,
                houses: state.houses.filter(item => item.id !== payload)
            };

        default:
            return state;
    }
}