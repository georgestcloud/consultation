import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OrderInformation from "./components/OrderInformation";
import Measurements from "./components/Measurements";
import Footer from "./components/Footer";

import FormsPage from "./pages/FormsPage";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <OrderInformation />
      <Measurements />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/forms"
        element={<FormsPage />}
      />
    </Routes>
  );
}

export default App;