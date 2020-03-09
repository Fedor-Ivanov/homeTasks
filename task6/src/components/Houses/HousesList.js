import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Link } from 'react-router-dom';



function HousesList( { houses }) {

    const { url } = useRouteMatch();

    return (
        <div className='houses'>
            <ul>
                {houses.map(house => (
                    <li
                        key={house.id}>
                        <Link to={`${url}/${house.id}`}>{house.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
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