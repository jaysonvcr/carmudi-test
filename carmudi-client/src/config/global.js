// export let API_URL = "http://localhost:3001";
export let API_URL = "http://carmudiserver.test";

export let APP_NAMESPACE = "CARMUDIEXAM";

export let RESOURCE_URL = "/";
export let SESSION_ID = "";
export let API_CONTROLLER = {};

class GlobalUtils {

  setAPIURL(val) {
    if (val) {
      API_URL = val;
    }
  }

  setNamespace(val) {
    if (val) {
      APP_NAMESPACE = val;
    }
  }

  setSession(val) {
    if (val) {
      SESSION_ID = val;
    }
  }

  setResource(val) {
    if (val) {
      RESOURCE_URL = val;
    }
  }

  setController(val) {
    if (val) {
      API_CONTROLLER = val;
    }
  }
}

export default GlobalUtils;
