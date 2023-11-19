import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { ThemeSwitcher } from './theme-switcher';

export default async function Header({ lang }: { lang: Locale }) {
	const { navigation } = await getDictionary(lang);

	return (
		<header className="bg-background px-6 py-4 text-foreground shadow-md">
			<nav className="flex items-center justify-between">
				<div className="flex">
					<Image
						src="/favicon.svg"
						width={75}
						height={75}
						alt="logo"
						className="mr-16"
					/>
					<ul className="gab-x-8 flex">
						<li>
							<Link
								href={`/${lang}`}
								className="transition-all hover:text-teal-700"
							>
								{navigation.home}
							</Link>
						</li>
						<li>
							<Link
								href={`/${lang}/favourites`}
								className="transition-all hover:text-teal-700"
							>
								{navigation.favourites}
							</Link>
						</li>
					</ul>
				</div>
				<ThemeSwitcher />
			</nav>
		</header>
	);
}
