import { Navigate, useLocation } from 'react-router-dom'
import * as React from 'react'
// import { getSessionStorage } from "@src/utils/storage";

export function RequireAuth({ children }: { children: JSX.Element }) {
	const location = useLocation()
	// const logged = getSessionStorage("logged");
	const logged = true
	// 为了绕过登录，初始化logged状态为true
	if (logged === null) {
		return <Navigate to="/login" state={{ from: location }} />
	}
	return children
}
