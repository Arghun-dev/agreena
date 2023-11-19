import Image from 'next/image';
import Link from 'next/link';
import { ThemeSwitch } from './theme-switch';

interface HeaderLink {
	id: number;
	title: string;
	href: string;
}

const headerLinks: HeaderLink[] = [
	{
		id: 1,
		title: 'Certificates',
		href: '/',
	},
	{
		id: 2,
		title: 'Favourites',
		href: '/favourites',
	},
];

export default function Header() {
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
					<div>
						{headerLinks.map((link) => (
							<Link
								key={link.id}
								href={link.href}
								className="mr-6 transition-all hover:text-teal-700"
							>
								{link.title}
							</Link>
						))}
					</div>
				</div>
				<ThemeSwitch />
			</nav>
		</header>
	);
}
