import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveStudent, deleteStudent } from '../../store/actions/students'
import { useHistory } from 'react-router-dom';


function StudentsForm({ item, houses, onSave, onDelete }) {

    const [student, setStudent] = useState(item);

    const history = useHistory();

    function onFormSubmit(e) {
        e.preventDefault(e);
        onSave(student);
        history.push('/students');
    }

    function onDeleteClick(e) {
        e.preventDefault(e);
        onDelete(
            item.id
        )
        history.push('/students');
    }

    function onChange({ target }) {
        setStudent({
            ...student,
            [target.name]: target.value
        });
    }

    return (
        <form onSubmit={onFormSubmit} className='edit-form'>
            <input type='text' name='name' onChange={onChange} value={ student.name } />
            <input type='text' name='surname' onChange={onChange} value={ student.surname } />
            <select type='text' name='groupId' onChange={onChange} value={student.groupId} >
                {houses.map(house => {
                    return <option key={house.id} value={house.id} >{house.title}</option>
                })}
            </select>
            <button >save</button>
            <button onClick={onDeleteClick}>delete</button>
            <button onClick={() => history.push('/students')}>go back</button>
        </form>
    )
}

function mapStateToProps({ students, houses }, { id }) {


    return {
        item: id !== 'new' ? students.students.find(item => item.id == id) : { id: '', name: 'name', surname: 'surname', groupId: '' },
        houses: houses.houses,
    };
}

const mapDispatchToprops = {
    onSave: saveStudent,
    onDelete: deleteStudent
};

export default connect(mapStateToProps, mapDispatchToprops)(StudentsForm);
