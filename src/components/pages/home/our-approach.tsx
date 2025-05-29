'use client';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function OurApproach() {
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
            Our Process
          </motion.span>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl [font-family:var(--font-playfair)] mb-4 text-white">
            The Mikilionaire Approach
          </h2>
          
          <p className="text-lg text-[#CBAF75]/90 max-w-2xl mb-6">
            A proven 4-stage methodology for identifying and executing Zimbabwe's most valuable opportunities
          </p>
        </div>

        {/* Process Cards - Vertical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: 1,
              title: "Opportunity Identification",
              description: "Scanning Zimbabwe's economic landscape for high-potential sectors with structural advantages",
            },
            {
              step: 2,
              title: "Deep Analysis",
              description: "Rigorous evaluation of market dynamics, financials, and management capabilities",
            },
            {
              step: 3,
              title: "Value Creation Plan",
              description: "Developing tailored strategies to maximize each investment's potential",
            },
            {
              step: 4,
              title: "Execution & Growth",
              description: "Active partnership with management teams to implement value-creation initiatives",
            }
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.1 }
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <Card className="relative h-full w-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#CBAF75]/30 transition-all group">
                <CardHeader className="items-center text-center pb-3">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#CBAF75] flex items-center justify-center border-2 border-[#0B1D26] shadow-md">
                    <span className="text-lg font-bold text-[#0B1D26]">{item.step}</span>
                  </div>
                  <CardTitle className="text-xl text-white mt-6">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-[#CBAF75]/90">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Button
            asChild
            className="bg-[#CBAF75] hover:bg-[#D4AF37] text-[#0B1D26] font-medium shadow-lg hover:shadow-xl transition-all group"
          >
            <Link href="/approach">
              See Our Case Studies
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}