import { useState } from 'react'

interface IPagination {
	page: number
	size?: number
}

type returned = [IPagination, (pageOptions: IPagination) => void]

const defaultPageOptions: IPagination = {
	page: 1,
	size: 20
}

export function usePagination(initPageOptions: IPagination = defaultPageOptions): returned {
	const [page, setPage] = useState(initPageOptions.page)
	const [size, setSize] = useState(initPageOptions.size)

	function setPagination(pageOptions: IPagination) {
		setPage(pageOptions.page)
		if (pageOptions.size) {
			setSize(pageOptions.size)
		}
	}
	const pageOptions: IPagination = {
		page,
		size
	}
	return [pageOptions, setPagination]
}
