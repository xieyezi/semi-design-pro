import React, { Suspense, useEffect, useState } from 'react'
import { Layout, Spin } from '@douyinfe/semi-ui'
import Header from './components/header'
import Sider from './components/sider'
import Footer from './components/footer'
import { Outlet } from 'react-router-dom'
import SuspendFallbackLoading from '@src/components/fallback-loading'
import globalStore from '@src/store/common/global'
import './index.scss'

const { Content } = Layout

const Index: React.FC = () => {
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		globalStore.subscribe((state) => setLoading(state.loading))
		return () => {
			globalStore.destroy()
		}
	}, [])

	return (
		<Layout className="layout-page">
			<Sider />
			<Layout>
				<Header />
				<Content className="layout-content">
					<Suspense fallback={<SuspendFallbackLoading message="正在加载中" />}>
						<Spin spinning={loading} wrapperClassName="layout-data-loading" tip="正在加载中">
							<Outlet />
						</Spin>
					</Suspense>
				</Content>
				<Footer />
			</Layout>
		</Layout>
	)
}

export default Index
