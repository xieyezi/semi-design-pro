import React, { useMemo } from 'react'
import { LocaleProvider } from '@douyinfe/semi-ui'
import { IntlProvider } from 'react-intl'
import { BrowserRouter } from 'react-router-dom'
import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN'
import en_GB from '@douyinfe/semi-ui/lib/es/locale/source/en_GB'
import useStore from './store/common/global'
import { localeConfig } from './locales'
import RenderRouter from './router'
import './App.scss'

function App() {
	const locale = useStore((state) => state.locale)

	const getLocale = useMemo(() => {
		if (locale === 'en_GB') {
			return en_GB
		} else if (locale === 'zh_CN') {
			return zh_CN
		}
	}, [locale])

	return (
		<LocaleProvider locale={getLocale}>
			<IntlProvider locale={locale.split('_')[0]} messages={localeConfig[locale]}>
				<BrowserRouter>
					<RenderRouter />
				</BrowserRouter>
			</IntlProvider>
		</LocaleProvider>
	)
}

export default App
