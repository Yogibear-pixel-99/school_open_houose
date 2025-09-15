import HeroSection from "./hero-section/hero-section";
import SectionSeparator from "../shared/components/section-separator/section-separator";
import MainSection from "./all-schools-section/all-schools";
import SchoolInfos from "./school-infos-section/school-infos";
import ContactMainSection from "./contact-section/contact";

export function MainPage () {
    return (
            <>
              <HeroSection />
              <SectionSeparator />
              <MainSection />
              <SectionSeparator />
              <SchoolInfos />
              <SectionSeparator />
              <ContactMainSection />
              <SectionSeparator />
            </>
    );
}


