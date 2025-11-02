import {Route, Routes} from "react-router";
import { Acheter } from "./Acheter";
import { Estimer } from "./Estimer";
import {Vendre} from "./Vendre";
import { Header } from "./Header";
import { Propos } from "./Propos";
import {Home} from "./Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/vendre" element={<Vendre/>}/>
        <Route path="/acheter" element={<Acheter/>}/>
        <Route path="/estimer" element={<Estimer/>}/>
        <Route path="/propos" element={<Propos/>}/>
      </Routes>
    </>
  )
}

export default App
