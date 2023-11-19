import { getCertificates } from '@/lib/api';
import { CertificatesError } from '@/lib/exceptions';
import { DataTable } from '@/components/data-table';
import { columns } from '@/components/certificates/columns';

export default async function CertificatesDataTable() {
	const { result, errors, success } = await getCertificates();

	if (!success) {
		throw new CertificatesError(errors[0]);
	}

	return (
		<DataTable
			columns={columns}
			data={result?.data || []}
			title="Certificates"
		/>
	);
}
