import React from 'react';
import { connect } from 'react-redux';
import { saveHouse, changeHouse } from '../../store/actions/houses'



function HouseForm({ item, onSave, onChange }) {


    const onFormSubmit = (e) => {
        
        const changes = {
            title: e.target.value
        }
        
        onSave(changes)
    }

    const onInputChange = (e) => {

        const changes = {
            title: e.target.value
        }

        onChange(changes)

        console.log(changes)
    }
    
    return (
        <form className='edit-form' onSubmit={onFormSubmit}>
            <input type='text' onChange={onInputChange} value={item.title} />
            <button>save</button>
            <button>delete</button>
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
    onChange: changeHouse
};

export default connect(mapStateToProps, mapDispatchToprops)(HouseForm);

