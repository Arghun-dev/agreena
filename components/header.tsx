import Image from 'next/image';
import Link from 'next/link';

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
		<header className="bg-slate-300 p-6 shadow-md">
			<nav className="flex justify-between">
				<Image src="/favicon.svg" width={75} height={75} alt="logo" />
				<div>
					{headerLinks.map((link) => (
						<Link
							key={link.id}
							href={link.href}
							className="ml-6 transition-all hover:text-teal-900"
						>
							{link.title}
						</Link>
					))}
				</div>
			</nav>
		</header>
	);
}
