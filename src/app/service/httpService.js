import axios from "axios";
import appConfig from "../../config/appConfig";

const API_BASE_URL = appConfig.apiBaseUrl;

const setHeader = (config) => {
  return axios(
    Object.assign(config, {
      headers: {
        ...config.headers,
      },
    })
  );
};

export function get(resourceName, params = {}, headers = {}) {
  let config = {
    method: "get",
    url: `${API_BASE_URL}/${resourceName}`,
    params: params,
    headers,
  };
  return setHeader(config);
}

export function post(resourceName, data) {
  let config = {
    method: "post",
    url: `${API_BASE_URL}/${resourceName}`,
    data: data,
  };
  return setHeader(config);
}
