import create from 'zustand'
import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN'
import en_GB from '@douyinfe/semi-ui/lib/es/locale/source/en_GB'

export interface GlobalState {
	locale: Locale | any
	loading: boolean
	toogleLoading: (val: boolean) => void
	changeLocale: (val: 'zh_CN' | 'en_GB') => void
}

const store = create<GlobalState>((set, get) => ({
	locale: zh_CN,
	loading: false,
	toogleLoading: (val = false) => set({ loading: val }),
	changeLocale: (val: 'zh_CN' | 'en_GB') => {
		if (val === 'zh_CN') set({ locale: zh_CN })
		else set({ locale: en_GB })
	}
}))

const { getState, setState, subscribe, destroy } = store

export { getState, setState, subscribe, destroy }

export default store
