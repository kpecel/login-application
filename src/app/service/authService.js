import * as httpService from "./httpService";

export function login(loginInfo) {
  return httpService
    .post("login", loginInfo)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
}
