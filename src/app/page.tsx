import { AboutPreview } from "@/components/shared/about-us"
import { ContactSection } from "@/components/shared/contact-section"
import { Footer } from "@/components/shared/footer"
import Header from "@/components/shared/Header"
import { InvestmentFocus } from "@/components/shared/investment-focus"
import Navbar from "@/components/shared/Navbar"
import { OurApproach } from "@/components/shared/our-approach"
import { VisionQuote } from "@/components/shared/vision-quote"
import { WhyChooseUs } from "@/components/shared/why-choose-us"

function Home() {
    return (
        <main>
            <Navbar />
            <Header />
            <AboutPreview />
            <OurApproach />
            <InvestmentFocus />
            <WhyChooseUs />
            <VisionQuote />
            <ContactSection />
            <Footer />
        </main>
    )
}

export default Home
