import http from "./Http";
import AuthService from "./AuthService";

let service = new AuthService();

class PaymentService {
  purchaseSubscription () {
    var headers = {
      "Content-Type": "application/json",
      Authorization:
        service.userLogged().token_type +
        " " +
        service.userLogged().access_token
    };
    return http("post", null, "payments/subscribe", headers);
  }
}

export default PaymentService;
