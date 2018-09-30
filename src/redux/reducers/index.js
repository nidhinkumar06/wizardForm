import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';

const rootReducer = combineReducers({
  form: reducerForm
});

export default rootReducer;
