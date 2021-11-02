import React, { FC } from 'react'
import { Layout, Nav, Button, Avatar, Badge, Dropdown, RadioGroup, Radio } from '@douyinfe/semi-ui'
import { IconBell, IconHelpCircle } from '@douyinfe/semi-icons'
import Breadcrumb from '../breadcrumb'
import useStore from '@src/store/common/global'
import '../../index.scss'

const { Header } = Layout

const Index: FC = () => {
	const locale = useStore((state) => state.locale)
	const changeLocale = useStore((state) => state.changeLocale)

	const question = () => {
		window.open('https://github.com/xieyezi/semi-design-pro/issues')
	}
	return (
		<Header className="layout-header">
			<Nav
				mode="horizontal"
				header={<Breadcrumb />}
				footer={
					<>
						<Button
							theme="borderless"
							icon={<IconHelpCircle size="large" />}
							style={{
								color: 'var(--semi-color-text-2)',
								marginRight: '12px'
							}}
							onClick={question}
						/>
						<Badge count={5} type="danger">
							<Button
								theme="borderless"
								icon={<IconBell size="large" />}
								style={{
									color: 'var(--semi-color-text-2)',
									marginRight: '12px'
								}}
							/>
						</Badge>

						<Dropdown
							render={
								<Dropdown.Menu>
									<Dropdown.Item>个人中心</Dropdown.Item>
									<Dropdown.Item>个人设置</Dropdown.Item>
									<Dropdown.Item>退出登录</Dropdown.Item>
								</Dropdown.Menu>
							}
						>
							<Avatar color="orange" size="small">
								semi
							</Avatar>
						</Dropdown>

						<RadioGroup type="button" buttonSize="large" defaultValue={'chinese'} style={{ marginLeft: '20px' }}>
							<Radio value={'chinese'} onChange={() => changeLocale('zh_CN')}>
								中文
							</Radio>
							<Radio value={'english'} onChange={() => changeLocale('en_GB')}>
								EN
							</Radio>
						</RadioGroup>
					</>
				}
			></Nav>
		</Header>
	)
}

export default Index
