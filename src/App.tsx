import React from 'react'
import { LocaleProvider } from '@douyinfe/semi-ui'
import { BrowserRouter } from 'react-router-dom'
import RenderRouter from './router'
import useStore from './store/common/global'
import './App.scss'

function App() {
	const locale = useStore((state) => state.locale)
	return (
		<LocaleProvider locale={locale}>
			<BrowserRouter>
				<RenderRouter />
			</BrowserRouter>
		</LocaleProvider>
	)
}

export default App
