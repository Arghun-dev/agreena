// in this file I have defined custom Error Classes which is essential in handling structured error handling

export class CertificatesError extends Error {
	constructor(message: string = 'Something went wrong') {
		super(message);
		this.name = 'CertificatesError';
	}
}
