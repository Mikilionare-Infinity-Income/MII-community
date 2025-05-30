'use client';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export function PortfolioCTA() {
    return (
        <section className="w-full py-20 bg-gradient-to-br from-[#0B1D26] to-[#1A3A4B] flex flex-col justify-center items-center">
            <div className="container px-4 md:px-6 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4 [font-family:var(--font-playfair)]">
                        Partner With Us
                    </h2>
                    <p className="text-xl text-[#CBAF75]/90 mb-8">
                        Join our journey in transforming Zimbabwe's real estate landscape
                    </p>
                    <Button asChild className="bg-[#CBAF75] hover:bg-[#D4AF37] text-[#0B1D26]">
                        <a href="mailto:mikilionaire@gmail.com" className="gap-2">
                            <Mail className="w-5 h-5" />
                            Email Our Investment Team
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}