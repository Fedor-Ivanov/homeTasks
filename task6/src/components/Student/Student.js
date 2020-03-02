import React from 'react'

function Student({ student }) {
    return (
        <li>
            <span>{student.name} </span>
            <span>{student.surname}</span>
            
        </li>
    )
}

export default Student
