import React, { FC } from 'react'
import { Route, Navigate } from 'react-router-dom'
import { RouteProps, useLocation } from 'react-router'
// import useStore from '@src/stores/user'

const PrivateRoute: FC<RouteProps> = (props) => {
	const location = useLocation()
	const { pathname } = location
	// const logged = useStore((state) => state.logged)
	const logged = true

	return logged ? (
		pathname === '/' ? (
			<Navigate to={{ pathname: `/dashboard/workbeach` }} replace />
		) : (
			<Route {...props} />
		)
	) : (
		<Navigate to={{ pathname: `/login${'?from=' + encodeURIComponent(location.pathname)}` }} replace />
	)
}

export default PrivateRoute
