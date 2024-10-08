import http from "./Http";
import AuthService from "./AuthService";
// import store from "../store";

let service = new AuthService();

class NetworkService {
  me() {
    var headers = {
      "Content-Type": "application/json",
      Authorization:
        service.userLogged().token_type +
        " " +
        service.userLogged().access_token
    };
    return http("get", null, "network", headers);
  }

  commissions() {
    var headers = {
      "Content-Type": "application/json",
      Authorization:
        service.userLogged().token_type +
        " " +
        service.userLogged().access_token
    };
    return http("get", null, "network/commissions", headers);
  }

  partners() {
    var headers = {
      "Content-Type": "application/json",
      Authorization:
        service.userLogged().token_type +
        " " +
        service.userLogged().access_token
    };
    return http("get", null, "network/partners", headers);
  }
}

export default NetworkService;
