import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import ShowInfo from "./pages/ShowInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:shows" element={<Shows />} />
        <Route path="/:shows/:show" element={<ShowInfo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
