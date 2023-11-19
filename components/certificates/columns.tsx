'use client';

import dynamic from 'next/dynamic';
import { ColumnDef } from '@tanstack/react-table';
import { Certificate, CarbonUser } from '@/types/Certificate';
import IDColumn from './id-column';

const BookmarkColumn = dynamic(() => import('./bookmark-column'), {
	ssr: false,
});

export const columns: ColumnDef<Certificate>[] = [
	{
		accessorKey: 'uniqueNumber',
		header: 'Unique ID',
		cell: ({ row }) => {
			return <IDColumn value={row.getValue('uniqueNumber')} />;
		},
	},
	{
		accessorKey: 'companyName',
		header: 'Originator',
	},
	{
		accessorKey: 'countryCode',
		header: 'Originator Country',
	},
	{
		accessorKey: 'carbonCertificateOwnerAccount',
		header: 'Owner',
		cell: ({ row }) => {
			const certificate = row.original;

			return (
				<div>
					{certificate.carbonCertificateOwnerAccount.carbonUser.company.name}
				</div>
			);
		},
	},
	{
		accessorKey: 'carbonUser',
		header: 'Owner Country',
		cell: ({ row }) => {
			const carbonUser = row.getValue('carbonUser') as CarbonUser;
			return <div>{carbonUser.company.address.country}</div>;
		},
	},
	{
		accessorKey: 'status',
		header: 'Status',
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const certficate = row.original;

			return <BookmarkColumn certificate={certficate} />;
		},
	},
];
