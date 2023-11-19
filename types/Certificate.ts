export interface Meta {
	currentPage: number;
	itemCount: number;
	itemsPerPage: number;
	totalItems: number;
	totalPages: number;
}

interface Address {
	id: number;
	country: string;
}

interface Company {
	id: number;
	name: string;
	address: Address;
}

interface CarbonAddress {
	id: number;
	carbonCountry: string;
}

interface CarbonForm {
	id: number;
	carbonAddress: CarbonAddress;
}

interface User {
	id: number;
}

export interface CarbonUser {
	id: number;
	user: User;
	company: Company;
}

interface CarbonCertificateOwnerAccount {
	id: number;
	carbonUser: CarbonUser;
}

interface CarbonField {
	id: number;
	carbonFarm: CarbonForm;
}

export interface Certificate {
	id: number;
	uniqueNumber: string;
	status: string;
	ownershipStatus: string;
	vintageYear: number[];
	methodologyVersion: string[];
	countryCode: string;
	companyName: string;
	standard: string;
	tonnes: number;
	issuanceDate: string;
	deployment: string;
	validity: string;
	replenishment: null;
	carbonCertificateNft: null;
	carbonField: CarbonField;
	carbonUser: CarbonUser;
	carbonCertificateOwnerAccount: CarbonCertificateOwnerAccount;
	combinedCertificates: Certificate[];
}
