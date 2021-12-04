import { useEffect, useState } from 'react'
import globalStore from '@src/store/common/global'

export function useLoading() {
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		globalStore.subscribe((state) => setLoading(state.loading))
		return () => {
			globalStore.destroy()
		}
	}, [])

	return {
		loading
	}
}
