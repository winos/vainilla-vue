import http from "./Http";
import AuthService from "./AuthService";
// import store from "../store";

let service = new AuthService();

class AccountService {
  me () {
    var headers = {
      "Content-Type": "application/json",
      Authorization:
        service.userLogged().token_type +
        " " +
        service.userLogged().access_token
    };
    return http("get", null, "account", headers);
  }

  withdraw (data) {
    var headers = {
      "Content-Type": "application/json",
      Authorization:
        service.userLogged().token_type +
        " " +
        service.userLogged().access_token
    };
    return http("post", data, "withdraw", headers);
  }

  // commissions() {
  //   var headers = {
  //     "Content-Type": "application/json",
  //     Authorization:
  //       service.userLogged().token_type +
  //       " " +
  //       service.userLogged().access_token
  //   };
  //   return http("get", null, "network/commissions", headers);
  // }
}

export default AccountService;
