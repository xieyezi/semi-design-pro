import React, { FC, useEffect, useMemo, useState } from 'react'
import { Layout, Nav } from '@douyinfe/semi-ui'
import { IconSemiLogo } from '@douyinfe/semi-icons'
import menuList, { MenuItem } from '@src/menus/config'
import { useLocation, useNavigate } from 'react-router'
import '../../index.scss'
const { Sider } = Layout

function renderIcon(icon: any) {
	if (!icon) {
		return null
	}
	return icon.render()
}

function findMenuByPath(menus: MenuItem[], path: string, keys: any[]): any {
	for (const menu of menus) {
		if (menu.path === path) {
			return [...keys, menu.itemKey]
		}
		if (menu.items && menu.items.length > 0) {
			const result = findMenuByPath(menu.items, path, [...keys, menu.itemKey])
			if (result.length === 0) {
				continue
			}
			return result
		}
	}
	return []
}

const Index: FC = () => {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const [openKeys, setOpenKeys] = useState<string[]>([])
	const [selectedKeys, setSelectedKeys] = useState<string[]>([])

	const navList = useMemo(() => {
		return menuList.map((e) => {
			return {
				...e,
				icon: e?.icon ? renderIcon(e.icon) : null
			}
		})
	}, [menuList])

	const onSelect = (data) => {
		setSelectedKeys([...data.selectedKeys])
		navigate(data.selectedItems[0].path as string)
	}
	const onOpenChange = (data) => {
		setOpenKeys([...data.openKeys])
	}

	// setSelectedKeys 和 path 双向绑定
	useEffect(() => {
		const keys: string[] = findMenuByPath(menuList, pathname, [])
		setSelectedKeys([keys.pop() as string])
		setOpenKeys(Array.from(new Set([...openKeys, ...keys])))
	}, [pathname])

	return (
		<Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
			<Nav
				items={navList}
				openKeys={openKeys}
				selectedKeys={selectedKeys}
				onSelect={onSelect}
				onOpenChange={onOpenChange}
				style={{ maxWidth: 220, height: '100%' }}
				header={{
					logo: <IconSemiLogo style={{ fontSize: 36 }} />,
					text: 'Semi Admin'
				}}
				footer={{
					collapseButton: true
				}}
			/>
		</Sider>
	)
}

export default Index
