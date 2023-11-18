'use client';

import { useToast } from '@/components/ui/use-toast';
import { copyToClipBoard } from '@/lib/client-utils';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';

export default function IDColumn({ value }: { value: string }) {
	const { toast } = useToast();

	return (
		<div className="w-[220px]">
			<Tooltip>
				<TooltipTrigger asChild>
					<p
						className="cursor-pointer truncate"
						onClick={() => {
							copyToClipBoard(value);
							toast({
								title: 'Copied Successfully!',
								description: (
									<div className="mt-4 text-xs">
										<span className="font-semibold">{value}</span> copied to
										clipboard.
									</div>
								),
								duration: 9000,
							});
						}}
					>
						{value}
					</p>
				</TooltipTrigger>
				<TooltipContent className="mb-2 bg-black text-white">
					<p>Click to copy the certificate ID</p>
				</TooltipContent>
			</Tooltip>
		</div>
	);
}
