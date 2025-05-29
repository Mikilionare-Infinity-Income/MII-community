'use client';
import { ContactForm } from './contact-form';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ContactSection() {
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
                        Get In Touch
                    </motion.span>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl [font-family:var(--font-playfair)] mb-4 text-white">
                        Contact Our Team
                    </h2>

                    <p className="text-lg text-[#CBAF75]/90 max-w-2xl mb-6">
                        Reach out to discuss investment opportunities or partnership possibilities
                    </p>
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12"
                >
                    <ContactForm />
                </motion.div>

                {/* Alternative CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-[#CBAF75]/90 mb-4">Prefer to call us directly?</p>
                    <Button
                        asChild
                        variant="outline"
                        className="border-[#CBAF75] text-[#CBAF75] hover:bg-[#CBAF75]/10"
                    >
                        <Link href="tel:+263787434880">
                            +263 XXX XXX XXX
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}