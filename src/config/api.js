import EnvironmentConfig from './configFile'

function ConfigApi (Env) {

	var api =  {
		url : {
			endpoint: Env.api.url.endpoint,
			protocol: Env.api.url.protocol
		},
		point: function (endpoint) {
			if (endpoint) {
				return "{0}://{1}/{2}".format(api.url.protocol, api.url.endpoint, endpoint)
			} else {
				return "{0}://{1}".format(api.url.protocol, api.url.endpoint)
			}
		}
	}
	
	return  {
		host: api.url.endpoint,
		point: api.point
	}
}

export default  {API :  ConfigApi(EnvironmentConfig)}