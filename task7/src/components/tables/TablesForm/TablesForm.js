import React, { useState } from 'react'
import { connect } from 'react-redux'
import { saveTables } from '../../../store/actions/tables'
import { useHistory } from 'react-router-dom'

function TablesForm({ item, onSave, }) {

    const [table, setTable] = useState(item);

    const history = useHistory();

    function onFormSubmit(e) {
        e.preventDefault();
        onSave(table);
        history.push('/tables');
    }

    function onChange({ target }) {
        setTable({
            ...table,
            [target.name]: target.value
        });
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input type='text' onChange={onChange} name='name' value={table.name} />
            <input type='text' onChange={onChange} name='description' value={table.description} />
            <input type='text' onChange={onChange} name='sitsCount' value={table.sitsCount} />
            <div className='form__button_wrap'>
                <button className='form__button' >save</button>
                <button className='form__button' onClick={() => history.push('/tables')}>back</button>
            </div>
        </form>
    )
}

function mapStateToProps({ tables }, { id }) {

    return {
        item: id !== 'new' ? tables.list.find(item => item.id == id) : { name: '', description: '', sitsCount: '' },
    };

}

const mapDispatchToprops = {
    onSave: saveTables,
};

export default connect(mapStateToProps, mapDispatchToprops)(TablesForm);
