'use client';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Cpu, Database, Factory, HeartPulse, Leaf } from 'lucide-react';
import Link from 'next/link';

export function InvestmentFocus() {
    return (
        <section className="w-full py-20 bg-background flex flex-col justify-center items-center">
            <div className="container px-4 md:px-6">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block text-xs font-semibold text-[#D4AF37] border border-[#D4AF37] px-3 py-1 rounded-full uppercase tracking-wider mb-4"
                    >
                        Portfolio Diversification
                    </motion.span>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl [font-family:var(--font-playfair)] mb-4 text-[#0B1D26]">
                        Our Investment Sectors
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mb-6">
                        Strategic capital allocation across high-growth sectors in Zimbabwe's emerging economy
                    </p>

                    <Button
                        asChild
                        variant="outline"
                        className="border-[#0B1D26] text-[#0B1D26] hover:bg-[#0B1D26]/10"
                    >
                        <Link href="/portfolio">
                            Explore Full Portfolio
                        </Link>
                    </Button>
                </div>

                {/* Investment Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Home className="w-6 h-6" />,
                            title: "Real Estate",
                            description: "Developing commercial and residential properties in strategic locations across Zimbabwe",
                            image: "/images/opportunities/building.webp",
                            badge: "Current Focus"
                        },
                        {
                            icon: <Cpu className="w-6 h-6" />,
                            title: "Technology",
                            description: "Investing in fintech, SaaS, and digital infrastructure for Zimbabwe's digital transformation",
                            image: "/images/opportunities/tech_hub.webp",
                            badge: "Current Focus"
                        },
                        {
                            icon: <Database className="w-6 h-6" />,
                            title: "Artificial Intelligence",
                            description: "Supporting AI solutions tailored for African business challenges and opportunities",
                            image: "/images/opportunities/ai.webp",
                            badge: "Current Focus"
                        },
                        {
                            icon: <Factory className="w-6 h-6" />,
                            title: "Manufacturing",
                            description: "Future plans to support local production capabilities and industrial development",
                            image: "/images/opportunities/manufacturing.webp",
                            badge: "Future Area",
                            future: true
                        },
                        {
                            icon: <HeartPulse className="w-6 h-6" />,
                            title: "Healthcare",
                            description: "Exploring investments in medical infrastructure and healthtech solutions",
                            image: "/images/opportunities/healthcare.webp",
                            badge: "Future Area",
                            future: true
                        },
                        {
                            icon: <Leaf className="w-6 h-6" />,
                            title: "Renewable Energy",
                            description: "Potential ventures into solar, wind and other sustainable energy solutions",
                            image: "/images/opportunities/energy.webp",
                            badge: "Future Area",
                            future: true
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: index * 0.1 }
                            }}
                            viewport={{ once: true }}
                        >
                            <Card className={`h-full overflow-hidden border-0 shadow-sm transition-all rounded-lg hover:shadow-md ${item.future ? 'opacity-80 hover:opacity-100' : ''}`}>
                                <div className="relative h-48 bg-gray-100">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center rounded-lg"
                                        style={{ backgroundImage: `url('${item.image}')` }}
                                    />
                                    <span className={`absolute top-4 right-4 text-xs font-medium px-2 py-1 rounded-full ${item.badge === 'Current Focus' ? 'bg-[#0B1D26] text-white' : 'bg-transparent border border-[#0B1D26] text-[#0B1D26]'}`}>
                                        {item.badge}
                                    </span>
                                </div>
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg ${item.future ? 'bg-[#0B1D26]/20 text-[#D4AF37]' : 'bg-[#0B1D26]/10 text-[#D4AF37]'}`}>
                                            {item.icon}
                                        </div>
                                        <CardTitle className={item.future ? 'text-gray-600' : 'text-[#D4AF37]'}>{item.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className={item.future ? 'text-gray-500' : ''}>
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}