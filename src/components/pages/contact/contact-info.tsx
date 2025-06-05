'use client';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function ContactInfo() {
    return (
        <section className="w-full py-20 bg-white flex flex-col justify-center items-center">
            <div className="container px-4 md:px-6 flex flex-col justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: <MapPin className="w-8 h-8 text-[#CBAF75]" />,
                            title: "Our Office",
                            content: "123 Investment Avenue\nHarare, Zimbabwe",
                            className: "border-[#0B1D26]/10"
                        },
                        {
                            icon: <Phone className="w-8 h-8 text-[#CBAF75]" />,
                            title: "Call Us",
                            content: "+263 78 743 4880",
                            className: "border-[#0B1D26]/10"
                        },
                        {
                            icon: <MessageCircle className="w-8 h-8 text-[#CBAF75]" />,
                            title: "WhatsApp",
                            content: "+263 78 743 4880",
                            className: "border-[#0B1D26]/10"
                        },
                        {
                            icon: <Mail className="w-8 h-8 text-[#CBAF75]" />,
                            title: "Email",
                            content: "mikilionaire@gmail.com",
                            className: "border-[#0B1D26]/10"
                        }
                    ].map((item, index) => (
                        <Card key={index} className={`p-6 text-center ${item.className}`}>
                            <div className="mx-auto w-12 h-12 bg-[#0B1D26]/5 rounded-full flex items-center justify-center mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-[#0B1D26] mb-2">{item.title}</h3>
                            <p className="text-[#0B1D26]/80 whitespace-pre-line">{item.content}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}