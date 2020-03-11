import React, { useState } from 'react'
import { connect } from 'react-redux'
import { saveTables } from '../../../store/actions/tables'
import { useHistory } from 'react-router-dom'

function TablesForm({ item, onSave, }) {

    const [table, setTable] = useState(item);

    console.log(table);

    const history = useHistory();

    function onFormSubmit(e) {
        e.preventDefault();
        onSave({
            ...table,
            item
        });
        history.push('/tables');
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input type='text' onChange={({ target }) => setTable(target.value)} value={item.name} />
            <input type='text' onChange={({ target }) => setTable(target.value)} value={item.description} />
            <input type='text' onChange={({ target }) => setTable(target.value)} value={item.sitsCount} />
            <div className='form__button_wrap'>
                <button className='form__button' >save</button>
                <button className='form__button' onClick={() => history.push('/tables')}>back</button>
            </div>
        </form>
    )
}

function mapStateToProps({ tables }, { id }) {

    return {
        item: id !== 'new' ? tables.list.find(item => item.id == id) : { name: null, description: null, sitsCount: null },
    };

}

const mapDispatchToprops = {
    onSave: saveTables,
};

export default connect(mapStateToProps, mapDispatchToprops)(TablesForm);
