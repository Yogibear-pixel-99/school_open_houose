import HeroSection from "../../components/hero-section/hero-section";
import SectionSeparator from "../components/section-separator/section-separator";
import MainSection from "../../components/all-schools-section/all-schools";
import SchoolInfos from "../../components/school-infos-section/school-infos";
import ContactMainSection from "../../components/contact-section/contact";

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


