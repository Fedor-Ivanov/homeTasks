import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveHouse, deleteHouse } from '../../store/actions/houses'
import { useHistory } from 'react-router-dom';



function HouseForm({ item, onSave, onDelete }) {

    const [title, setTitle] = useState(item.title);

    const history = useHistory();

    function onFormSubmit(e) {
        e.preventDefault();
        onSave({
            id: item.id,
            title
        });
        history.push('/houses');
    }

    function onDeleteClick(e) {
        e.preventDefault();
        onDelete(
            item.id
        )
        history.push('/houses');
    }
    
    return (
        <form onSubmit={onFormSubmit} className='edit-form'>
            <input type='text' onChange={({target}) => setTitle(target.value)} value={title} />
            <div className='form__button_wrap'>
                <button className='form__button' >save</button>
                <button className='form__button' onClick={onDeleteClick}>delete</button>
                <button className='form__button' onClick={() => history.push('/houses')}>back</button>
            </div>
        </form>
    )
}

function mapStateToProps({ houses }, { id }) {

    return {
        item: id !== 'new' ? houses.houses.find(item => item.id == id) : { id: '', title: 'title' },
    };

}

const mapDispatchToprops = {
    onSave: saveHouse,
    onDelete: deleteHouse
};

export default connect(mapStateToProps, mapDispatchToprops)(HouseForm);

