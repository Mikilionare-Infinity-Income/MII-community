'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useState } from 'react';
import { Mail, User, Phone, MessageCircle } from 'lucide-react';

interface FormValues {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export function ContactFormSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const formik = useFormik<FormValues>({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            phone: Yup.string().required('Phone number is required'),
            message: Yup.string().required('Message is required')
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (response.ok) {
                    toast.success('Message sent successfully!');
                    setIsSubmitted(true);
                    resetForm();
                } else {
                    toast.error('Failed to send message');
                }
            } catch (error) {
                toast.error('An error occurred');
            } finally {
                setSubmitting(false);
            }
        }
    });

    if (isSubmitted) {
        return (
            <section className="w-full py-20 bg-gradient-to-br from-[#0B1D26] to-[#1A3A4B] flex flex-col items-center justify-center">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
                    <p className="text-xl text-[#CBAF75]/90 max-w-2xl mx-auto mb-8">
                        We've received your message and will get back to you shortly.
                    </p>
                    <Button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-[#CBAF75] hover:bg-[#D4AF37] text-[#0B1D26]"
                    >
                        Send Another Message
                    </Button>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full py-20 bg-gradient-to-br from-[#0B1D26] to-[#1A3A4B] flex flex-col items-center justify-center">
            <div className="container px-4 md:px-6">
                <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12">
                    <h2 className="text-2xl font-bold text-white mb-6 [font-family:var(--font-playfair)]">
                        Send Us a Message
                    </h2>
                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-white mb-2">
                                Full Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#CBAF75]" />
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    className="pl-10 bg-white/5 border-white/20 text-white"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                            </div>
                            {formik.touched.name && formik.errors.name && (
                                <p className="text-[#CBAF75] mt-1">{formik.errors.name}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-white mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#CBAF75]" />
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    className="pl-10 bg-white/5 border-white/20 text-white"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                            </div>
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-[#CBAF75] mt-1">{formik.errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-white mb-2">
                                Phone
                            </label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#CBAF75]" />
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+263 XXX XXX XXX"
                                    className="pl-10 bg-white/5 border-white/20 text-white"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                />
                            </div>
                            {formik.touched.phone && formik.errors.phone && (
                                <p className="text-[#CBAF75] mt-1">{formik.errors.phone}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-white mb-2">
                                Message
                            </label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Your message..."
                                className="bg-white/5 border-white/20 text-white min-h-[150px]"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                            />
                            {formik.touched.message && formik.errors.message && (
                                <p className="text-[#CBAF75] mt-1">{formik.errors.message}</p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-[#CBAF75] hover:bg-[#D4AF37] text-[#0B1D26]"
                            disabled={formik.isSubmitting}
                        >
                            {formik.isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}