import { combineReducers } from 'redux';
import getVehiclesReducer from './getVehiclesReducer';
import postVehicleReducer from './postVehicleReducer';

import { RESET_STORE } from '../actions/types';

const appReducer = combineReducers({
  getVehiclesResponse: getVehiclesReducer,
  postVehicleResponse: postVehicleReducer
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
