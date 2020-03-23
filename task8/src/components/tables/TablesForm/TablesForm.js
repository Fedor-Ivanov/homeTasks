import React from 'react'
import { connect } from 'react-redux'
import { saveTable } from '../../../store/actions/tables'
import { useHistory } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'


function TablesForm({ item, saveTable, isLoading }) {

    const history = useHistory();

    function onFormSubmit(data) {
        saveTable(data);
        history.push('/tables');
    }

    return (
        <>
            {isLoading ? "Loading..." :
                <Formik
                    initialValues={{ id: item.id, name: item.name, description: item.description, sitsCount: item.sitsCount }}
                    onSubmit={(values) => { onFormSubmit(values) }} >

                    <Form>
                        <Field name="name"></Field>
                        <Field name="description"></Field>
                        <Field name="sitsCount"></Field>
                        <div className='form__button_wrap'>
                            <button className='form__button' >save</button>
                            <button className='form__button' onClick={() => history.push('/tables')}>back</button>
                        </div>
                    </Form>
                </Formik>
            }
        </>
    )
}

function mapStateToProps({ tables }, { id }) {

    return {
        item: id !== 'new' ? tables.list.find(item => item.id === id) : { name: '', description: '', sitsCount: '' },
        isLoading: tables.isLoading,
    };

}

const mapDispatchToprops = {
    saveTable: saveTable
};

export default connect(mapStateToProps, mapDispatchToprops)(TablesForm);
