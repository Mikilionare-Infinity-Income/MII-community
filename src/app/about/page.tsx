import { HeroSection } from "../../components/pages/about/hero-section";
import { LeadershipSection } from "../../components/pages/about/leadership-section";
import { MissionSection } from "../../components/pages/about/mission-section";
import { TeamSection } from "../../components/pages/about/team-section";
import { ValuesSection } from "../../components/pages/about/values-section";

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            <HeroSection />
            <MissionSection />
            <TeamSection />
            <LeadershipSection />
            <ValuesSection />
        </div>
    );
}