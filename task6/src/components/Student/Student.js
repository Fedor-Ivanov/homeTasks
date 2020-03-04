import React from 'react'

function Student({ student, group}) {

    return (
        <li>
            <span>{student.name} </span>
            <span>{student.surname} </span>
            <span>- {group[0].title}</span>
        </li>
    )
}

export default Student
