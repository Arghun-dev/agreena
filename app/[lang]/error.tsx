'use client';

import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<Alert variant="destructive">
			<AlertCircle className="h-4 w-4" />
			<AlertTitle>Error</AlertTitle>
			<AlertDescription>{error.message}</AlertDescription>
			<div className="mt-6 text-center">
				<Button onClick={reset} variant="secondary" size="sm">
					Try again
				</Button>
			</div>
		</Alert>
	);
}
