import "./App.scss";
import Imprint from "./components/imprint/imprint";
import { MainPage } from "./shared/logic/routes";
import Footer from "./components/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToElement from "./shared/logic/scrollToElement";
import PrivacyPolicy from "./components/privacy-policy/privacy-policy";
import { useEffect } from "react";


export default function App() {

useEffect(() => {
const apiRequest = async () => {
  await getVisitors();
 
}
apiRequest();
  }, []);

  async function getVisitors() {
    try {
      const response = await fetch("https://school-infos-default-rtdb.europe-west1.firebasedatabase.app/.json");

      if (!response.ok) {
        throw new Error (`Response status: ${response.status}`)
      }
      const data = await response.json();
      let visitorsNumber = data.visitors;
      visitorsNumber++;
       await pushVisitors(visitorsNumber);

    } catch (error) {
       console.error((error as Error).message);
    }
  }

  async function pushVisitors(payload:number) {
try { const response = await fetch("https://school-infos-default-rtdb.europe-west1.firebasedatabase.app/.json", {
   method: "PUT",
        headers: {
          "Content-Type": "application/plain"
        },
        body: JSON.stringify({visitors: payload}),
});
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
} catch (error) {
  console.error("Fehler beim Senden:", (error as Error).message);
}
  }

  return (
    <BrowserRouter basename="/schoolinfos">
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



