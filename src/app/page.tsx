import { AboutPreview } from "@/components/shared/about-us"
import Header from "@/components/shared/Header"
import { InvestmentFocus } from "@/components/shared/investment-focus"
import Navbar from "@/components/shared/Navbar"
import { OurApproach } from "@/components/shared/our-approach"

function Home() {
    return (
        <main>
            <Navbar />
            <Header />
            <AboutPreview />
            <OurApproach />
            <InvestmentFocus />
        </main>
    )
}

export default Home
