import React from 'react'
import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN'
import { LocaleProvider } from '@douyinfe/semi-ui'
import { BrowserRouter } from 'react-router-dom'
import RenderRouter from './router'
import './App.scss'

function App() {
	return (
		<LocaleProvider locale={zh_CN}>
			<BrowserRouter>
				<RenderRouter />
			</BrowserRouter>
		</LocaleProvider>
	)
}

export default App
