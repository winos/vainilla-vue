import http from './Http'; // Asegúrate de que la ruta sea correcta
import AuthService from './AuthService'; // Asegúrate de que la ruta sea correcta

let service = new AuthService();

class SubscriptionService {
  // Obtener plan por ID
  getById(planId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `${service.userLogged().token_type} ${service.userLogged().access_token}`,
    };
    return http('get', null, `plans/${planId}`, headers)
      .then(response => response.data)
      .catch(error => {
        console.error('Error al obtener el plan:', error);
        throw error;
      });
  }

  // Obtener todos los planes
  getPlans() {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `${service.userLogged().token_type} ${service.userLogged().access_token}`,
    };
    return http('get', null, 'plans', headers)
      .then(response => response.data)
      .catch(error => {
        console.error('Error al obtener los planes:', error);
        throw error;
      });
  }

  // Guardar una transacción
  save(data) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `${service.userLogged().token_type} ${service.userLogged().access_token}`,
    };
    return http('post', data, 'ecommerce/transaction', headers)
      .then(response => response.data)
      .catch(error => {
        console.error('Error al guardar la transacción:', error);
        throw error;
      });
  }

  // Suscribir al usuario a un plan
  subscribeMe(data) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `${service.userLogged().token_type} ${service.userLogged().access_token}`,
    };
    return http('post', data, `subscription/me/${data.plan}`, headers)
      .then(response => response.data)
      .catch(error => {
        console.error('Error al suscribir al usuario:', error);
        throw error;
      });
  }

  // Obtener la suscripción del almacenamiento local
  getSubscription() {
    return JSON.parse(localStorage.getItem('subs_plan'));
  }

  // Establecer la suscripción en el almacenamiento local
  setSubscription(subscription) {
    localStorage.setItem('subs_plan', JSON.stringify(subscription));
  }
}

export default new SubscriptionService();
