import {Route, Routes} from "react-router";
import {Acheter} from "./pages/Acheter/Acheter";
import {Estimer} from "./pages/Estimer/Estimer";
import {Vendre} from "./pages/Vendre/Vendre";
import {FAQ} from "./pages/FAQ/FAQ";
import {Propos} from "./pages/Propos/Propos";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Home} from "./Home";
import 'primeicons/primeicons.css';
import {ScrollTop} from 'primereact/scrolltop';


function App() {
  return (
    <>
      <Header />
      <ScrollTop />
      <Routes>
        <Route index path="/" element={ <Home /> }/>
        <Route path="/vendre" element={ <Vendre /> }/>
        <Route path="/acheter" element={ <Acheter /> }/>
        <Route path="/estimer" element={ <Estimer /> }/>
        <Route path="/propos" element={ <Propos /> }/>
        <Route path="/faq" element={ <FAQ /> }/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
