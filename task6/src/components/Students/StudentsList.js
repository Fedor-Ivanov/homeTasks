import React from 'react';
import { connect } from 'react-redux';
import { selectGroup } from '../../store/actions/groups'
import { useRouteMatch, Link } from 'react-router-dom';


function StudentsList({ students, groups, onSelect, selected }) {
    const { url } = useRouteMatch();

    return (
        <div>
            <select value={selected} onChange={({ target }) => onSelect(target.value)}>
                <option value='' >All</option>
                <option value="1">Gryffindor</option>
                <option value="2">Slytherin</option>
                <option value="3">Ravenclaw</option>
                <option value="4">Hufflepuff</option>
            </select>
            <ul>
                {students.map(student => (
                    <li key={student.id}
                        group={groups.filter((group) => { return group.id === student.groupId })}>
                        <Link to={`${url}/${student.id}`}>{student.name} {student.surname} </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function mapStateToProps({ students, groups }) {

    return {
        students:
            groups.selectedGroup == '' ? students.students : students.students.filter(item => item.groupId == groups.selectedGroup),
        groups: groups.groups,
        selected: groups.selectedGroup
    };
}

const mapDispatchToProps = {

    onSelect: selectGroup

};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList)
