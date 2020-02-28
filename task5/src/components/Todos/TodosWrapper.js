import { connect } from 'react-redux';
import Todos from './Todos';
import { toggleModal } from '../../store/actions';

function mapStateToProps(state) {
    return {
        todoList: state.todoList,
        modal: state.modal
    };
}

const mapDispathToProps = {
    toggleModal: toggleModal
};

export default connect(mapStateToProps, mapDispathToProps)(Todos);
