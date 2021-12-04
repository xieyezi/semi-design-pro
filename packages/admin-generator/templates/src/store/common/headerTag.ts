import create from 'zustand'

export type TagItem = {
	id: string
	path: string
	label: string
	closable: boolean
}

export interface TagState {
	tags: Array<TagItem>
	activeTagId: TagItem['id']
	collapsed: boolean

	setActiveTag: (tag: string) => void
	addTag: (tagItem: TagItem) => void
	removeTag: (targetId: string) => void
	removeOtherTag: () => void
	removeAllTag: () => void
	changeCollapsedStatus: (status: boolean) => void
}

const useStore = create<TagState>((set, get) => ({
	tags: [],
	activeTagId: '',
	collapsed: false,

	setActiveTag: (tag) => set({ activeTagId: tag }),
	addTag: (tagItem) => {
		const { tags, setActiveTag } = get()
		const isExist = tags.filter((e) => e.id === tagItem.id)
		if (isExist.length === 0) {
			set({ tags: [...tags, tagItem] })
			setActiveTag(tagItem.id)
		} else {
			setActiveTag(tagItem.id)
		}
	},
	removeTag: (targetId) => {
		const { tags, activeTagId } = get()
		const tagList = tags.filter((tag) => tag.id !== targetId)
		if (tagList.length > 0) {
			if (activeTagId === targetId) {
				const index = tags.findIndex((e) => e.id == activeTagId)
				set({
					activeTagId: tags[index - 1].id,
					tags: tagList
				})
			} else {
				set({
					tags: tagList
				})
			}
		}
	},
	removeOtherTag: () => {
		const { tags, activeTagId } = get()
		const activeTag = tags.find((tag) => tag.id === activeTagId) as TagItem
		const activeIsDashboard = activeTag?.id === tags[0].id

		set({
			tags: activeIsDashboard ? [tags[0]] : [tags[0], activeTag]
		})
	},
	removeAllTag: () =>
		set((state) => ({
			tags: [state.tags[0]],
			activeTagId: state.tags[0].id
		})),
	changeCollapsedStatus(status) {
		set({ collapsed: !!status })
	}
}))

export default useStore
