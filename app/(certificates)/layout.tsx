'use client';

import { usePathname } from 'next/navigation';

export default function CertificatesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	return (
		<div>
			<h1 className="mb-8 text-2xl">
				{pathname == '/' ? 'Certificates' : 'Favourites'}
			</h1>
			{children}
		</div>
	);
}
