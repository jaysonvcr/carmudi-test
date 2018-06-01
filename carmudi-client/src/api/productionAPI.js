import { API_CONTROLLER } from '../config/global';

const handler = (resolve, reject) => {
  return (result, evt) => {
    if (evt.type === 'exception') {
      return reject(evt);
    }
    return resolve(result);
  };
};

function getController(method, params) {
  var args = params || {};
  return function(resolve, reject) {
    API_CONTROLLER[method].apply(this, [...args, handler(resolve, reject)])
  };
}

class ProductionAPI {

  getVehicles(/*surveyCardId*/) {
    return new Promise(getController('getVehicles', arguments));
  }

  postVehicle(/*surveyCardId*/) {
    return new Promise(getController('postVehicle', arguments));
  }

}

export default ProductionAPI;
