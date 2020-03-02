import {  } from '../actions/groups';


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
    ]
};


export default function(state = initialState, {type, payload}) {
    switch (type) {
        default:
            return state;
    }
}