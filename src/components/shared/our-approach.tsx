'use client';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, BarChart2, Layers, Handshake, ArrowRightFromLine } from 'lucide-react';
import Link from 'next/link';

export function OurApproach() {
    return (
        <section className="w-full py-20 bg-gradient-to-br from-[#0B1D26] to-[#1A3A4B] flex flex-col justify-center items-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#CBAF75] mix-blend-overlay blur-xl"></div>
                <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-[#CBAF75] mix-blend-overlay blur-xl"></div>
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block text-xs font-semibold text-[#CBAF75] border border-[#CBAF75] px-3 py-1 rounded-full uppercase tracking-wider mb-4"
                    >
                        Methodology
                    </motion.span>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl [font-family:var(--font-playfair)] mb-4 text-white">
                        Our Investment Philosophy
                    </h2>

                    <p className="text-lg text-[#CBAF75]/90 max-w-2xl mb-6">
                        A disciplined framework for identifying and capitalizing on Zimbabwe's most promising opportunities
                    </p>
                </div>

                {/* Approach Grid - Circular Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: <Target className="w-8 h-8 text-[#CBAF75]" />,
                            title: "Precision Targeting",
                            description: "Focusing on sectors with structural growth tailwinds in Zimbabwe's economy",
                            delay: 0.1
                        },
                        {
                            icon: <BarChart2 className="w-8 h-8 text-[#CBAF75]" />,
                            title: "Data-Driven",
                            description: "Rigorous analysis of market trends and financial metrics before investing",
                            delay: 0.2
                        },
                        {
                            icon: <Layers className="w-8 h-8 text-[#CBAF75]" />,
                            title: "Layered Due Diligence",
                            description: "Multi-stage vetting process evaluating management, market, and financials",
                            delay: 0.3
                        },
                        {
                            icon: <Handshake className="w-8 h-8 text-[#CBAF75]" />,
                            title: "Partnership Focus",
                            description: "Working closely with management teams to create sustainable value",
                            delay: 0.4
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: item.delay }
                            }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <div className="relative group">
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-[#CBAF75]/20 rounded-3xl blur-md group-hover:blur-lg transition-all duration-300"></div>

                                {/* Transparent card with backdrop blur */}
                                <Card className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#CBAF75]/30 transition-all group-hover:bg-white/10">
                                    <CardHeader className="items-center text-center pb-3">
                                        <div className="p-4 rounded-full bg-[#0B1D26]/50 border border-[#CBAF75]/20 mb-4 group-hover:bg-[#CBAF75]/10 transition-colors">
                                            {item.icon}
                                        </div>
                                        <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <CardDescription className="text-[#CBAF75]/90">
                                            {item.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA positioned below grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 flex justify-center"
                >
                    <Button
                        asChild
                        className="bg-[#CBAF75] hover:bg-[#D4AF37] text-[#0B1D26] font-medium shadow-lg hover:shadow-xl transition-all"
                    >
                        <Link href="/approach">
                            Learn About Our Process
                            <ArrowRightFromLine className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}