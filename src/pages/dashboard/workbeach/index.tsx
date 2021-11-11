import React, { useEffect, useMemo } from 'react'
import { IconPlus } from '@douyinfe/semi-icons'
import { Avatar, Descriptions, Col, Row, CardGroup, Card, Typography, List, Button } from '@douyinfe/semi-ui'
import { chinaNumChar } from '@src/common'
import echarts from '@src/common/echarts'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import { IconArrowUp, IconArrowDown } from '@douyinfe/semi-icons'
import useStore from '@src/store/dashboard/workbeach'
import { useLoading } from '@src/hooks/useLoading'
import { workbeachOption } from '@src/common/echart-option'
import './index.scss'

const { Meta } = Card
const { Text } = Typography

const Index: React.FC = () => {
	const { loading } = useLoading()
	const headerData = useStore((state) => state.headerData)
	const inProcessData = useStore((state) => state.inProcessData)
	const recentActivityData = useStore((state) => state.recentActivityData)

	const getWorkBeachData = useStore((state) => state.getWorkBeachData)

	const formatHeaderData = useMemo(() => {
		return headerData.map((e) => {
			if (e.key === '团队内排名')
				return {
					key: e.key,
					value: (
						<span>
							{e.value}
							<span style={{ fontSize: '12px', fontWeight: 'normal', paddingLeft: '5px' }}>较昨天</span>
							<IconArrowDown size="small" style={{ color: 'rgb(59,179,70)', marginLeft: '4px' }} />
							<span style={{ fontSize: '12px', color: 'rgb(59,179,70)' }}>3</span>
						</span>
					)
				}
			else if (e.key === '项目访问')
				return {
					ey: e.key,
					value: (
						<span>
							{e.value}
							<span style={{ fontSize: '12px', fontWeight: 'normal', paddingLeft: '5px' }}>较昨天</span>
							<IconArrowUp size="small" style={{ color: 'rgb(255,79,38)', marginLeft: '4px' }} />
							<span style={{ fontSize: '12px', color: 'rgb(255,79,38)' }}>43.23%</span>
						</span>
					)
				}
			return e
		})
	}, [headerData])

	useEffect(() => {
		getWorkBeachData()
	}, [])

	return (
		<div className="workbeach-container">
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
						<Descriptions data={formatHeaderData} row />
					</div>
				</div>
			</div>
			<div className="workbeach-container-content">
				<Row gutter={24}>
					<Col span={16}>
						<div className="workbeach-container-content-left1">
							<Card
								title="进行中的项目"
								className={loading ? '' : 'workbeach-container-content-left1-card'}
								bordered={false}
								loading={loading}
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

						<div className="workbeach-container-content-left2">
							<Card title="最近动态" headerExtraContent={<Text link>更多</Text>} loading={loading} bordered={false}>
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
														<span className="workbeach-container-content-left2-content-user">{item.user}</span> 在{' '}
														<a className="workbeach-container-content-left2-content-link">{item.group}</a>{' '}
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
					</Col>
					<Col span={8}>
						<div>
							<Card title="快捷导航" loading={loading}>
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
							<Card title="销售指数" style={{ marginTop: '20px' }} loading={loading}>
								<ReactEChartsCore
									echarts={echarts}
									option={workbeachOption}
									notMerge={true}
									lazyUpdate={true}
									style={{ height: 400 }}
								/>
							</Card>
							<Card title="团队" style={{ marginTop: '20px' }} loading={loading}>
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
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default Index
