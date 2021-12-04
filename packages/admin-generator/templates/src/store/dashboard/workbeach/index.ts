import create from 'zustand'
import { headerDataType, inProcessDataType, recentActivityDataType } from '@mock/workbeach'
import request from '@src/utils/request'

export interface workBeachState {
	headerData: headerDataType
	inProcessData: inProcessDataType
	recentActivityData: recentActivityDataType
	getWorkBeachData: () => void
}

const useStore = create<workBeachState>((set, get) => ({
	headerData: [],
	inProcessData: [],
	recentActivityData: [],
	getWorkBeachData: async () => {
		const res = await request({
			url: `/workbeach`,
			method: 'get'
		})
		const { headerData, inProcessData, recentActivityData } = res.data
		set({
			headerData,
			inProcessData,
			recentActivityData
		})
	}
}))

export default useStore
