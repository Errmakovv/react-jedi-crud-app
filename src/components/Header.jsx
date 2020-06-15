import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand">
        JEDI
      </span>
      <Link className="nav-item nav-link active" to="/people">
        People
      </Link>
      <Link className="nav-item nav-link" to="/planets">
        Planets
      </Link>
      <Link className="nav-item nav-link" to="/starships">
        Starships
      </Link>
    </nav>
  );
}

export default Header;
