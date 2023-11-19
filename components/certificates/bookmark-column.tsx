'use client';

import { memo, useState, useEffect } from 'react';
import { Bookmark } from 'lucide-react';
import { Certificate } from '@/types/Certificate';
import { useBookmarkStore } from '@/stores/bookmarkStore';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const BookmarkColumn = ({ certificate }: { certificate: Certificate }) => {
	const { toast } = useToast();
	const [openPop, setOpenPop] = useState(false);
	const [effect, setEffect] = useState(false);
	const { addBookmark, removeBookmark, bookmarks } = useBookmarkStore();

	const isBookmarked = bookmarks.some(
		(bookmark) => bookmark.id == certificate.id
	);

	const handleClick = () => {
		if (isBookmarked) {
			removeBookmark(certificate.id);
			setOpenPop(false);
			toast({
				title: 'Removed from bookmark successfully!',
			});
		} else {
			addBookmark(certificate);
			setEffect(true);
		}
	};

	const renderBookmarkIcon = () => {
		return (
			<Bookmark
				className={`cursor-pointer ${isBookmarked ? 'fill-black' : ''} ${
					effect ? 'animate-wiggle' : ''
				}`}
				onClick={() => (isBookmarked ? setOpenPop(true) : handleClick())}
				onAnimationEnd={() => setEffect(false)}
			/>
		);
	};

	const renderPopoverContent = () => (
		<PopoverContent>
			<p>Are you sure you want to remove this to bookmarks?</p>
			<div className="mt-6 text-end">
				<Button
					className="mr-2 h-2 p-3"
					variant="outline"
					onClick={() => setOpenPop(false)}
				>
					No
				</Button>
				<Button className="h-2 p-3" onClick={handleClick}>
					Yes
				</Button>
			</div>
		</PopoverContent>
	);

	return isBookmarked ? (
		<Popover open={openPop} onOpenChange={setOpenPop}>
			<PopoverTrigger asChild>{renderBookmarkIcon()}</PopoverTrigger>
			{renderPopoverContent()}
		</Popover>
	) : (
		renderBookmarkIcon()
	);
};

export default memo(BookmarkColumn);

BookmarkColumn.whyDidYouRender = true;
