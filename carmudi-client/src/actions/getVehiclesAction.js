import { GET_VEHICLES, API_EXCEPTION } from './types';
import API from '../api/api';

export function getVehicles() {
  return dispatch => (
    API.getVehicles(...arguments).then(payload => dispatch({
      type: GET_VEHICLES,
      payload
    })).catch(error => dispatch({
      type: API_EXCEPTION,
      error
    }))
  );
}
