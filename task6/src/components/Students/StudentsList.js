import React from 'react';
import { connect } from 'react-redux';
import { selectHouse } from '../../store/actions/houses'
import { useRouteMatch, Link } from 'react-router-dom';


function StudentsList({ students, houses, onSelect, selected }) {
    const { url } = useRouteMatch();

    

    function setHouseColor(value) {
        switch(value) {
            case "1":
                return ( document.body.style.backgroundColor = '#d2382b' );
            case "2":
                return ( document.body.style.backgroundColor = '#105c43' );
            case "3":
                return ( document.body.style.backgroundColor = '#578ece' );
            case "4":
                return ( document.body.style.backgroundColor = '#ffd14e' );
            default:
                return ( document.body.style.backgroundColor = '#fff' );
        }
    }

    return (
        <div className='students'>
            <select value={selected} onChange={({ target }) => onSelect(target.value) && setHouseColor(target.value)}>
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
