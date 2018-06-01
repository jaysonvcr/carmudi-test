import { API_CONTROLLER } from '../config/global';

const MockURL = 'http://carmudiserver.test';

function getData(res) {
  return res.json();
}

class MockAPI {

  getVehicles() {
    return fetch(`${MockURL}/vehicles`).then(getData);
  }

  postVehicle(data) {
    return new Promise(function(resolve, reject){
      fetch(`${MockURL}/vehicle`, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          data: data
      }).then(
          (response) => response.json()
      ).then((res) => {
          resolve(res);
      }).catch((error) => {
          reject(error);
      });
    });
  }

}

export default MockAPI;
