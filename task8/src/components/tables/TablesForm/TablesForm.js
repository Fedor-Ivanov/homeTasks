import React, { useState } from 'react'
import { connect } from 'react-redux'
import { saveTable } from '../../../store/actions/tables'
import { useHistory } from 'react-router-dom'

function TablesForm({ item, saveTable }) {

    const [table, setTable] = useState(item);

    const history = useHistory();

    function onFormSubmit(e) {
        e.preventDefault();
        saveTable(table);
        history.push('/tables');
    }

    function onChange({ target }) {
        setTable({
            ...table,
            [target.name]: target.value
        });
    }

    return (
        <form className='form' onSubmit={onFormSubmit}>
            <div className='form-inputs'>
                <input type='text' placeholder='name' onChange={onChange} name='name' value={table.name} />
                <input type='text' placeholder='description' onChange={onChange} name='description' value={table.description} />
                <input type='text' placeholder='sitsCount' onChange={onChange} name='sitsCount' value={table.sitsCount} />
            </div>
            <div className='form__button_wrap'>
                <button className='form__button' >save</button>
                <button className='form__button' onClick={() => history.push('/tables')}>back</button>
            </div>
        </form>
    )
}

function mapStateToProps({ tables }, { id }) {

    return {
        item: id !== 'new' ? tables.list.find(item => item.id === id) : { name: '', description: '', sitsCount: '' },
    };

}

const mapDispatchToprops = {
    saveTable: saveTable
};

export default connect(mapStateToProps, mapDispatchToprops)(TablesForm);
