import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Link } from 'react-router-dom';



function HousesList( { houses }) {

    const { url } = useRouteMatch();

    return (
        <ul>
            {houses.map(house => (
                <li
                    key={house.id}>
                    <Link to={`${url}/${house.id}`}>{house.title}</Link>
                </li>
            ))}
        </ul>
    )
}

function mapStateToProps({houses}) {
	return {
		houses: houses.houses
	};
}

const mapDispatchToProps = {
	
};

export default connect(mapStateToProps, mapDispatchToProps)(HousesList)