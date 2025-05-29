import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Mikilionaire Infinity Income - Our Mission & Team',
    description: 'Discover the vision, values, and leadership behind Mikilionaire Infinity Income. Learn about our strategic approach to generational wealth building in Zimbabwe.',
    keywords: [
        'Mikilionaire Infinity Income',
        'Zimbabwe investments',
        'wealth management',
        'private equity Zimbabwe',
        'real estate investments',
        'investment firm Zimbabwe'
    ],
    openGraph: {
        title: 'About Mikilionaire Infinity Income',
        description: 'Our mission, values, and leadership team',
        url: 'https://mikilionaire.com/about',
        siteName: 'Mikilionaire Infinity Income',
        images: [
            {
                url: '/images/og-about.jpg',
                width: 1200,
                height: 630,
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Mikilionaire Infinity Income',
        description: 'Our mission, values, and leadership team',
        images: ['/images/og-about.jpg'],
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>;
}