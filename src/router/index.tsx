import React, { lazy, FC } from 'react'
import { RouteObject } from 'react-router'
import { useRoutes } from 'react-router-dom'
import { WrapperRouteComponent, WrapperRouteWithOutLayoutComponent } from './config'
import LoginPage from '@pages/login'
import LayoutPage from '@pages/layout'
import Empty from '@components/empty'

const DashboardWorkbeach = lazy(() => import('@src/pages/dashboard/workbeach'))
const DashboardAnlyanis = lazy(() => import('@src/pages/dashboard/anlyanis'))
const DashboardMonitor = lazy(() => import('@src/pages/dashboard/monitor'))

const FormBasic = lazy(() => import('@src/pages/form/basic'))
const FormStep = lazy(() => import('@src/pages/form/step'))
const FormAdvanced = lazy(() => import('@src/pages/form/advanced'))

const ListSearch = lazy(() => import('@src/pages/list/search'))
const ListInquire = lazy(() => import('@src/pages/list/inquire'))
const ListStandard = lazy(() => import('@src/pages/list/standard'))
const ListCard = lazy(() => import('@src/pages/list/card'))

const DetailBasic = lazy(() => import('@src/pages/detail/basic'))
const DetailAdvanced = lazy(() => import('@src/pages/detail/advanced'))

const ResultSuccess = lazy(() => import('@src/pages/result/success'))
const ResultFailed = lazy(() => import('@src/pages/result/failed'))

const Abnormal403 = lazy(() => import('@src/pages/abnormal/403'))
const Abnormal404 = lazy(() => import('@src/pages/abnormal/404'))
const Abnormal500 = lazy(() => import('@src/pages/abnormal/500'))

const UserCenter = lazy(() => import('@src/pages/user/center'))
const UserSettings = lazy(() => import('@src/pages/user/settings'))

const routeList: RouteObject[] = [
	{
		path: '/',
		element: <WrapperRouteComponent element={<LayoutPage />} titleId="" auth />,
		children: [
			{
				path: 'dashboard/workbeach',
				element: <WrapperRouteComponent element={<DashboardWorkbeach />} titleId="工作台" auth />
			},
			{
				path: 'dashboard/anlyanis',
				element: <WrapperRouteComponent element={<DashboardAnlyanis />} titleId="分析页" auth />
			},
			{
				path: 'dashboard/monitor',
				element: <WrapperRouteComponent element={<DashboardMonitor />} titleId="监控页" auth />
			},
			{
				path: 'form/basic',
				element: <WrapperRouteComponent element={<FormBasic />} titleId="基础表单页" auth />
			},
			{
				path: 'form/step',
				element: <WrapperRouteComponent element={<FormStep />} titleId="分步表单页" auth />
			},
			{
				path: 'form/advanced',
				element: <WrapperRouteComponent element={<FormAdvanced />} titleId="高级表单页" auth />
			},
			{
				path: 'list/search',
				element: <WrapperRouteComponent element={<ListSearch />} titleId="搜索列表页" auth />
			},
			{
				path: 'list/inquire',
				element: <WrapperRouteComponent element={<ListInquire />} titleId="查询表格页" auth />
			},
			{
				path: 'list/standard',
				element: <WrapperRouteComponent element={<ListStandard />} titleId="标准列表页" auth />
			},
			{
				path: 'list/card',
				element: <WrapperRouteComponent element={<ListCard />} titleId="卡片列表页" auth />
			},
			{
				path: 'detail/basic',
				element: <WrapperRouteComponent element={<DetailBasic />} titleId="基础详情页" auth />
			},
			{
				path: 'detail/advanced',
				element: <WrapperRouteComponent element={<DetailAdvanced />} titleId="高级详情页" auth />
			},
			{
				path: 'result/success',
				element: <WrapperRouteComponent element={<ResultSuccess />} titleId="结果成功页" auth />
			},
			{
				path: 'result/failed',
				element: <WrapperRouteComponent element={<ResultFailed />} titleId="结果失败页" auth />
			},

			{
				path: 'abnormal/403',
				element: <WrapperRouteComponent element={<Abnormal403 />} titleId="403" auth />
			},
			{
				path: 'abnormal/404',
				element: <WrapperRouteComponent element={<Abnormal404 />} titleId="404" auth />
			},
			{
				path: 'abnormal/500',
				element: <WrapperRouteComponent element={<Abnormal500 />} titleId="500" auth />
			},
			{
				path: 'user/center',
				element: <WrapperRouteComponent element={<UserCenter />} titleId="用户中心页" auth />
			},
			{
				path: 'user/settings',
				element: <WrapperRouteComponent element={<UserSettings />} titleId="用户设置页" auth />
			}
		]
	},
	{
		path: 'login',
		element: <WrapperRouteWithOutLayoutComponent element={<LoginPage />} titleId="登录" />
	},
	{
		path: '*',
		element: (
			<WrapperRouteWithOutLayoutComponent
				element={<Empty title="找不到咯" description="这里什么也没有~" type="404" />}
				titleId="404"
			/>
		)
	}
]

const RenderRouter: FC = () => {
	const element = useRoutes(routeList)
	return element
}

export default RenderRouter
