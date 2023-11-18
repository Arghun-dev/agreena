'use client';

import { ColumnDef } from '@tanstack/react-table';
import {
	CarbonCertificateOwnerAccount,
	Certificate,
} from '@/types/Certificate';
import IDColumn from './id-column';
import BookmarkColumn from './bookmark-column';

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
			const ownerAccount = row.getValue(
				'carbonCertificateOwnerAccount'
			) as CarbonCertificateOwnerAccount;

			return <div>{ownerAccount.carbonUser.company.name}</div>;
		},
	},
	{
		accessorKey: 'countryCode',
		header: 'Owner Country',
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
