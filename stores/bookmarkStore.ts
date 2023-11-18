import { create, StateCreator } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Certificate } from '@/types/Certificate';

interface BookmarkStore {
	bookmarks: Certificate[];
	addBookmark: (bookmark: Certificate) => void;
	removeBookmark: (id: number) => void;
}

export const useBookmarkStore = create<BookmarkStore>()(
	persist(
		(set) => ({
			bookmarks: [],
			addBookmark: (certificate) =>
				set((state) => ({ bookmarks: [...state.bookmarks, certificate] })),
			removeBookmark: (id) =>
				set((state) => ({
					bookmarks: state.bookmarks.filter((bookmark) => bookmark.id !== id),
				})),
		}),
		{
			name: 'bookmark store',
		}
	)
);
