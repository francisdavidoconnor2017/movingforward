import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UpdateInputsAction } from '../actions/UpdateInputsAction';
import { UpdateCompletedAction } from '../actions/UpdateCompletedAction';
import Form from '../components/Form';

const mapStateToProps = (state, ownProps) => {
	return {
		inputs: state.inputs,
		completed: state.completed
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			updateinputs: UpdateInputsAction,
			updatecompleted: UpdateCompletedAction
		},
		dispatch
	);
};

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;
