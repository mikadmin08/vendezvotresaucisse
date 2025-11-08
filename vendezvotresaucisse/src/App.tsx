import { Route, Routes } from "react-router";
import { ScrollTop } from "primereact/scrolltop";
import { Acheter } from "./pages/Acheter/Acheter";
import { Estimer } from "./pages/Estimer/Estimer";
import { Vendre } from "./pages/Vendre/Vendre";
import { FAQ } from "./pages/FAQ/FAQ";
import { Propos } from "./pages/Propos/Propos";
import { CGNV } from "./pages/CGNV/CGNV";
import { Mentions } from "./pages/Mentions/Mentions";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Schedular } from "./components/Pubs/Schedular";
import { KonamiGate } from "./components/Konami/KonamiGate";
import { Home } from "./Home";
import "primeicons/primeicons.css";

function EasterEgg() {
  window.open(
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "_blank",
    "noopener,noreferrer"
  );
  return <></>;
}

function App() {
  return (
    <>
      <Header />
      <ScrollTop />
      <Schedular />
      <KonamiGate resetAfterMs={0} enableEnter={false}>
        <EasterEgg />
      </KonamiGate>
      <main>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/vendre" element={<Vendre />} />
          <Route path="/acheter" element={<Acheter />} />
          <Route path="/estimer" element={<Estimer />} />
          <Route path="/propos" element={<Propos />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/cgnv" element={<CGNV />} />
          <Route path="/mentions" element={<Mentions />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
