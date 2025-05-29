'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../../ui/button';
import { Briefcase, Users } from 'lucide-react';

export default function Header() {
    return (
        <header
            className="relative w-full h-screen flex items-center justify-center px-4 md:px-8 bg-center bg-cover"
            style={{
                backgroundImage: "url('/images/assets/building.jpg')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-brightness-90" />

            {/* Content */}
            <div className="relative z-10 text-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-7xl font-bold tracking-tight [font-family:var(--font-playfair)]"
                >
                    Building Wealth That Lasts Generations
                </motion.h1>


                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
                >
                    Mikilionaire Infinity Income builds lasting wealth through real estate and capital ventures.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-8 flex flex-col sm:flex-row gap-2 md:gap-4 justify-center"
                >
                    <Button size="lg" asChild variant="default">
                        <Link href="/signup" className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            Join the Movement
                        </Link>
                    </Button>

                    <Button className="text-slate-800" size="lg" asChild variant="outline">
                        <Link href="/portfolio" className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            View Portfolio
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </header>

    );
}

