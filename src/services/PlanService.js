import http from "./Http";
import AuthService from "./AuthService";

let service = new AuthService();

class PlanService {
  list () {
    var headers = {
      "Content-Type": "application/json",
      Authorization:
        service.userLogged().token_type +
        " " +
        service.userLogged().access_token
    };
    return http("get", null, "plans", headers);
  }
}

export default PlanService;
