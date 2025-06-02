import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0B1D26] to-[#1A3A4B] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#CBAF75] mix-blend-overlay blur-xl"></div>
                <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-[#CBAF75] mix-blend-overlay blur-xl"></div>
            </div>

            <div className="flex-grow flex items-center justify-center relative z-10">
                <div className="text-center px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-9xl font-bold text-[#CBAF75] mb-4 [font-family:var(--font-playfair)]">
                        404
                    </h1>
                    <h2 className="text-4xl font-bold text-white mb-6 [font-family:var(--font-playfair)]">
                        Page Not Found
                    </h2>
                    <p className="text-xl text-[#CBAF75]/90 max-w-xl mx-auto mb-8">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild className="bg-[#CBAF75] hover:bg-[#D4AF37] text-[#0B1D26]">
                            <Link href="/" className="group">
                                <Home className="mr-2 h-4 w-4" />
                                Return Home
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="border-[#CBAF75] text-[#CBAF75] hover:bg-[#CBAF75]/10">
                            <Link href="/contact" className="group">
                                Contact Support
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Footer note */}
            <div className="pb-8 text-center text-[#CBAF75]/70 text-sm">
                Mikilionaire Infinity Income © {new Date().getFullYear()}
            </div>
        </div>
    );
}