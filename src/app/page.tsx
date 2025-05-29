import { AboutPreview } from "@/components/shared/about-us"
import Header from "@/components/shared/Header"
import { InvestmentFocus } from "@/components/shared/investment-focus"
import Navbar from "@/components/shared/Navbar"
import { OurApproach } from "@/components/shared/our-approach"
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
        </main>
    )
}

export default Home
