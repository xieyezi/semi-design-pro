import { MockMethod } from 'vite-plugin-mock'

const headerData = [
	{ key: '项目数', value: '99' },
	{
		key: '团队内排名',
		value: ' 25/78'
	},
	{
		key: '项目访问',
		value: '2233'
	}
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

const recentActivityData = [
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

export default [
	{
		url: '/api/workbeach',
		method: 'get',
		timeout: 500,
		response: () => {
			return {
				code: 200,
				data: {
					headerData,
					inProcessData,
					recentActivityData
				}
			}
		}
	}
] as MockMethod[]

export type headerDataType = typeof headerData
export type inProcessDataType = typeof inProcessData
export type recentActivityDataType = typeof recentActivityData
