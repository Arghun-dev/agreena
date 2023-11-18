'use client';

import { columns } from '@/components/certificates/columns';
import { DataTable } from './data-table';
import { useBookmarkStore } from '@/stores/bookmarkStore';

export default function Favourites() {
	const { bookmarks } = useBookmarkStore();
	return <DataTable data={bookmarks} columns={columns} />;
}
