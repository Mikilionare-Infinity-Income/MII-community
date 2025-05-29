'use client';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Globe, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export function WhyChooseUs() {
  return (
    <section className="w-full py-20 bg-[#F7F7F7] flex flex-col justify-center items-center relative">
      {/* Diagonal background accent */}
      <div className="absolute top-0 left-0 w-full h-[40%] bg-[#0B1D26] transform -skew-y-3 origin-top-left z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-semibold text-white bg-[#CBAF75] px-3 py-1 rounded-full uppercase tracking-wider mb-4"
          >
            Competitive Edge
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl [font-family:var(--font-playfair)] mb-4 text-white"
          >
            Why Partner With Us?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#CBAF75] max-w-2xl mb-6"
          >
            Distinct advantages that set our investment approach apart in Zimbabwe's market
          </motion.p>
        </div>

        {/* Interactive Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {[
              {
                icon: <TrendingUp className="w-5 h-5 text-[#CBAF75]" />,
                title: "Proven Growth",
                content: "Consistent above-market returns through Zimbabwe's economic cycles"
              },
              {
                icon: <Globe className="w-5 h-5 text-[#CBAF75]" />,
                title: "Local Expertise",
                content: "Deep understanding of Zimbabwe's unique business landscape and opportunities"
              },
              {
                icon: <Shield className="w-5 h-5 text-[#CBAF75]" />,
                title: "Risk Management",
                content: "Disciplined approach to preserving capital while pursuing growth"
              },
              {
                icon: <Award className="w-5 h-5 text-[#CBAF75]" />,
                title: "Track Record",
                content: "Successful exits and value creation across multiple industries"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer border-l-4 border-[#CBAF75]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#0B1D26]/10 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0B1D26] mb-1">{item.title}</h3>
                    <p className="text-[#0B1D26]/90">{item.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Visual Element */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#0B1D26] rounded-xl p-8 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.svg')] bg-cover"></div>
            <div className="relative z-10 text-center">
              <div className="text-5xl font-bold text-[#CBAF75] mb-4">100%</div>
              <h3 className="text-xl text-white mb-2">Zimbabwe-Focused</h3>
              <p className="text-[#CBAF75]/90">All our capital and expertise is dedicated to unlocking Zimbabwe's potential</p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <Button
            asChild
            className="bg-[#0B1D26] hover:bg-[#12232E] text-white font-medium shadow-lg hover:shadow-xl transition-all group"
          >
            <Link href="/contact">
              Start Your Investment Journey
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}