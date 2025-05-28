'use client';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Rocket, Users } from 'lucide-react';
import Link from 'next/link';

export function AboutPreview() {
    return (
        <section className="w-full py-20 bg-background">
            <div className="container px-4 md:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <motion.span
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{
                            delay: 0.2,
                            type: "spring",
                            stiffness: 100
                        }}
                        className="inline-block text-xs font-semibold text-[#0B1D26] bg-[#CBAF75] px-3 py-1 rounded-full uppercase tracking-wider mb-4 shadow-sm"
                    >
                        Our Identity
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl font-bold tracking-tight sm:text-4xl [font-family:var(--font-playfair)] mb-4"
                    >
                        Who Are We?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg text-muted-foreground max-w-2xl mb-6"
                    >
                        A dynamic collective of young visionaries transforming Zimbabwe's future through strategic investments and innovative solutions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-[#CBAF75] to-[#D4AF37] text-[#0B1D26] hover:shadow-lg hover:opacity-90 transition-all font-medium"
                        >
                            <Link href="/about" className="group">
                                Meet the Team
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Rocket className="w-6 h-6 text-white" />,
                            title: "Our Foundation",
                            description: "Founded in 2025, we're revolutionizing Zimbabwe's economy through disruptive investments in high-growth sectors and sustainable development initiatives that create lasting impact.",
                            bg: "bg-gradient-to-br from-[#0B1D26] to-[#1A3A4B]",
                            iconBg: "bg-gradient-to-tr from-[#CBAF75] to-[#E8D9B5]",
                            scale: 1
                        },
                        {
                            icon: <Cpu className="w-6 h-6 text-white" />,
                            title: "Our Focus",
                            description: "We strategically invest in Technology, Real Estate, AI, Healthcare, Renewable Energy and Financial Services - targeting sectors with exponential growth potential in Zimbabwe's market.",
                            bg: "bg-gradient-to-br from-[#12232E] to-[#3A6B80]",
                            iconBg: "bg-gradient-to-tr from-[#D4AF37] to-[#FFEC9E]",
                            scale: 1.03  // Slightly larger scale for middle card
                        },
                        {
                            icon: <Users className="w-6 h-6 text-white" />,
                            title: "Our Expertise",
                            description: "Our multidisciplinary team combines youthful energy with experience across Economics, Accounting, Tech, Development, HR and Healthcare - delivering unmatched sector insights.",
                            bg: "bg-gradient-to-br from-[#1A3A4B] to-[#0B1D26]",
                            iconBg: "bg-gradient-to-tr from-[#CBAF75] to-[#A68A4F]",
                            scale: 1
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: item.scale,
                                transition: {
                                    delay: index * 0.15,
                                    type: "spring",
                                    stiffness: 100
                                }
                            }}
                            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                        >
                            <Card className={`h-full border-0 shadow-lg ${item.bg} text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center space-x-4">
                                        <motion.div
                                            whileHover={{ rotate: 10 }}
                                            className={`p-3 rounded-xl ${item.iconBg} shadow-md`}
                                        >
                                            {item.icon}
                                        </motion.div>
                                        <CardTitle className="text-lg">{item.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-white/80">
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