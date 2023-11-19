'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { i18n } from '@/i18n.config';

export function LocaleSwitcher() {
	const pathname = usePathname();

	const redirectPathName = (locale: string) => {
		if (!pathname) return '/';
		const segments = pathname.split('/');
		segments[1] = locale;
		return segments.join('/');
	};

	return (
		<ul className="flex gap-x-3">
			{i18n.locales.map((locale) => {
				return (
					<li key={locale}>
						<Link
							href={redirectPathName(locale)}
							className="rounded-md border bg-black px-3 py-2 text-white"
						>
							{locale}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
