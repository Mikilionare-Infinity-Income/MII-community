import { AboutPreview } from "@/components/pages/home/about-us"
import { ContactSection } from "@/components/pages/home/contact-section"
import Header from "@/components/pages/home/Header"
import { InvestmentFocus } from "@/components/pages/home/investment-focus"
import { OurApproach } from "@/components/pages/home/our-approach"
import { VisionQuote } from "@/components/pages/home/vision-quote"
import { WhyChooseUs } from "@/components/pages/home/why-choose-us"

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
