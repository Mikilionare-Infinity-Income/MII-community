'use client';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TeamMember {
    id: number;
    name: string;
    title: string;
    specialization: string;
    image: string;
    bio: string;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: 'Mike Tafara Chikono',
        title: 'Chief Executive Officer',
        specialization: 'Investment Strategy',
        image: '/images/team/mike.jpg',
        bio: `Mike is an experienced strategist...`,
    },
    {
        id: 2,
        name: 'Kin Leon Zinzombe',
        title: 'Chief Technology Officer & Chief Operations Officer',
        specialization: 'Technology & Operations',
        image: '/images/team/kin.jpg',
        bio: `Kin leads technology and operations...`,
    },
    {
        id: 3,
        name: 'Clint Tadiwanashe Muchabveyo',
        title: 'Project Manager',
        specialization: 'Project Management',
        image: '/images/team/clint.jpg',
        bio: `A seasoned project manager currently studying Civil Engineering, Clint brings a wealth of experience in managing complex projects. His expertise lies in coordinating teams, ensuring timely delivery, and maintaining high standards of quality. With a keen eye for detail and a proactive approach, Clint is instrumental in driving our projects to successful completion.`,
    },
    {
        id: 4,
        name: 'Lorem ipsum dolor',
        title: 'Chief Financial Officer',
        specialization: 'Financial Management',
        image: '/images/team/lorem.jpg',
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id: 5,
        name: 'Emmanuel Da Graça Joaquim Dique',
        title: 'Head of Education & Training',
        specialization: 'Education & Training',
        image: '/images/team/emmanuel.jpg',
        bio: `Emmanuel is a dedicated educator with a passion for empowering individuals through knowledge. As the Head of Education & Training, he designs and implements comprehensive training programs that equip our team and clients with the skills needed to excel in the investment landscape. His commitment to continuous learning ensures that we stay ahead in a rapidly evolving market.`,
    },
];

export function TeamSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    return (
        <section className="w-full py-20 bg-gradient-to-br from-[#0B1D26] to-[#1A3A4B] overflow-hidden flex flex-col justify-center items-center">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4 [font-family:var(--font-playfair)]">
                        Our Team
                    </h2>
                    <p className="text-xl text-[#CBAF75]/90 max-w-2xl mx-auto">
                        The brilliant minds driving our investment success
                    </p>
                </div>

                {/* Scrolling Carousel */}
                <div className="relative w-full overflow-hidden">
                    <div className="flex animate-slide space-x-8 w-max">
                        {[...teamMembers, ...teamMembers].map((member, index) => (
                            <div
                                key={`${member.id}-${index}`}
                                onClick={() => {
                                    setSelectedMember(member);
                                    setIsOpen(true);
                                }}
                                className="w-80 shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 cursor-pointer hover:border-[#CBAF75]/30 transition-all group"
                            >
                                <div className="aspect-square w-full relative rounded-lg overflow-hidden mb-4">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-white group-hover:text-[#CBAF75] transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-[#CBAF75]">{member.title}</p>
                                <p className="text-white/80">{member.specialization}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal Dialog */}
                <Dialog
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    className="relative z-50"
                >
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Dialog.Panel className="w-full max-w-2xl bg-white rounded-xl p-8 relative max-h-[90vh] overflow-y-auto">
                            <Button
                                onClick={() => setIsOpen(false)}
                                size="icon"
                                variant="ghost"
                                className="absolute top-4 right-4"
                            >
                                <X className="h-5 w-5" />
                            </Button>

                            {selectedMember && (
                                <div className="space-y-6">
                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className="w-full md:w-1/3">
                                            <div className="aspect-square relative rounded-xl overflow-hidden">
                                                <img
                                                    src={selectedMember.image}
                                                    alt={selectedMember.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <Dialog.Title className="text-2xl font-bold text-[#0B1D26] [font-family:var(--font-playfair)]">
                                                {selectedMember.name}
                                            </Dialog.Title>
                                            <p className="text-[#CBAF75] font-medium mt-1">
                                                {selectedMember.title}
                                            </p>
                                            <p className="text-[#0B1D26]/80 mb-4">
                                                {selectedMember.specialization}
                                            </p>
                                            <div className="prose text-[#0B1D26]/90">
                                                <p>{selectedMember.bio}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Dialog.Panel>
                    </div>
                </Dialog>
            </div>

            {/* Slide Animation Styles */}
            <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 30s linear infinite;
        }
      `}</style>
        </section>
    );
}
