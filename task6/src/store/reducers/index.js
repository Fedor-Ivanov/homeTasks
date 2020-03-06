import { combineReducers } from 'redux';
import houses from './houses';
import students from './students';

export default combineReducers({
    houses: houses,
    students: students
});