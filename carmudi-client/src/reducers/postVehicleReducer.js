import { POST_VEHICLE } from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case POST_VEHICLE:
      return {...action.payload};
    default:
      return state;
  }
}
