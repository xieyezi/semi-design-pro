import React, { FC } from 'react'
import { Navigate, RouteProps, useLocation } from 'react-router'
import { RequireAuth } from '@src/router/auth'

export interface WrapperRouteProps extends RouteProps {
	/** document title id */
	titleId: string
	/** authorization？ */
	auth?: boolean
}

const WrapperRouteComponent: FC<WrapperRouteProps> = ({ titleId, auth, ...props }) => {
	const location = useLocation()
	if (titleId) {
		document.title = `${titleId}`
	}
	if (auth) {
		// 私有访问
		return location.pathname === '/' ? (
			<Navigate to={{ pathname: `/dashboard/workbeach` }} replace />
		) : (
			<RequireAuth>{props.element}</RequireAuth>
		)
	} else {
		// 公共访问
		return props.element
	}
}

export default WrapperRouteComponent