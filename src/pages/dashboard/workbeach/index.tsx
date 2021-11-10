import React, { useEffect } from 'react'
import { IconPlus } from '@douyinfe/semi-icons'
import { Avatar, Descriptions, Col, Row, CardGroup, Card, Typography, List, Button } from '@douyinfe/semi-ui'
import { chinaNumChar } from '@src/common'
import echarts from '@src/common/echarts'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import { IconArrowUp, IconArrowDown } from '@douyinfe/semi-icons'
import { Animated } from 'react-animated-css'
import useStore from '@src/store/dashboard/workbeach'
import './index.scss'

const { Meta } = Card
const { Text } = Typography

const option = {
	color: ['#67e0e3', '#ffc0cb', '#b6a2de'],
	legend: {
		bottom: 0,
		data: ['个人', '团队', '部门']
	},
	radar: {
		shape: 'circle',
		indicator: [
			{ name: '热度', max: 6500 },
			{ name: '口碑', max: 16000 },
			{ name: '产量', max: 30000 },
			{ name: '贡献', max: 38000 }
		]
	},
	series: [
		{
			type: 'radar',
			symbolSize: 0,
			areaStyle: {
				shadowBlur: 0,
				shadowColor: 'rgba(0,0,0,.2)',
				shadowOffsetX: 0,
				shadowOffsetY: 10,
				opacity: 1
			},
			data: [
				{
					value: [4200, 3000, 20000, 35000, 50000, 18000],
					name: '个人'
				},
				{
					value: [5000, 14000, 28000, 26000, 42000, 21000],
					name: '团队'
				},
				{
					value: [4000, 15000, 22000, 17000, 36000, 29000],
					name: '部门'
				}
			]
		}
	]
}

const Index: React.FC = () => {
	const headerData = useStore((state) => state.headerData)
	const inProcessData = useStore((state) => state.inProcessData)
	const recentActivityData = useStore((state) => state.recentActivityData)

	const getWorkBeachData = useStore((state) => state.getWorkBeachData)

	useEffect(() => {
		getWorkBeachData()
	}, [])

	return (
		<div className="workbeach-container">
			<Animated
				animationIn="slideInDown"
				animationOut="fadeOut"
				animationInDuration={1000}
				animationOutDuration={1000}
				isVisible={true}
			>
				<div className="workbeach-container-header">
					<div className="workbeach-container-header-title">工作台</div>
					<div className="workbeach-container-header-content">
						<div className="workbeach-container-header-content-left">
							<Avatar
								src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/avatarDemo.jpeg"
								style={{ margin: 4 }}
								size="large"
							/>
							<div className="workbeach-container-header-content-left-user">
								<p className="workbeach-container-header-content-left-username">早安，胡歌，祝你开心每一天！</p>
								<p className="workbeach-container-header-content-left-user-profile">
									前端专家 | 字节跳动－某某某事业群－某某平台部
								</p>
							</div>
						</div>
						<div className="workbeach-container-header-content-right">
							<Descriptions data={headerData} row />
						</div>
					</div>
				</div>
			</Animated>
			<div className="workbeach-container-content">
				<Row gutter={24}>
					<Col span={16}>
						<Animated
							animationIn="slideInUp"
							animationOut="fadeOut"
							animationInDuration={800}
							animationOutDuration={500}
							isVisible={true}
						>
							<div className="workbeach-container-content-left1">
								<Card
									title="进行中的项目"
									className="workbeach-container-content-left1-card"
									bordered={false}
									headerExtraContent={<Text link>全部项目</Text>}
								>
									<CardGroup type="grid">
										{inProcessData.map((v, idx) => (
											<Card
												key={idx}
												shadows="hover"
												headerLine={false}
												className="workbeach-container-content-left1-card-item"
												title={<Meta title={v.title} avatar={<Avatar size="default" src={v.icon} />} />}
												footer={
													<div className="workbeach-container-content-left1-card-item-footer">
														<span>{v.group}</span>
														<span>{v.time}</span>
													</div>
												}
											>
												{v.description}
											</Card>
										))}
									</CardGroup>
								</Card>
							</div>
						</Animated>
						<Animated
							animationIn="slideInUp"
							animationOut="fadeOut"
							animationInDuration={800}
							animationOutDuration={500}
							isVisible={true}
						>
							<div className="workbeach-container-content-left2">
								<Card title="最近动态" headerExtraContent={<Text link>更多</Text>} bordered={false}>
									<List
										size="default"
										dataSource={recentActivityData}
										renderItem={(item) => (
											<List.Item
												header={
													<Avatar size="default" color={item.color}>
														{item.user.substring(1)}
													</Avatar>
												}
												main={
													<>
														<div className="workbeach-container-content-left2-content">
															{' '}
															<span className="workbeach-container-content-left2-content-user">
																{item.user}
															</span> 在 <a className="workbeach-container-content-left2-content-link">{item.group}</a>{' '}
															<span>{item.action}</span>{' '}
															<a className="workbeach-container-content-left2-content-link">{item.project}</a>
														</div>
														{'7分钟前'}
													</>
												}
											/>
										)}
									/>
								</Card>
							</div>
						</Animated>
					</Col>
					<Col span={8}>
						<Animated
							animationIn="slideInUp"
							animationOut="fadeOut"
							animationInDuration={800}
							animationOutDuration={500}
							isVisible={true}
						>
							<div>
								<Card title="快捷导航">
									<Row>
										{new Array(6).fill(null).map((_, index) => (
											<Col span={6} key={index}>
												<Button type="tertiary" theme="borderless">
													操作{chinaNumChar[index + 1]}
												</Button>
											</Col>
										))}
										<Button icon={<IconPlus />}>添加</Button>
									</Row>
								</Card>
								<Card title="销售指数" style={{ marginTop: '20px' }}>
									<ReactEChartsCore
										echarts={echarts}
										option={option}
										notMerge={true}
										lazyUpdate={true}
										style={{ height: '400px' }}
									/>
								</Card>
								<Card title="团队" style={{ marginTop: '20px' }}>
									<Row>
										{inProcessData.map((e) => {
											return (
												<Col span={12} key={e.group}>
													<div style={{ cursor: 'pointer' }}>
														<Avatar size="extra-small" src={e.icon} style={{ margin: 15 }} />
														{e.group}
													</div>
												</Col>
											)
										})}
									</Row>
								</Card>
							</div>
						</Animated>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default Index
