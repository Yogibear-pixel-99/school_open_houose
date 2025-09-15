import "./App.scss";
import Imprint from "./components/imprint/imprint";
import { MainPage } from "./components/routes";
import Footer from "./components/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToElement from "./shared/components/logic/ScrollToElement";


function App() {

  return (
    <BrowserRouter>
    <ScrollToElement />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/imprint" element={<Imprint />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
