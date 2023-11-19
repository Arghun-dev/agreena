import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Locale, i18n } from '@/i18n.config';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import '../globals.css';
import Header from '@/components/header';
import { ThemeProvider } from '@/lib/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
	title: 'Agreena Certificates',
	icons: {
		icon: '/favicon.svg',
	},
};

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: Locale };
}) {
	return (
		<html lang={params.lang} suppressHydrationWarning>
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
					<Header lang={params.lang} />
					<main className="container my-12">{children}</main>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
