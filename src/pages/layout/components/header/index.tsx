import React, { FC } from 'react'
import { Layout, Nav, Button, Avatar, Popover, Breadcrumb } from '@douyinfe/semi-ui'
import { IconBell, IconHelpCircle, IconMoon } from '@douyinfe/semi-icons'
import '../../index.scss'

const { Header } = Layout

const Index: FC = () => {
	const changeMode = () => {
		const body = document.body
		if (body.hasAttribute('theme-mode')) {
			body.removeAttribute('theme-mode')
			window.setMode('light')
		} else {
			body.setAttribute('theme-mode', 'dark')
			window.setMode('dark')
		}
	}
	return (
		<Header className="layout-header">
			<Nav
				mode="horizontal"
				header={
					<>
						<Breadcrumb routes={['首页', '当这个页面标题很长时需要省略', '上一页', '详情页']} />
					</>
				}
				footer={
					<>
						<Button
							theme="borderless"
							icon={<IconBell size="large" />}
							style={{
								color: 'var(--semi-color-text-2)',
								marginRight: '12px'
							}}
						/>
						<Button
							theme="borderless"
							icon={<IconHelpCircle size="large" />}
							style={{
								color: 'var(--semi-color-text-2)',
								marginRight: '12px'
							}}
						/>
						<Popover showArrow content={'切换模式'}>
							<Button
								theme="borderless"
								icon={<IconMoon size="large" />}
								style={{
									color: 'var(--semi-color-text-2)',
									marginRight: '12px'
								}}
								onClick={changeMode}
							/>
						</Popover>

						<Avatar color="orange" size="small">
							xy
						</Avatar>
					</>
				}
			></Nav>
		</Header>
	)
}

export default Index
