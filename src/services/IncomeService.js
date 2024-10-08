import http from "./Http";
import AuthService from "./AuthService";
// import store from "../store";

let service = new AuthService();

class IncomeService {
  list () {
    var headers = {
      "Content-Type": "application/json",
      Authorization:
        service.userLogged().token_type +
        " " +
        service.userLogged().access_token
    };
    return http("get", null, "income", headers);
  }

  save (data) {
    var headers = {
      "Content-Type": "application/json",
      Authorization:
        service.userLogged().token_type +
        " " +
        service.userLogged().access_token
    };
    return http("post", data, "income", headers);
  }
}

export default IncomeService;
