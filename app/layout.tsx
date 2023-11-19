import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
	title: 'Agreena Certificates',
	icons: {
		icon: '/favicon.svg',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					'h-full w-full bg-background bg-gray-100 font-sans antialiased',
					inter.variable
				)}
			>
				<Header />
				<main className="container my-12">{children}</main>
				<Toaster />
			</body>
		</html>
	);
}
