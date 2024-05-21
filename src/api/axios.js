import Axios from "axios";
import QS from "querystring";
import { Message } from "element-ui";
import { code as resCode } from "./contanst/resCode";

Axios.defaults.baseURL = "/dev-api";
console.log(process.env.VUE_APP_BASE_API);

Axios.defaults.withCredentials = true;
Axios.defaults.headers = {
  ...Axios.defaults.headers,
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

Axios.defaults.timeout = 10000;

function setAppEnvHeaderConfig(config = {}) {
  if (!config.headers) {
    config.headers = {};
  }
  return config;
}

function get(url, paramsObj = {}) {
  const config = setAppEnvHeaderConfig();
  return Axios.get(url, { params: paramsObj, ...config }).catch((error) => {
    return Promise.reject(error);
  });
}

function postJson(url, body) {
  return Axios.post(url, body, {
    transformRequest: [
      function (data) {
        data = JSON.stringify(data);
        return data;
      },
    ],
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
}

function post(url, body, config = {}) {
  config = setAppEnvHeaderConfig(config);
  config.headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  Axios.defaults.transformRequest = [
    function (body) {
      const data = body || {};
      if (body instanceof window.FormData) {
        return body;
      }
      return QS.stringify(data);
    },
  ];
  return new Promise((resolve, reject) => {
    Axios.post(url, body, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
Axios.interceptors.response.use(
  async (res) => {
    if (res.data.code === resCode.SUCCESS) {
      return Promise.resolve(res);
    } else {
      const message = res.data.msg || "";
      Message.error(message);
      return Promise.reject(new Error(message));
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default {
  get,
  post,
  postJson,
};
