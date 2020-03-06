import React from 'react';
import { connect } from 'react-redux';


function StudentsForm({ item }) {

    return (
        <form className='edit-form'>
            <input type='text' value={ item.name } />
            <input type='text' value={ item.surname } />
            <select value={item.groupId} >
                <option disabled value="">Chose Goup</option>
                <option value="1">Gryffindor</option>
                <option value="2">Slytherin</option>
                <option value="3">Ravenclaw</option>
                <option value="4">Hufflepuff</option>
            </select>
        </form>
    )
}

function mapStateToProps({ students }, { id }) {


    return {
        item: id !== 'new' ? students.students.find(item => item.id == id) : { id: '', name: 'name', surname: 'surname', groupId: '' },

    };
}

const mapDispatchToprops = {
    // onSave: saveCategory
};

export default connect(mapStateToProps, mapDispatchToprops)(StudentsForm);
