import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Mikilionaire Infinity Income',
    description: 'Get in touch with our investment team in Zimbabwe',
    keywords: [
        'Contact Mikilionaire',
        'Zimbabwe investment contact',
        'Real estate inquiry Zimbabwe',
        'Mikilionaire Infinity Income address'
    ],
    openGraph: {
        title: 'Contact Our Team',
        description: 'Reach out for investment opportunities',
        images: '/images/contact/og-image.webp'
    }
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>;
}