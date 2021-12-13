export function setLocalStorage(key: string, value: string) {
	localStorage.setItem(key, value)
}

export function getLocalStorage(key: string) {
	return localStorage.getItem(key)
}

export function removeLocalStorage(key: string) {
	return localStorage.removeItem(key)
}

export function setSessionStorage(key: string, value: string) {
	sessionStorage.setItem(key, value)
}

export function getSessionStorage(key: string) {
	return sessionStorage.getItem(key)
}

export function removeSessionStorage(key: string) {
	return sessionStorage.removeItem(key)
}
