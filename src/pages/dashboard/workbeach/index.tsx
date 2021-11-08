import React from 'react'
import { IconPlus } from '@douyinfe/semi-icons'
import { Avatar, Descriptions, Col, Row, CardGroup, Card, Typography, List, Button } from '@douyinfe/semi-ui'
import { chinaNumChar } from '@src/common'
import echarts from '@src/common/echarts'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import './index.scss'

const { Meta } = Card
const { Text } = Typography
const data = [
	{ key: '项目数', value: '99' },
	{
		key: '团队内排名',
		value: '25/78'
	},
	{ key: '项目访问', value: '2233' }
]

const inProcessData = [
	{
		title: 'Vue',
		icon: 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
		description: '那是一种内在的东西，他们到达不了，也无法触及的',
		group: '科学搬砖组',
		time: '几秒前'
	},
	{
		title: 'Angular',
		icon: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
		description: '希望是一个好东西，是最好的，好东西是不会消亡的',
		group: '全组都是吴彦祖',
		time: '1年前'
	},
	{
		title: 'Semi Design',
		icon: 'https://lf9-static.semi.design/obj/semi-tos/images/5c4bb380-3245-11ec-ab65-77a60c02a0b5.svg',
		description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
		group: '中二少女团',
		time: '几秒前'
	},
	{
		title: 'WebPack',
		icon: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
		description: '凛冬将至',
		group: '高逼格设计天团',
		time: '3月前'
	},
	{
		title: 'Bootstrap',
		icon: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
		description: '那时候我只会想自己想要什么，从不想自己拥有什么',
		group: '程序员日常',
		time: '1年前'
	},
	{
		title: 'React',
		icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
		description: '生命就像一盒巧克力，结果往往出人意料',
		group: '学计算机',
		time: '2年前'
	}
]

const motion = [
	{
		user: '曲丽丽',
		group: '高逼格设计天团',
		action: '新建项目',
		project: '六月迭代',
		color: 'purple'
	},
	{
		user: '付芳芳',
		group: '高逼格设计天团',
		action: '新建项目',
		project: '六月迭代',
		color: 'blue'
	},
	{
		user: '林东东',
		group: '高逼格设计天团',
		action: '新建项目',
		project: '六月迭代',
		color: 'cyan'
	},
	{
		user: '苏小小',
		group: '5月日常迭代',
		action: '更新至已发布状态',
		project: '',
		color: 'orange'
	},
	{
		user: '朱偏右',
		group: '工程效能',
		action: '发布了',
		project: '留言',
		color: 'amber'
	},
	{
		user: '赵大大',
		group: '工程效能',
		action: '发布了',
		project: '留言',
		color: 'red'
	},
	{
		user: '李冰冰',
		group: '工程效能',
		action: '发布了',
		project: '留言',
		color: 'light-green'
	}
]

const option = {
	radar: {
		shape: 'circle',
		indicator: [
			{ name: 'Sales', max: 6500 },
			{ name: 'Administration', max: 16000 },
			{ name: 'Information Technology', max: 30000 },
			{ name: 'Customer Support', max: 38000 },
			{ name: 'Development', max: 52000 },
			{ name: 'Marketing', max: 25000 }
		]
	},
	series: [
		{
			name: 'Budget vs spending',
			type: 'radar',
			data: [
				{
					value: [4200, 3000, 20000, 35000, 50000, 18000],
					name: 'Allocated Budget'
				},
				{
					value: [5000, 14000, 28000, 26000, 42000, 21000],
					name: 'Actual Spending'
				}
			]
		}
	]
}

const Index: React.FC = () => {
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
						<Descriptions data={data} row />
					</div>
				</div>
			</div>
			<div className="workbeach-container-content">
				<Row gutter={24}>
					<Col span={16}>
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
						<div className="workbeach-container-content-left2">
							<Card title="最近动态" headerExtraContent={<Text link>更多</Text>} bordered={false}>
								<List
									size="large"
									dataSource={motion}
									renderItem={(item) => (
										<List.Item
											header={<Avatar color={item.color}>{item.user.substring(1)}</Avatar>}
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
						</div>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default Index
