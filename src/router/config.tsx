import React, { FC } from 'react'
import { Route } from 'react-router-dom'
import { RouteProps } from 'react-router'
import PrivateRoute from './pravateRoute'

export interface WrapperRouteProps extends RouteProps {
	/** document title id */
	titleId: string
	/** authorization？ */
	auth?: boolean
}

const WrapperRouteComponent: FC<WrapperRouteProps> = ({ titleId, auth, ...props }) => {
	const WitchRoute = auth ? PrivateRoute : Route
	if (titleId) {
		document.title = titleId
	}
	return <WitchRoute {...props} />
}

export default WrapperRouteComponent
