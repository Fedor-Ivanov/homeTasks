import React from 'react';
import { connect } from 'react-redux';
import Group from '../Group/Group';


function GroupsList( { groups }) {
    return (
        <ul>
            {groups.map(group => (
                <Group
                    key={group.id}
                    group={group}
                />
            ))}
        </ul>
    )
}

function mapStateToProps(state) {
	return {
		groups: state.groups.groups
	};
}

const mapDispatchToProps = {
	
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupsList)