import { InputReducer } from './InputReducer';
import { CompletedReducer } from './CompletedReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	inputs: InputReducer,
	completed: CompletedReducer
});

export default rootReducer;
