import {
	IconHome,
	IconEdit,
	IconGridRectangle,
	IconApps,
	IconTickCircle,
	IconAlertTriangle,
	IconUser
} from '@douyinfe/semi-icons'

export interface MenuItem {
	itemKey: string
	text: string
	icon?: React.ReactNode
	path?: string
	items?: MenuItem[]
	component?: React.ComponentType<any>
}

const MENU_CONFIG: MenuItem[] = [
	{
		itemKey: '1',
		text: 'DashBoard',
		icon: IconHome,
		items: [
			{
				itemKey: '1-1',
				text: '工作台',
				path: '/dashboard/workbeach'
			},
			{
				itemKey: '1-2',
				text: '分析页',
				path: '/dashboard/anlyanis'
			},
			{
				itemKey: '1-3',
				text: '监控页',
				path: '/dashboard/monitor'
			}
		]
	},
	{
		itemKey: '2',
		text: '表单页',
		icon: IconEdit,
		items: [
			{
				itemKey: '2-1',
				text: '基础表单',
				path: '/form/basic'
			},
			{
				itemKey: '2-2',
				text: '分步表单',
				path: '/form/step'
			},
			{
				itemKey: '2-3',
				text: '高级表单',
				path: '/form/advanced'
			}
		]
	},
	{
		itemKey: '3',
		text: '列表页',
		icon: IconGridRectangle,
		items: [
			{
				itemKey: '3-1',
				text: '搜索列表',
				path: '/list/search'
			},
			{
				itemKey: '3-2',
				text: '查询表格',
				path: '/list/inquire'
			},
			{
				itemKey: '3-3',
				text: '标准列表',
				path: '/list/standard'
			},
			{
				itemKey: '3-4',
				text: '卡片列表',
				path: '/list/card'
			}
		]
	},
	{
		itemKey: '4',
		text: '详情页',
		icon: IconApps,
		items: [
			{
				itemKey: '4-1',
				text: '基础详情页',
				path: '/detail/basic'
			},
			{
				itemKey: '4-2',
				text: '高级详情页',
				path: '/detail/advanced'
			}
		]
	},
	{
		itemKey: '5',
		text: '结果页',
		icon: IconTickCircle,
		items: [
			{
				itemKey: '5-1',
				text: '成功页',
				path: '/result/success'
			},
			{
				itemKey: '5-2',
				text: '失败页',
				path: '/result/failed'
			}
		]
	},
	{
		itemKey: '6',
		text: '异常页',
		icon: IconAlertTriangle,
		items: [
			{
				itemKey: '6-1',
				text: '403',
				path: '/abnormal/403'
			},
			{
				itemKey: '6-2',
				text: '404',
				path: '/abnormal/404'
			},
			{
				itemKey: '6-3',
				text: '500',
				path: '/abnormal/500'
			}
		]
	},
	{
		itemKey: '7',
		text: '个人页',
		icon: IconUser,
		items: [
			{
				itemKey: '7-1',
				text: '个人中心',
				path: '/user/center'
			},
			{
				itemKey: '7-2',
				text: '个人设置',
				path: '/user/settings'
			}
		]
	}
]

export default MENU_CONFIG
