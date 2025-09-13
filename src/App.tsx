import HeroSection from "./components/hero-section/hero-section";
import MainSection from "./components/all-schools-section/all-schools";
import "./App.scss";
import SectionSeparator from "./shared/components/section-separator/section-separator";
import SchoolInfos from "./components/school-infos-section/school-infos";
import ContactMainSection from "./components/contact-section/contact";
import Footer from "./components/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToElement from "./shared/components/logic/ScrollToElement";


function App() {

  return (
    <BrowserRouter>
    <ScrollToElement />
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
