import { AboutPreview } from "@/components/shared/about-us"
import { ContactSection } from "@/components/shared/contact-section"
import Header from "@/components/shared/Header"
import { InvestmentFocus } from "@/components/shared/investment-focus"
import { OurApproach } from "@/components/shared/our-approach"
import { VisionQuote } from "@/components/shared/vision-quote"
import { WhyChooseUs } from "@/components/shared/why-choose-us"

function Home() {
    return (
        <main>
            <Header />
            <AboutPreview />
            <OurApproach />
            <InvestmentFocus />
            <WhyChooseUs />
            <VisionQuote />
            <ContactSection />
        </main>
    )
}

export default Home
