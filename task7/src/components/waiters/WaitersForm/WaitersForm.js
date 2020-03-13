import React, { useState } from 'react'
import { connect } from 'react-redux'
import { saveWaiter } from '../../../store/actions/waiters'
import { useHistory } from 'react-router-dom'

function WaitersForm({ item, saveWaiter }) {

    const [waiter, setWaiter] = useState(item);

    const history = useHistory();

    function onFormSubmit(e) {
        e.preventDefault();
        saveWaiter(waiter);
        history.push('/waiters');
    }

    function onChange({ target }) {
        setWaiter({
            ...waiter,
            [target.name]: target.value
        });
    }

    return (
        <form className='form' onSubmit={onFormSubmit}>
            <div className='form-inputs'>
                <input type='text' placeholder='name' onChange={onChange} name='name' value={waiter.name} />
                <input type='text' placeholder='salary' onChange={onChange} name='salary' value={waiter.salary} />
                <input type='text' placeholder='startDate' onChange={onChange} name='startDate' value={waiter.startDate} />
            </div>
            <div className='form__button_wrap'>
                <button className='form__button' >save</button>
                <button className='form__button' onClick={() => history.push('/waiters')}>back</button>
            </div>
        </form>
    )
}

function mapStateToProps({ waiters }, { id }) {

    return {
        item: id !== 'new' ? waiters.list.find(item => item.id === id) : { name: '', salary: '', startDate: '' },
    };

}

const mapDispatchToprops = {
    saveWaiter: saveWaiter
};

export default connect(mapStateToProps, mapDispatchToprops)(WaitersForm);
