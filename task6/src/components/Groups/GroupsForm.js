import React from 'react';
import { connect } from 'react-redux';
import { saveGroup } from '../../store/actions/groups'



function GroupsForm({ item, onSave }) {
    return (
        <form>
            <input type='text' onChange={({target}) => onSave(target.value)} value={item.title} />
        </form>
    )
}

function mapStateToProps({ groups }, { id }) {


    return {
        item: id !== 'new' ? groups.groups.find(item => item.id == id) : { id: '', title: 'title' },

    };
}

const mapDispatchToprops = {
    onSave: saveGroup
};

export default connect(mapStateToProps, mapDispatchToprops)(GroupsForm);

