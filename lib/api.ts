import { Certificate } from '@/types/Certificate';

type CertificatesApiResponse = {
	errors: string[] | [];
	result: {
		data: Certificate[];
	} | null;
	success: boolean;
};

export async function getCertificates(): Promise<CertificatesApiResponse> {
	try {
		// I have intentionally requested to get all certificates and didn't handle server side pagination and limit, because I noticed only 12 records exist in the database, but the correct way is to handle pagination server side.
		const res = await fetch(`${process.env.BASE_API}/certificates`, {
			headers: {
				'API-ACCESS-TOKEN': process.env.API_ACCESS_TOKEN || '',
			},
		});

		const data = await res.json();

		return data;
	} catch (e) {
		console.log('Error in fetching certificates', e);
		return {
			success: false,
			errors: ['Something went wrong in fetching certficates list'],
			result: null,
		};
	}
}
