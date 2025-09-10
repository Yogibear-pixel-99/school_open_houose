import HeroSection from './components/hero-section/hero-section';
import MainSection from './components/main-section/main-section';
import './App.scss'
import SectionSeparator from './shared/components/section-separator/section-separator';
import SchoolInfos from './components/school-infos/school-infos';

function App() {

  return (
    <>
      <HeroSection />
      <SectionSeparator />
      <MainSection />
      <SectionSeparator />
      <SchoolInfos />
      <SectionSeparator />
          </>
  )
}

export default App
