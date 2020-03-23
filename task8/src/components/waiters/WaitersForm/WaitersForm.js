<<<<<<< HEAD
import React from 'react'
import { connect } from 'react-redux'
import { saveWaiter } from '../../../store/actions/waiters'
import { useHistory } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'


function WaitersForm({ item, saveWaiter }) {

    const history = useHistory();

    function onFormSubmit(data) {
        saveWaiter(data);
        history.push('/waiters');
    }


    return (

        <Formik
            initialValues={{ id: item.id, name: item.name, salary: item.salary, startDate: item.startDate }}
            onSubmit={(values) => { onFormSubmit(values) }}
            validate={(values) => {
                const errors = {};

                if (values.name === '') {
                    errors.name = "Name is required"
                }

                if (isNaN(values.salary)) {
                    errors.salary = "Salary must be a number"
                }

                return errors;
            }}>

            <Form>
                <Field name="name"></Field>
                <Field name="salary"></Field>
                <Field name="startDate"></Field>
                <div className='form__button_wrap'>
                    <button className='form__button' >save</button>
                    <button className='form__button' onClick={() => history.push('/waiters')}>back</button>
                </div>
            </Form>
        </Formik>

=======
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
>>>>>>> fd1afbe28dde609def8f676f575c16615a260ec0
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
