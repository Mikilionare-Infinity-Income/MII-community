import { HeroSection } from "./hero-section";
import { LeadershipSection } from "./leadership-section";
import { MissionSection } from "./mission-section";
import { TeamSection } from "./team-section";

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            <HeroSection />
            <MissionSection />
            {/* <ValuesSection /> */}
            <TeamSection />
            <LeadershipSection />
        </div>
    );
}