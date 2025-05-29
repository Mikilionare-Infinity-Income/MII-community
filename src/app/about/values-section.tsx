'use client';
import { motion } from 'framer-motion';
import { Diamond, Handshake, BarChart, Leaf } from 'lucide-react';

export function ValuesSection() {
    const values = [
        {
            icon: <Diamond className="w-8 h-8 text-[#CBAF75]" />,
            title: "Integrity",
            description: "We maintain the highest ethical standards in all our dealings, ensuring transparency and trust with our partners and stakeholders."
        },
        {
            icon: <Handshake className="w-8 h-8 text-[#CBAF75]" />,
            title: "Partnership",
            description: "We believe in collaborative growth, working closely with management teams to unlock value and drive sustainable success."
        },
        {
            icon: <BarChart className="w-8 h-8 text-[#CBAF75]" />,
            title: "Excellence",
            description: "We pursue superior returns through rigorous analysis, disciplined execution, and continuous improvement in all we do."
        },
        {
            icon: <Leaf className="w-8 h-8 text-[#CBAF75]" />,
            title: "Impact",
            description: "We measure success not just by financial returns, but by the positive economic and social impact we create in Zimbabwe."
        }
    ];

    return (
        <section className="w-full py-20 bg-gradient-to-br from-[#0B1D26] to-[#1A3A4B] flex flex-col justify-center items-center">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block text-xs font-semibold text-[#CBAF75] border border-[#CBAF75] px-3 py-1 rounded-full uppercase tracking-wider mb-4"
                    >
                        Our Foundation
                    </motion.span>
                    <h2 className="text-3xl font-bold text-white mb-4 [font-family:var(--font-playfair)]">
                        Core Values
                    </h2>
                    <p className="text-xl text-[#CBAF75]/90 max-w-2xl mx-auto">
                        The principles that guide every decision we make
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: index * 0.1 }
                            }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#CBAF75]/30 transition-all"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="p-4 bg-[#0B1D26]/30 rounded-full mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                                <p className="text-white/80">{value.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}