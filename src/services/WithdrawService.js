import http from "./Http";
import AuthService from "./AuthService";
// import store from "../store";

let service = new AuthService();

class WithdrawService {
  list () {
    var headers = {
      "Content-Type": "application/json",
      Authorization:
        service.userLogged().token_type +
        " " +
        service.userLogged().access_token
    };
    return http("get", null, "withdraw", headers);
  }

  pagar (data) {
    var headers = {
      "Content-Type": "application/json",
      Authorization:
        service.userLogged().token_type +
        " " +
        service.userLogged().access_token
    };
    return http("put", data, "withdraw", headers);
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

export default WithdrawService;
