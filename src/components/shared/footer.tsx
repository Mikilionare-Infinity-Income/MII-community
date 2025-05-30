import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, X } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="container px-4 md:px-6 py-12 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Company Info */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold text-[#0B1D26] [font-family:var(--font-playfair)] text-center md:text-left">
                            Mikilionaire Infinity Income
                        </h2>
                        <p className="text-[#0B1D26]/80 mt-2 text-center md:text-left">
                            Building generational wealth through strategic investments
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-6">
                        <Link
                            href="https://www.facebook.com/profile.php?id=61572613892570"
                            className="text-[#0B1D26] hover:text-[#CBAF75] transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook className="h-6 w-6" />
                        </Link>
                        <Link
                            href="https://x.com/mikilionaire"
                            className="text-[#0B1D26] hover:text-[#CBAF75] transition-colors"
                            aria-label="X"
                        >
                            <X className="h-6 w-6" />
                        </Link>
                        <Link
                            href="https://instagram.com/mikilionaire"
                            className="text-[#0B1D26] hover:text-[#CBAF75] transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram className="h-6 w-6" />
                        </Link>
                        <Link
                            href="https://linkedin.com/company/mikilionaire"
                            className="text-[#0B1D26] hover:text-[#CBAF75] transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-6 w-6" />
                        </Link>
                        <Link
                            href="https://youtube.com/mikilionaire"
                            className="text-[#0B1D26] hover:text-[#CBAF75] transition-colors"
                            aria-label="YouTube"
                        >
                            <Youtube className="h-6 w-6" />
                        </Link>
                    </div>
                </div>

                {/* Copyright and Links */}
                <div className="border-t border-gray-100 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-[#0B1D26]/70 mb-4 md:mb-0">
                        © {new Date().getFullYear()} Mikilionaire Infinity Income. All rights reserved.
                    </p>

                    <div className="flex space-x-6">
                        <Link href="/privacy" className="text-sm text-[#0B1D26]/70 hover:text-[#CBAF75] transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-sm text-[#0B1D26]/70 hover:text-[#CBAF75] transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/contact" className="text-sm text-[#0B1D26]/70 hover:text-[#CBAF75] transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}