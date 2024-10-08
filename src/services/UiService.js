import http from "./Http";
import AuthService from "./AuthService";
// import store from "../store";

let service = new AuthService();

class UiService {
  list () {
    var headers = {
      "Content-Type": "application/json",
      Authorization:
        service.userLogged().token_type +
        " " +
        service.userLogged().access_token
    };
    return http("get", null, "ui/dashboard", headers);
  }
}

export default UiService;
