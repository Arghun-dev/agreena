'use client';

export function copyToClipBoard(value: string): Promise<void> {
	return navigator.clipboard.writeText(value);
}
