import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN'
import en_GB from '@douyinfe/semi-ui/lib/es/locale/source/en_GB'
import { LocaleProvider } from '@douyinfe/semi-ui'
import { Button, Modal } from '@douyinfe/semi-ui'
import React, { useState } from 'react'
import './App.scss'

function App() {
	const [visible, setVisible] = useState(false)
	const openMOdal = () => setVisible((val) => !val)
	return (
		<LocaleProvider locale={en_GB}>
			<div className="App">
				<p>首页</p>
				<Button onClick={openMOdal}>主要按钮</Button>
				<Modal title="基本对话框" visible={visible} onOk={openMOdal} onCancel={openMOdal}>
					This is the content of a basic modal.
					<br />
					More content...
				</Modal>
			</div>
		</LocaleProvider>
	)
}

export default App
