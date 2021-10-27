import create from 'zustand'

/**
 * 此store用于网络请求的loading加载状态
 */
export interface GlobalState {
	loading: boolean
	toogleLoading: (val: boolean) => void
}

const store = create<GlobalState>((set, get) => ({
	loading: false,
	toogleLoading: (val = false) => set({ loading: val })
}))

const { getState, setState, subscribe, destroy } = store

export { getState, setState, subscribe, destroy }

export default store
