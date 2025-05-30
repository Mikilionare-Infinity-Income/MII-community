'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const properties = [
    {
        title: "Boarding houses in Harare",
        location: "CBD, Kuwadzana, Harare",
        stage: "Planning Phase",
        description: "Affordable housing solutions for urban workers and students.",
        image: "/images/portfolio/boarding-house.webp"
    }
];

export function RealEstateFocus() {
    return (
        <section id="properties" className="w-full py-20 bg-white flex flex-col items-center justify-center">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#0B1D26] mb-4 [font-family:var(--font-playfair)]">
                        Current Investments
                    </h2>
                    <p className="text-xl text-[#0B1D26]/80 max-w-2xl mx-auto">
                        Our strategic real estate holdings in Zimbabwe
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {properties.map((property) => (
                        <Card key={property.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative h-48">
                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-[#0B1D26]">{property.title}</CardTitle>
                                <CardDescription className="text-[#CBAF75]">
                                    {property.location}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-[#0B1D26]/90 mb-2">
                                    <span className="font-medium">Status:</span> {property.stage}
                                </p>
                                <p className="text-[#0B1D26]/80">{property.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}