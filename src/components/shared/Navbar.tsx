"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

// Navigation links
const links = [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm border-b border-gray-100">
            <div className="md:px-8 mx-auto px-4 py-4">
                <DesktopNav />
                <MobileNav />
            </div>
        </nav>
    );
}

function DesktopNav() {
    return (
        <div className="hidden md:flex w-full justify-between items-center">
            {/* Left: Brand */}
            <Link href="/" className={`  text-xl font-semibold font-serif`}>
                Mikilionaire Infinity Income
            </Link>

            {/* Center: Links */}
            <div className="flex gap-6">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-gray-700 hover:text-black transition"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Right: CTA */}
            <Button asChild variant="default" className="hidden md:inline-flex">
                <Link href="/signup" className="text-sm font-medium text-white">
                    Sign Up
                </Link>
            </Button>
        </div>
    );
}

function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex md:hidden w-full justify-between items-center">
            {/* Left: Brand */}
            <Link href="/" className="text-base font-semibold font-serif">
                Mikilionaire Infinity Income
            </Link>

            {/* Right: Toggle Button */}
            <button
                className="text-black"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-full left-0 w-full bg-white shadow-md mt-2 z-40 border-t"
                    >
                        <div className="flex flex-col px-4 py-4 gap-4">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-gray-700 hover:text-black"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/signup"
                                className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Sign Up
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}