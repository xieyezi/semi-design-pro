import systemConfig from '@src/config'
import axios, { AxiosRequestConfig } from 'axios'
import { errorMsg, handleCommonError, handleNoCommontError } from './errorHandle'
import qs from 'qs'
import { getLocalStorage } from '../storage'
import { getState } from '@src/store/common/global'

type requestOptions = AxiosRequestConfig & {
	url: string
	noLoading?: boolean
	body?: any
	headers?: any
}

const { apiPrefix, authKey } = systemConfig
const baseUrl = import.meta.env.VITE_BASE_API
const basePrefix = import.meta.env.MODE === 'development' ? apiPrefix : ''
const { toogleLoading } = getState()

// 拦截器
axios.interceptors.response.use(
	// 响应拦截
	(response: any) => {
		toogleLoading(false)
		return response.data
	},
	// 错误拦截
	(error) => {
		const { response } = error
		toogleLoading(false)
		// 请求有响应
		if (response) {
			const { status, data, config } = response
			const { message } = data
			if (status === 400 || status === 401) {
				handleCommonError(data, config)
				return Promise.reject(message)
			}
			handleNoCommontError(errorMsg)
			return Promise.reject(errorMsg)
		}
		// 请求超时
		if (error.code === 408) {
			const timeoutMsg = '请求超时，请稍后再试'
			handleNoCommontError(timeoutMsg)
			return Promise.reject(timeoutMsg)
		}
		const networkErrorMsg = '您的网络出现问题，请检查网络重试'
		handleNoCommontError(networkErrorMsg)
		return Promise.reject(networkErrorMsg)
	}
)

// request
export default async function request(options: requestOptions) {
	const { url } = options
	delete options.url

	const Authorization = getLocalStorage(authKey)
	let headers = {}
	if (options) {
		headers = options.headers || {}
	}
	if (Authorization) {
		headers[authKey] = `JWT ${Authorization}`
	}
	const defaultOptions = {
		headers: {
			...headers
		},
		credentials: 'include',
		timeout: 10000,
		withCredentials: true,
		validateStatus(status: any) {
			return status >= 200 && status < 300
		}
	}
	if (options) {
		delete options.headers
	}
	const newOptions: requestOptions = { ...defaultOptions, ...options }

	newOptions.data = newOptions.body
	if (newOptions.method === 'get') {
		newOptions.paramsSerializer = (params) => {
			return qs.stringify(params, { arrayFormat: 'repeat' })
		}
	}
	delete newOptions.body
	toogleLoading(true)
	const newUrl = (basePrefix || baseUrl) + url

	return axios(newUrl, newOptions)
}
