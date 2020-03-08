import { ACTION_STUDENT_SAVE, ACTION_STUDENT_DELETE } from '../actions/students';


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

function updateStudent(students, data) {
    return students.map(item => (item.id == data.id ? data : item));
}

function createStudent(students, student) {
    student.id = Date.now();
    return [...students, student]
}

export default function(state = initialState, {type, payload}) {
    switch (type) {

        case ACTION_STUDENT_SAVE:

            return {
                ...state,
                students: payload.id ? updateStudent(state.students, payload) : createStudent(state.students, payload)
            };

        case ACTION_STUDENT_DELETE:

            return {
                ...state,
                students: state.students.filter(item => item.id !== payload)
            };

        default:
            return state;
    }
}