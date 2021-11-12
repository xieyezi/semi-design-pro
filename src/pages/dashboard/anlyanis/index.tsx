import React, { useState } from 'react'
import {
	Col,
	Row,
	Card,
	Popover,
	Descriptions,
	Progress,
	Tabs,
	TabPane,
	List,
	Typography,
	Avatar
} from '@douyinfe/semi-ui'
import { IconArrowDown, IconArrowUp, IconInfoCircle } from '@douyinfe/semi-icons'
import echarts from '@src/common/echarts'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import { anlyanisAccessOption, anlyanisPayOption, anlyanisSalesOption } from '@src/common/echart-option'
import './index.scss'

const { Item } = Descriptions
const { Title } = Typography

const listData = [
	{
		key: '龙腾路',
		value: '1,233'
	},
	{
		key: '龙腾路',
		value: '1,233'
	},
	{
		key: '龙腾路',
		value: '1,233'
	},
	{
		key: '龙腾路',
		value: '1,233'
	},
	{
		key: '龙腾路',
		value: '1,233'
	},
	{
		key: '龙腾路',
		value: '1,233'
	},
	{
		key: '龙腾路',
		value: '1,233'
	}
]

const Index: React.FC = () => {
	const [loading, setLoading] = useState(true)
	const [secondCardActiveTab, setSecondCardActiveTab] = useState('1')

	setTimeout(() => setLoading(false), 1000)

	return (
		<div className="anlyanis-container">
			<div className="anlyanis-container-top-card">
				<Row gutter={20}>
					<Col span={6}>
						<Card
							loading={loading}
							footerLine={true}
							style={{ height: 230 }}
							footer={
								<span>
									日销售额<span style={{ paddingLeft: 10 }}>¥14,786</span>
								</span>
							}
						>
							<div className="flex-between">
								<span>总销售额</span>{' '}
								<Popover position="top" showArrow content={<article>指标说明</article>}>
									<IconInfoCircle style={{ color: 'var(--semi-color-primary)' }} />
								</Popover>
							</div>
							<Descriptions row size="large">
								<Item itemKey="">¥ 1,884,450</Item>
							</Descriptions>

							<div style={{ marginTop: 15, height: 55 }}>
								{' '}
								<span>
									周同比
									<span style={{ paddingLeft: 10 }}>
										12% <IconArrowUp size="small" style={{ color: 'rgb(255,79,38)' }} />
									</span>
								</span>
								<span style={{ paddingLeft: 20 }}>
									日同比
									<span style={{ paddingLeft: 10 }}>
										11% <IconArrowDown size="small" style={{ color: 'rgb(59,179,70)' }} />
									</span>
								</span>
							</div>
						</Card>
					</Col>
					<Col span={6}>
						<Card
							style={{ height: 230 }}
							footerLine={true}
							loading={loading}
							footer={
								<span>
									日访问量<span style={{ paddingLeft: 10 }}>5,396</span>
								</span>
							}
						>
							<div className="flex-between">
								<span>访问量</span>{' '}
								<Popover position="top" showArrow content={<article>指标说明</article>}>
									<IconInfoCircle style={{ color: 'var(--semi-color-primary)' }} />
								</Popover>
							</div>
							<Descriptions row size="large">
								<Item itemKey="">9,384</Item>
							</Descriptions>
							<ReactEChartsCore
								echarts={echarts}
								option={anlyanisAccessOption}
								notMerge={true}
								lazyUpdate={true}
								style={{ height: 70 }}
							/>
						</Card>
					</Col>
					<Col span={6}>
						<Card
							footerLine={true}
							loading={loading}
							footer={
								<span>
									转化率<span style={{ paddingLeft: 10 }}>64.34%</span>
								</span>
							}
						>
							<div className="flex-between">
								<span>支付笔数</span>{' '}
								<Popover position="top" showArrow content={<article>指标说明</article>}>
									<IconInfoCircle style={{ color: 'var(--semi-color-primary)' }} />
								</Popover>
							</div>
							<Descriptions row size="large">
								<Item itemKey="">9,384</Item>
							</Descriptions>
							<ReactEChartsCore
								echarts={echarts}
								option={anlyanisPayOption}
								notMerge={true}
								lazyUpdate={true}
								style={{ height: 70 }}
							/>
						</Card>
					</Col>
					<Col span={6}>
						<Card
							footerLine={true}
							loading={loading}
							footer={
								<span>
									<span>
										周同比
										<span style={{ paddingLeft: 10 }}>
											12% <IconArrowUp size="small" style={{ color: 'rgb(255,79,38)' }} />
										</span>
									</span>
									<span style={{ paddingLeft: 20 }}>
										日同比
										<span style={{ paddingLeft: 10 }}>
											11% <IconArrowDown size="small" style={{ color: 'rgb(59,179,70)' }} />
										</span>
									</span>
								</span>
							}
						>
							<div className="flex-between">
								<span>运营活动效果</span>{' '}
								<Popover position="top" showArrow content={<article>指标说明</article>}>
									<IconInfoCircle style={{ color: 'var(--semi-color-primary)' }} />
								</Popover>
							</div>
							<Descriptions row size="large">
								<Item itemKey="">78%</Item>
							</Descriptions>
							<div style={{ marginTop: 30, height: 40 }}>
								<Progress percent={78} stroke="#fc8800" size="large" style={{ height: 12 }} />
							</div>
						</Card>
					</Col>
				</Row>
			</div>
			<div className="anlyanis-container-second-card">
				<Card
					loading={loading}
					title={
						<Tabs activeKey={secondCardActiveTab}>
							<TabPane tab="销售量" itemKey="1"></TabPane>
							<TabPane tab="访问量" itemKey="2"></TabPane>
						</Tabs>
					}
				>
					<Row>
						<Col span={16}>
							<ReactEChartsCore
								echarts={echarts}
								option={anlyanisSalesOption}
								notMerge={true}
								lazyUpdate={true}
								style={{ minHeight: 400 }}
							/>
						</Col>
						<Col span={8}>
							<List
								header={
									<div className="anlyanis-container-second-card-sales-card-header">
										<Title heading={4}>门店销售额排名</Title>
									</div>
								}
								dataSource={listData}
								renderItem={(item, index) => (
									<List.Item>
										<div className="flex-between">
											<div>
												<Avatar size="extra-extra-small" style={{ backgroundColor: index <= 2 ? '#000' : '' }}>
													{index + 1}
												</Avatar>
												<span style={{ paddingLeft: 10 }}>
													{item.key} {index} 号店
												</span>
											</div>
											<div>{item.value}</div>
										</div>
									</List.Item>
								)}
							/>
						</Col>
					</Row>
				</Card>
			</div>
		</div>
	)
}

export default Index
