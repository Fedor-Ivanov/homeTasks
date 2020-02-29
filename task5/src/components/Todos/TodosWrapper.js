import { connect } from 'react-redux';
import Todos from './Todos';
import { toggleModal, createTodo, onValueChange } from '../../store/actions';

function mapStateToProps(state) {
    return {
        todoList: state.todoList,
        modal: state.modal,
        newTodo: state.newTodo
    };
}

const mapDispathToProps = {
    toggleModal: toggleModal,
    createTodo: createTodo,
    onValueChange: onValueChange
};

export default connect(mapStateToProps, mapDispathToProps)(Todos);

