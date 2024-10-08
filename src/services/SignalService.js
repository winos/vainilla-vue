import http from "./Http";
import AuthService from "./AuthService";

let service = new AuthService();

class SignalService {
  list(type = null) {
    // Crear encabezados con el token de autorización
    var headers = {
      "Content-Type": "application/json",
      Authorization:
        service.userLogged().token_type +
        " " +
        service.userLogged().access_token,
    };

    // Construir la URL con el parámetro de consulta 'type' si se proporciona
    let url = "signals";
    if (type) {
      url += `?type=${encodeURIComponent(type)}`; // Codificar el tipo de señal en la URL
    }

    // Hacer la solicitud HTTP GET con los encabezados
    return http("get", null, url, headers);
  }
}

export default SignalService;
