import { POST_VEHICLE, API_EXCEPTION } from './types';
import API from '../api/api';

export function postVehicle(data) {

  return dispatch => (
    API.postVehicle(...arguments).then(payload => dispatch({
      type: POST_VEHICLE,
      payload
    })).catch(error => dispatch({
      type: API_EXCEPTION,
      error
    }))
  );
}
