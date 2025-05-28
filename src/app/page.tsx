import { AboutPreview } from "@/components/shared/about-us"
import Header from "@/components/shared/Header"
import { InvestmentFocus } from "@/components/shared/investment-focus"
import Navbar from "@/components/shared/Navbar"

function Home() {
    return (
        <main>
            <Navbar />
            <Header />
            <AboutPreview />
            <InvestmentFocus />
        </main>
    )
}

export default Home
