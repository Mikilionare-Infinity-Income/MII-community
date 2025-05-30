import { PortfolioCTA } from "@/components/pages/portfolio/portfolio-cta";
import { PortfolioHero } from "@/components/pages/portfolio/portfolio-hero";
import { RealEstateFocus } from "@/components/pages/portfolio/real-estate-focus";

export default function PortfolioPage() {
    return (
        <div className="flex flex-col">
            <PortfolioHero />
            <RealEstateFocus />
            <PortfolioCTA />
        </div>
    );
}