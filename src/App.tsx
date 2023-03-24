import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./views/components/Footer/Footer";
import Nav from "./views/components/Nav/Nav";
import HomePage from "./views/pages/HomePage";
import Spells from "./views/pages/Spells";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/spells" element={<Spells />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
