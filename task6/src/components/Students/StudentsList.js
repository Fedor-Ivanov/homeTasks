import React from 'react';
import { connect } from 'react-redux';
import { selectHouse } from '../../store/actions/houses'
import { useRouteMatch, Link } from 'react-router-dom';


function StudentsList({ students, houses, onSelect, selected }) {
    const { url } = useRouteMatch();

    return (
        <div>
            <select value={selected} onChange={({ target }) => onSelect(target.value)}>
                <option value='' >All</option>

                {houses.map(house => {
                    return <option key={house.id} value={house.id} >{house.title}</option>
                })}

            </select>
            <ul>
                {students.map(student => (
                    <li key={student.id}
                        house={houses.filter((house) => { return house.id === student.groupId })}>
                        <Link to={`${url}/${student.id}`}>{student.name} {student.surname} </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function mapStateToProps({ students, houses }) {

    return {
        students:
            houses.selectedHouse == '' ? students.students : students.students.filter(item => item.groupId == houses.selectedHouse),
        houses: houses.houses,
        selected: houses.selectedHouse
    };
}

const mapDispatchToProps = {

    onSelect: selectHouse

};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList)
