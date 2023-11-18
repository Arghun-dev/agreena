'use client';

export function copyToClipBoard(value: string): void {
	navigator.clipboard.writeText(value);
}
