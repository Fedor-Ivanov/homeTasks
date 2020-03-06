import React from 'react'

function Student({ student, house}) {

    return (
        <li>
            <span>{student.name} </span>
            <span>{student.surname} </span>
            <span>- {house[0].title}</span>
        </li>
    )
}

export default Student
