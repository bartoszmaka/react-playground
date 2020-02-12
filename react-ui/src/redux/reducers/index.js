import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import appState from './appState';

export default combineReducers({
  form: formReducer,
  appState
})
