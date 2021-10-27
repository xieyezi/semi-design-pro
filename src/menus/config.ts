import { IconHome, IconComponent } from '@douyinfe/semi-icons'

export interface MenuItem {
	key: string
	title: string
	icon?: React.ReactNode
	path?: string
	children?: MenuItem[]
	component?: React.ComponentType<any>
}

const MENU_CONFIG: MenuItem[] = [
	{
		key: '1',
		title: '工作台',
		icon: IconHome,
		path: '/dashboard'
	},
	{
		key: '2',
		title: '页面',
		icon: IconComponent,
		children: [
			{
				key: '2-1',
				title: '表单页',
				path: '/form'
			},
			{
				key: '2-2',
				title: '详情页',
				path: '/detail'
			},
			{
				key: '2-3',
				title: '结果页',
				path: '/result'
			},
			{
				key: '2-4',
				title: '个人页',
				path: '/user'
			},
			{
				key: '2-5',
				title: '异常页',
				path: '/404'
			},
			{
				key: '2-6',
				title: '列表页',
				path: '/list'
			}
		]
	}
]

export default MENU_CONFIG
