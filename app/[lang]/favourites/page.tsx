import { Metadata } from 'next';
import Favourites from '@/components/favourites';

export const metadata: Metadata = {
	title: 'Favourite Certificates',
};

export default function FaviouriteCertificates() {
	return <Favourites />;
}
