import {  } from '../actions/students';


const initialState = {
    students: [
        {
            id: 1,
            name: 'Harry',
            surname: 'Potter',
            groupId: 1
        },
        {
            id: 2,
            name: 'Ron',
            surname: 'Weasley',
            groupId: 1
        },
        {
            id: 3,
            name: 'Draco',
            surname: 'Malfoy', 
            groupId: 2
        },
        {
            id: 4,
            name: 'Luna',
            surname: 'Lovegood',
            groupId: 3
        },
        {
            id: 5,
            name: 'Cho',
            surname: 'Chang',
            groupId: 3
        },
        {
            id: 6,
            name: 'Cedric',
            surname: 'Diggory',
            groupId: 4
        }
    ]
};


export default function(state = initialState, {type, payload}) {
    switch (type) {
        default:
            return state;
    }
}