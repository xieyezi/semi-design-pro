import React, { lazy, FC } from 'react'
import { PartialRouteObject } from 'react-router'
import { useRoutes } from 'react-router-dom'
import WrapperRouteComponent from './config'
import LoginPage from '@pages/login'
import LayoutPage from '@pages/layout'

const Form = lazy(() => import('@pages/form'))
const Detail = lazy(() => import('@pages/detail'))
const Result = lazy(() => import('@pages/result'))
const User = lazy(() => import('@pages/user'))
const List = lazy(() => import('@pages/list'))
const NotFound = lazy(() => import('@pages/not-found'))

const routeList: PartialRouteObject[] = [
	{
		path: '/login',
		element: <WrapperRouteComponent element={<LoginPage />} titleId="登录" />
	},
	{
		path: '/',
		element: <WrapperRouteComponent element={<LayoutPage />} titleId="" auth />,
		children: [
			{
				path: 'form',
				element: <WrapperRouteComponent element={<Form />} titleId="表单页" auth />
			},
			{
				path: 'detail',
				element: <WrapperRouteComponent element={<Detail />} titleId="详情页" auth />
			},
			{
				path: 'result',
				element: <WrapperRouteComponent element={<Result />} titleId="结果页" auth />
			},
			{
				path: 'user',
				element: <WrapperRouteComponent element={<User />} titleId="用户页" auth />
			},
			{
				path: 'list',
				element: <WrapperRouteComponent element={<List />} titleId="列表页" auth />
			},
			{
				path: '*',
				element: <WrapperRouteComponent element={<NotFound />} titleId="404" />
			}
		]
	}
]

const RenderRouter: FC = () => {
	const element = useRoutes(routeList)
	return element
}

export default RenderRouter
