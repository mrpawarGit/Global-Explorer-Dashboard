import { Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import Favorites from "./pages/Favorites";
import "./App.css";

function App() {
  return (
    <FavoritesProvider>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:name" element={<CountryDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </FavoritesProvider>
  );
}

export default App;
