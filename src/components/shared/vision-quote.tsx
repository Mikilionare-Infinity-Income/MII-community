'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function VisionQuote() {
  return (
    <section className="w-full py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/assets/sir_mike.jpg" // Replace with your image path
                alt="Founder of Mikilionaire Infinity Income"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,..." // Add your blur placeholder
              />
            </div>
          </motion.div>

          {/* Quote and CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 space-y-8"
          >
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-[#0B1D26] [font-family:var(--font-playfair)]">
                "Your dreams are worth dreaming, we can help you realize them. At Mikilionaire Infinity Income, we believe in the power of financial freedom and the potential of every individual to achieve greatness. Join us on this journey to transform your financial future."
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#0B1D26] hover:bg-[#12232E] text-white"
              >
                <Link target='_blank' href="mailto:mikilionaire@gmail.com" className="gap-2">
                  <Mail className="w-5 h-5" />
                  Email Founder
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#0B1D26] text-[#0B1D26] hover:bg-[#0B1D26]/10"
              >
                <Link href="https://wa.link/p311ec" target='_blank' className="gap-2"> {/* Replace with actual WhatsApp number */}
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Message
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Founder & CEO, Mikilionaire Infinity Income
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}