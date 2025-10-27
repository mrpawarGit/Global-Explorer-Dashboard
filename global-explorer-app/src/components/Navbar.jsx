import { Link } from "react-router-dom";
import { useFavoritesContext } from "../context/FavoritesContext";
import "./Navbar.css";

export default function Navbar() {
  const { favorites } = useFavoritesContext();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Global Explorer Dashboard
        </Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/favorites" className="nav-link">
            Favorites
            {favorites.length > 0 && (
              <span className="favorites-badge">{favorites.length}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
