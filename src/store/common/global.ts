import { getLocalStorage } from '@src/utils/storage'
import create from 'zustand'

export interface GlobalState {
	locale: 'zh_CN' | 'en_GB'
	loading: boolean
	toogleLoading: (val: boolean) => void
	changeLocale: (val: 'zh_CN' | 'en_GB') => void
}

const store = create<GlobalState>((set, get) => ({
	locale: (getLocalStorage('semi_locale') as 'zh_CN' | 'en_GB') || 'zh_CN',
	loading: false,
	toogleLoading: (val = false) => set({ loading: val }),
	changeLocale: (val: 'zh_CN' | 'en_GB') => {
		if (val === 'zh_CN') set({ locale: 'zh_CN' })
		else set({ locale: 'en_GB' })
	}
}))

const { getState, setState, subscribe, destroy } = store

export { getState, setState, subscribe, destroy }

export default store
