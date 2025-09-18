import "./App.scss";
import Imprint from "./components/imprint/imprint";
import { MainPage } from "./shared/components/logic/routes";
import Footer from "./components/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToElement from "./shared/components/logic/ScrollToElement";
import PrivacyPolicy from "./components/privacy-policy/privacy-policy";


function App() {

  return (
    <BrowserRouter>
    <ScrollToElement />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
