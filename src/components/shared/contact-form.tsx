'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useState } from 'react';
import { Mail, MessageCircle, User } from 'lucide-react';

interface ContactFormValues {
  name: string;
  phone: string;
  message: string;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  phone: Yup.string()
    .min(10, 'Please enter a valid WhatsApp number')
    .required('WhatsApp number is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required')
});

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      name: '',
      phone: '',
      message: ''
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await fetch('/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok) {
          toast.success('Message sent successfully!');
          setIsSubmitted(true);
          formik.resetForm();
        } else {
          toast.error(data.message || 'Failed to send message');
        }
      } catch (error) {
        toast.error('An unexpected error occurred');
      } finally {
        setSubmitting(false);
      }
    }
  });

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
        <p className="text-[#CBAF75]/90 mb-6">
          Your message has been sent successfully. We'll get back to you shortly.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          className="bg-[#CBAF75] hover:bg-[#D4AF37] text-[#0B1D26]"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6 max-w-2xl mx-auto">
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
            className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </div>
        {formik.touched.name && formik.errors.name ? (
          <div className="text-[#CBAF75] mt-1">{formik.errors.name}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="phone" className="block text-white mb-2">
          WhatsApp Number
        </label>
        <div className="relative">
          <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#CBAF75]" />
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="263XXXXXXXXX"
            className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
        </div>
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-[#CBAF75] mt-1">{formik.errors.phone}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="block text-white mb-2">
          Your Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          className="bg-white/5 border-white/20 text-white placeholder:text-white/50 min-h-[150px]"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <div className="text-[#CBAF75] mt-1">{formik.errors.message}</div>
        ) : null}
      </div>

      <Button
        type="submit"
        className="w-full bg-[#CBAF75] hover:bg-[#D4AF37] text-[#0B1D26] font-medium"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? 'Sending...' : 'Send Message'}
        <Mail className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}