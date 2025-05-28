import { AboutPreview } from "@/components/shared/about-us"
import Header from "@/components/shared/Header"
import Navbar from "@/components/shared/Navbar"

function Home() {
    return (
        <main>
            <Navbar />
            <Header />
            <AboutPreview />
        </main>
    )
}

export default Home
