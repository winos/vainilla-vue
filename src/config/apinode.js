import EnvironmentConfig from './configFile-prod'

function ConfigApiNode (Env) {
  var api = {
		url : {
			protocol: Env.api.url.protocol,
			baseuri: Env.api.url.ioEndpoint,
			port: Env.api.url.port,
			path: Env.api.url.path,
		},
		credentials: {
			admin: {
				access_token: Env.credentials.admin.access_token
			}
		},
		host: function () {
			if (api.url.port) {
				return `${api.url.protocol}://${api.url.baseuri}:${api.url.port}/${api.url.path}`
			} 
			else {
				return `${api.url.protocol}://${api.url.baseuri}/${api.url.path}`
			}
		}
	}

	return  {
		host: api.host(),
		//point: api.point,
		credentials: api.credentials
	}
}


export default ConfigApiNode(EnvironmentConfig)
