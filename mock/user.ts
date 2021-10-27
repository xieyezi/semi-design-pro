import { MockMethod } from 'vite-plugin-mock'
export default [
	{
		url: '/api/login',
		method: 'post',
		timeout: 1000,
		response: (payload: { username: string; password: string; role: string }) => {
			const { username, password } = payload
			return {
				code: 200,
				data: {
					username: 'admin',
					password: 'admin',
					role: 'admin',
					token: 'ASFSjskfhjsshjfhsajkfheuisbjsfjasfs'
				}
			}
		}
	},
	{
		url: '/api/logout',
		method: 'post',
		timeout: 1000,
		response: {
			code: 200,
			data: {
				username: 'xieyezi'
			}
		}
	}
] as MockMethod[]
