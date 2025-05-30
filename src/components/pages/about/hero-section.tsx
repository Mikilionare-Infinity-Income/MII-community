'use client';
import { motion } from 'framer-motion';

export function HeroSection() {
    return (
        <section className="w-full py-32 bg-gradient-to-br from-[#0B1D26] to-[#1A3A4B] flex flex-col justify-center items-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#CBAF75] mix-blend-overlay blur-xl"></div>
                <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-[#CBAF75] mix-blend-overlay blur-xl"></div>
            </div>

            <div className="container px-4 md:px-6 relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6 [font-family:var(--font-playfair)]"
                >
                    Our Story
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-[#CBAF75]/90 max-w-3xl mx-auto"
                >
                    Building generational wealth through strategic investments in Zimbabwe's most promising sectors
                </motion.p>
            </div>
        </section>
    );
}