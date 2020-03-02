import React from 'react';
import { connect } from 'react-redux';
import Student from '../Student/Student';


function StudentsList({ students }) {
    
    return (
        <ul>
            {students.map(student => (
                <Student
                    key={student.id}
                    student={student}
                />
            ))}
        </ul>
    )
}

function mapStateToProps(state) {

    console.log(state);

	return {
		students: state.students.students
	};
}

const mapDispatchToProps = {
	
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList)
