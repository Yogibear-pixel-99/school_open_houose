import HeroSection from './components/hero-section/hero-section';
import MainSection from './components/all-schools-section/all-schools';
import './App.scss'
import SectionSeparator from './shared/components/section-separator/section-separator';
import SchoolInfos from './components/school-infos-section/school-infos';

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
