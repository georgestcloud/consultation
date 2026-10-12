import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryMarquee from "./components/CategoryMarquee";
import OrderInformation from "./components/OrderInformation";
import Measurements from "./components/Measurements";
import Traditional from "./components/traditional";
import Trouser from "./components/Trouser";
import Waistcoat from "./components/Waistcoat";
import Footer from "./components/Footer";

import FormsPage from "./pages/FormsPage";

function HomePage() {

    return (
        <>

            <Navbar />

            <Hero />

            <CategoryMarquee />

            <OrderInformation />

            <Measurements />

            <Traditional />

            <Trouser />

            <Waistcoat />

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