import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Link } from 'react-router-dom';



function GroupsList( { groups }) {

    const { url } = useRouteMatch();

    return (
        <ul>
            {groups.map(group => (
                <li
                    key={group.id}>
                    <Link to={`${url}/${group.id}`}>{group.title}</Link>
                </li>
            ))}
        </ul>
    )
}

function mapStateToProps({groups}) {
	return {
		groups: groups.groups
	};
}

const mapDispatchToProps = {
	
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupsList)