import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import Header from '@/components/header';
import { ThemeProvider } from '@/lib/theme-provider';

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
					'h-full w-full bg-gray-100 font-sans antialiased dark:bg-black',
					inter.variable
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<main className="container my-12">{children}</main>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
