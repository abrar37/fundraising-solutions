import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, FundraisingProducts, Pricing, About, OurClients, GetStarted } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/fundraising-products" element={<FundraisingProducts />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-clients" element={<OurClients />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
