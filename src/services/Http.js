"use strict";

import axios from "axios";
import api from '../config/apinode';

function config(headers) {
  return axios.create({
    baseURL: api.host,
    headers: headers
  });
}

function RequestService ($http) {
  function request(method, params, url, headers) {
    switch (method) {
      case "post":
        var requestAxios = config(headers);
        return requestAxios.post(url, params); 
      break;

      case 'put':
        var requestAxios = config(headers);
        return requestAxios.put(url, params); 
      break

      case "get":
        var requestAxios = config(headers);
        return requestAxios.get(url, params);
      break;

      // case 'delete':
      //   return $http({method:'DELETE', headers: headers, data:params, url:url})
      // break

      default:
        throw {error: 'Can not find method'}
    }
  }

  return  request
}

export default RequestService(axios);