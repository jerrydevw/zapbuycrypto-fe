import Link from 'next/link';

const Footer = () => (
    <footer className="p-4 bg-gray-100">
        <Link href="/privacy-policy" className="text-blue-600">
            Política de Privacidade
        </Link>
    </footer>
);

export default Footer;
