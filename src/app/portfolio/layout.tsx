import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Portfolio | Mikilionaire Infinity Income',
    description: 'Explore our strategic real estate investments in Zimbabwe building generational wealth',
    keywords: [
        'Zimbabwe real estate investments',
        'Harare property portfolio',
        'Mikilionaire Infinity Income projects',
        'Commercial real estate Zimbabwe'
    ],
    openGraph: {
        title: 'Our Real Estate Portfolio',
        description: 'Strategic property investments in Zimbabwe',
        images: '/images/portfolio/og-image.webp'
    }
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>;
}