import React, { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { RouteProps, useLocation, useNavigate } from 'react-router'
import { Empty, Button } from '@douyinfe/semi-ui'
import { IllustrationNoAccess } from '@douyinfe/semi-illustrations'
// import useStore from '@src/stores/user'

const PrivateRoute: FC<RouteProps> = (props) => {
	const navigate = useNavigate()
	const location = useLocation()
	const { pathname } = location
	// const logged = useStore((state) => state.logged)
	const logged = true // 这里做登录验证

	return logged ? (
		pathname === '/' ? (
			<Navigate to={{ pathname: `/dashboard/workbeach` }} replace />
		) : (
			props.element
		)
	) : (
		<Empty
			image={<IllustrationNoAccess style={{ width: 150, height: 150 }} />}
			title={'没有权限'}
			description="您还没有登录，请先去登录"
			style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
		>
			<Button
				style={{ padding: '6px 24px', width: ' 180px' }}
				theme="solid"
				type="primary"
				onClick={() => navigate(`/login${'?from=' + encodeURIComponent(location.pathname)}`, { replace: true })}
			>
				去登录
			</Button>
		</Empty>
	)
}

export default PrivateRoute
