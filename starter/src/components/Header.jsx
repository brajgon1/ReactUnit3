import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h2>Devmountain Eatery</h2>
      <nav>
        <Link to="" className="nav-btn">
          Home
        </Link>
        <Link to="/newRecipe" className="nav-btn">
          Add Recipe
        </Link>
      </nav>
    </header>
  );
};

export default Header;
