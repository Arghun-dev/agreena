import { Certificate, Meta } from '@/types/Certificate';

type CertificatesApiResponse = {
	errors: string[] | [];
	result: {
		data: Certificate[];
		meta: Meta[];
	} | null;
	success: boolean;
};

export async function getCertificates(): Promise<CertificatesApiResponse> {
	try {
		const res = await fetch(
			`${process.env.BASE_API}/certificates?includeMeta=true&page=1&limit=10`,
			{
				headers: {
					'API-ACCESS-TOKEN': process.env.API_ACCESS_TOKEN || '',
				},
			}
		);

		return await res.json();
	} catch (e) {
		console.log('Error in fetching certificates', e);
		return {
			success: false,
			errors: ['Something went wrong in fetching certficates list'],
			result: null,
		};
	}
}
