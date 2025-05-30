import { ContactFormSection } from "@/components/pages/contact/contact-form-section";
import { ContactHero } from "@/components/pages/contact/contact-hero";
import { ContactInfo } from "@/components/pages/contact/contact-info";


export default function ContactPage() {
    return (
        <div className="flex flex-col">
            <ContactHero />
            <ContactInfo />
            <ContactFormSection />
        </div>
    );
}